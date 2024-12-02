import { useRef, useEffect } from "react";

import { Message } from "@/types/message";

interface MessageComponentProps {
  messages: Message[];
  clientId: string;
}

export default function MessageBox({
  messages,
  clientId,
}: MessageComponentProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <section className="flex flex-col h-full gap-3 text-white overflow-auto">
      {messages.map((message, i) => {
        return (
          <div
            key={`${message} - ${i}`}
            className={[
              "p-4 text-left rounded-2xl  w-fit max-w-[85%] md:max-w-[60%]",
              message.author === clientId
                ? "bg-primary-500 ml-auto text-white"
                : "bg-white text-black",
            ].join(" ")}
          >
            <p>{message.message}</p>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </section>
  );
}
