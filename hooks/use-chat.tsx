import { useEffect, useRef, useState, useCallback } from "react";
import { Message } from "@/types/message";
import { useToast } from "@/components/toast/toast-context";

const joinedAudio =
  typeof window !== "undefined" ? new Audio("/audio/joined.mp3") : null;
const leavedAudio =
  typeof window !== "undefined" ? new Audio("/audio/leaved.mp3") : null;

export interface UserState {
  mode: string;
  listenerSubject: string[];
  therapieSubject: string;
  isWaiting: boolean;
  joined: boolean;
  partnerLeft: boolean;
}

const DEFAULT_USER_STATE: UserState = {
  mode: "",
  listenerSubject: [],
  therapieSubject: "",
  isWaiting: false,
  joined: false,
  partnerLeft: false,
};

export const useChat = (clientId: string) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [userState, setUserState] = useState<UserState>(DEFAULT_USER_STATE);
  const { error, info } = useToast();

  const userStateRef = useRef(userState);
  useEffect(() => {
    userStateRef.current = userState;
  }, [userState]);

  const closeSocket = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.onclose = null;
      socketRef.current.close();
      socketRef.current = null;
    }
  }, []);

  const joinChat = useCallback(() => {
    if (socketRef.current) return;

    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
    socketRef.current = ws;

    ws.onopen = () => {
      const { mode, therapieSubject, listenerSubject } = userStateRef.current;
      ws.send(
        JSON.stringify({
          action: "join",
          mode,
          subject: mode === "therapie" ? therapieSubject : listenerSubject,
          client_id: clientId,
        }),
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data) as {
        action: string;
        content?: string;
      };

      switch (data.action) {
        case "waiting":
          setUserState((prev) => ({ ...prev, isWaiting: true }));
          break;
        case "connected":
          joinedAudio?.play();
          setUserState((prev) => ({ ...prev, isWaiting: false, joined: true }));
          break;
        case "message":
          setMessageList((prev) => [
            ...prev,
            { author: "other", message: data.content ?? "" },
          ]);
          break;
        case "leaved":
          info("L'utilisateur a quitté la conversation");
          leavedAudio?.play();
          setUserState((prev) => ({ ...prev, partnerLeft: true }));
          break;
      }
    };

    ws.onerror = () => {
      error("Erreur de connexion au serveur.");
      closeSocket();
    };

    ws.onclose = () => {
      socketRef.current = null;
    };
  }, [clientId, closeSocket]);

  const leaveChat = useCallback(() => {
    socketRef.current?.send(
      JSON.stringify({ action: "leave", client_id: clientId }),
    );
    closeSocket();
    setMessageList([]);
    setUserState(DEFAULT_USER_STATE);
  }, [clientId, closeSocket]);

  const sendMessage = useCallback(
    (message: string) => {
      if (!message.trim() || !userStateRef.current.joined) return;
      socketRef.current?.send(
        JSON.stringify({
          action: "message",
          client_id: clientId,
          content: message,
        }),
      );
      setMessageList((prev) => [...prev, { author: clientId, message }]);
    },
    [clientId],
  );

  const setMode = useCallback((mode: string) => {
    setUserState((prev) => ({ ...prev, mode }));
  }, []);

  const setTherapieSubject = useCallback((therapieSubject: string) => {
    setUserState((prev) => ({ ...prev, therapieSubject }));
  }, []);

  const setListenerSubject = useCallback(
    (updateFn: (prev: string[]) => string[]) => {
      setUserState((prev) => ({
        ...prev,
        listenerSubject: updateFn(prev.listenerSubject),
      }));
    },
    [],
  );

  useEffect(() => {
    const handleBeforeUnload = () => {
      socketRef.current?.send(
        JSON.stringify({ action: "leave", client_id: clientId }),
      );
      closeSocket();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      closeSocket();
    };
  }, [clientId, closeSocket]);

  return {
    userState,
    messageList,
    joinChat,
    leaveChat,
    sendMessage,
    setMode,
    setTherapieSubject,
    setListenerSubject,
  };
};
