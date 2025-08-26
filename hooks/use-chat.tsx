import { useEffect, useState } from "react";

import { Message } from "@/types/message";
import { useAppContext } from "@/context/state";
import { toast } from "react-toastify";

export const useChat = (clientId: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);

  const {
    userState,
    toggleWaiting,
    setConversationSubject,
    setJoined,
    joinedAudio,
    leavedAudio,
    setPartnerLeft,
    setMode,
    setTherapieSubject,
    setListenerSubject,
  } = useAppContext();

  const joinChat = () => {
    const newSocket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
    let subject: string | string[] = "";

    if (userState.mode === "therapie") subject = userState.therapieSubject;
    else subject = userState.listenerSubject;

    newSocket.onopen = () => {
      newSocket.send(
        JSON.stringify({
          action: "join",
          mode: userState.mode,
          subject,
          client_id: clientId,
        })
      );
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.action === "waiting") {
        toggleWaiting(true);
      } else if (data.action === "connected") {
        joinedAudio.play();
        toggleWaiting(false);
        setJoined(true);
        // if (data.therapie_subject) {
        //   setConversationSubject(data.therapie_subject);
        // }
      } else if (data.action === "message") {
        setMessageList((prev) => [
          ...prev,
          { author: "other", message: data.content },
        ]);
      } else if (data.action === "leaved") {
        toast.info("L'utilisateur a quitté la conversation");
        leavedAudio.play();
        socket?.close();
        setPartnerLeft(true);
      }
    };

    newSocket.onclose = () => {
      setJoined(false);
      setPartnerLeft(false);
      setMessageList([]);
      socket?.close();
    };

    window.onbeforeunload = () => {
      newSocket?.send(JSON.stringify({ action: "leave", client_id: clientId }));
      newSocket.close();
    };

    setSocket(newSocket);
  };

  const leaveChat = () => {
    setMode("therapie");
    setTherapieSubject("");
    setListenerSubject((prev: string[]) => []);
    socket?.send(JSON.stringify({ action: "leave", client_id: clientId }));
    socket?.close();
    setMessageList([]);
    setJoined(false);
  };

  const sendMessage = (message: string) => {
    if (message && userState.joined) {
      socket?.send(
        JSON.stringify({
          action: "message",
          client_id: clientId,
          content: message,
        })
      );
      setMessageList((prev) => [...prev, { author: clientId, message }]);
    }
  };

  useEffect(() => {
    return () => socket?.close();
  }, [socket]);

  return {
    messageList,
    joinChat,
    leaveChat,
    sendMessage,
  };
};


