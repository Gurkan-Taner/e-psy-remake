import MessageBox from "./message-box";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import ArrowUp from "@/public/icons/arrow-narrow-up.svg";
import { useState } from "react";
import { Message } from "@/types/message";
import { useAppContext } from "@/context/state";

interface ChatProps {
  clientId: string;
  sendMessage: (message: string) => void;
  messageList: Message[];
}

export const Chat = ({ clientId, sendMessage, messageList }: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const { userState } = useAppContext();

  return (
    <div className="flex flex-col w-full gap-4 md:p-4 text-white md:w-[70%] h-[95%] m-auto overflow-auto">
      <MessageBox clientId={clientId} messages={messageList} />
      <form
        className="flex w-full mt-auto py-8 md:py-0 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(currentMessage);
          setCurrentMessage("");
        }}
      >
        <div className="relative w-full">
          <Input
            placeholder="Entrez votre message..."
            className="w-full pr-12 bg-white rounded-full text-black shadow-lg h-10 focus:border-primary-300"
            disabled={userState.partnerLeft}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            value={currentMessage}
          />
          <Button
            color="primary"
            className="absolute top-1/2 -translate-y-1/2 right-2 rounded-full bg-primary-500 w-8 h-8 p-2 flex items-center justify-center"
            disabled={userState.partnerLeft}
            onClick={() => {
              sendMessage(currentMessage);
              setCurrentMessage("");
            }}
          >
            <Image alt="Send message" src={ArrowUp} />
          </Button>
        </div>
      </form>
    </div>
  );
};
