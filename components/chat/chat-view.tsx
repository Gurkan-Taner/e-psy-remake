"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Message } from "@/types/message";
import { TOPICS } from "@/data/topics";

interface ChatViewProps {
  clientId: string;
  mode: string;
  selectedTopic: string;
  messageList: Message[];
  partnerLeft: boolean;
  onSendMessage: (message: string) => void;
}

export default function ChatView({
  clientId,
  mode,
  selectedTopic,
  messageList,
  partnerLeft,
  onSendMessage,
}: ChatViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");

  const topic = TOPICS.find((t) => t.id === selectedTopic);

  const handleSend = () => {
    if (!inputValue.trim() || partnerLeft) return;
    onSendMessage(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const canSend = inputValue.trim() !== "" && !partnerLeft;

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <motion.div
      key="chat"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[1] mt-20 flex h-[calc(100vh-100px)] w-full max-w-[680px] flex-col"
    >
      <div className="flex items-center gap-3 rounded-t-[20px] border border-[rgba(145,165,155,0.15)] border-b-0 bg-[rgba(145,165,155,0.08)] px-6 py-4">
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-2 flex-shrink-0 rounded-full bg-[#7bc47b]"
        />

        <div>
          <div className="text-sm font-semibold text-[#E6EAE8]">
            {mode === "therapie" ? "Vous êtes en conversation" : "Vous écoutez"}
          </div>
          <div className="mt-[2px] text-xs text-[rgba(230,234,232,0.45)]">
            {topic?.label} - Anonyme & sécurisé
          </div>
        </div>

        {partnerLeft && (
          <div className="ml-auto rounded-full border border-[rgba(255,140,100,0.25)] bg-[rgba(255,140,100,0.12)] px-3 py-1 text-xs text-[rgba(255,180,150,0.8)]">
            Votre partenaire a quitté
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto border border-[rgba(145,165,155,0.15)] border-y-0 bg-[rgba(145,165,155,0.04)] p-6">
        {messageList.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-center">
            <div>
              <div className="mb-3 text-[32px]">🌿</div>
              <p className="text-sm leading-[1.6] text-[rgba(230,234,232,0.35)]">
                La conversation commence.
                <br />
                Prenez le temps qu&apos;il vous faut.
              </p>
            </div>
          </div>
        ) : (
          messageList.map((msg, i) => {
            const isMine = msg.author === clientId;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[72%] break-words px-[18px] py-3 text-sm leading-[1.6]
                  ${
                    isMine
                      ? "rounded-[18px_18px_4px_18px] bg-[rgb(98,114,106)] text-[#E6EAE8]"
                      : "rounded-[18px_18px_18px_4px] border border-[rgba(145,165,155,0.2)] bg-[rgba(145,165,155,0.12)] text-[rgba(230,234,232,0.85)]"
                  }`}
                >
                  {msg.message}
                </div>
              </motion.div>
            );
          })
        )}
        <div ref={containerRef} />
      </div>

      <div className="flex items-end gap-3 rounded-b-[20px] border border-[rgba(145,165,155,0.15)] border-t border-t-[rgba(145,165,155,0.1)] bg-[rgba(145,165,155,0.06)] px-5 py-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            partnerLeft
              ? "L'autre participant a quitté..."
              : "Écrivez votre message..."
          }
          disabled={partnerLeft}
          rows={1}
          className={`max-h-[120px] flex-1 resize-none rounded-[14px] border border-[rgba(145,165,155,0.2)]
          bg-[rgba(145,165,155,0.08)] px-4 py-3 text-sm leading-[1.5] text-[#E6EAE8] outline-none transition
          ${partnerLeft ? "opacity-50" : "opacity-100"}`}
        />

        <motion.button
          whileHover={canSend ? { scale: 1.06 } : {}}
          whileTap={canSend ? { scale: 0.94 } : {}}
          onClick={handleSend}
          disabled={!canSend}
          className={`flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full transition
          ${
            canSend
              ? "cursor-pointer bg-[rgb(98,114,106)]"
              : "cursor-not-allowed bg-[rgba(145,165,155,0.1)]"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M16 9L2 2L5.5 9L2 16L16 9Z"
              fill={canSend ? "#E6EAE8" : "rgba(145,165,155,0.4)"}
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
