"use client";

import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useChat } from "@/hooks/use-chat";
import FormView from "@/components/chat/form-view";
import WaitingView from "@/components/chat/waiting-view";
import ChatView from "@/components/chat/chat-view";

const CLIENT_ID =
  typeof window !== "undefined"
    ? (sessionStorage.getItem("clientId") ??
      (() => {
        const id = uuidv4();
        sessionStorage.setItem("clientId", id);
        return id;
      })())
    : uuidv4();

export default function ChatPage() {
  const {
    userState,
    messageList,
    joinChat,
    leaveChat,
    sendMessage,
    setMode,
    setTherapieSubject,
    setListenerSubject,
  } = useChat(CLIENT_ID);

  const {
    mode,
    therapieSubject,
    listenerSubject,
    isWaiting,
    joined,
    partnerLeft,
  } = userState;

  const view: "form" | "waiting" | "chat" = joined
    ? "chat"
    : isWaiting
      ? "waiting"
      : "form";

  const selectedTopic =
    mode === "therapie" ? therapieSubject : (listenerSubject[0] ?? "");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[rgb(50,59,54)] p-6 font-sans text-[#E6EAE8]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(98,114,106,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[rgba(145,165,155,0.1)] bg-[rgba(50,59,54,0.7)] px-10 py-5 backdrop-blur-xl">
        <a
          href="/"
          className="flex items-center gap-2.5 text-inherit no-underline"
        >
          <div className="h-[7px] w-[7px] rounded-full bg-[rgb(145,165,155)]" />

          <span className="font-serif text-[19px] font-semibold">E-Psy</span>
        </a>

        {view !== "form" && (
          <button
            onClick={leaveChat}
            className="cursor-pointer rounded-full border border-[rgba(145,165,155,0.25)] bg-transparent px-5 py-2 text-[13px] text-[rgba(230,234,232,0.6)] transition hover:text-white"
          >
            Quitter
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {view === "form" && (
          <FormView
            key="form"
            mode={mode}
            therapieSubject={therapieSubject}
            listenerSubject={listenerSubject}
            onSetMode={setMode}
            onSetTherapieSubject={setTherapieSubject}
            onSetListenerSubject={setListenerSubject}
            onJoin={joinChat}
          />
        )}

        {view === "waiting" && <WaitingView key="waiting" />}

        {view === "chat" && (
          <ChatView
            key="chat"
            clientId={CLIENT_ID}
            mode={mode}
            selectedTopic={selectedTopic}
            messageList={messageList}
            partnerLeft={partnerLeft}
            onSendMessage={sendMessage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
