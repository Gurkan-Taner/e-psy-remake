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
    <div className="flex flex-col gap-4 md:p-4 text-white md:w-[70%] h-[95%] m-auto overflow-auto">
      <MessageBox clientId={clientId} messages={messageList} />
      <form
        className="flex w-full mt-auto py-8 md:py-0 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(currentMessage);
          setCurrentMessage("");
        }}
      >
        <Input
          placeholder="Entrez votre message..."
          className="bg-white rounded-full text-black shadow-lg h-10"
          disabled={userState.partnerLeft}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          value={currentMessage}
        />
        <Button
          color="primary"
          className="rounded-3xl bg-primary-500 w-10 h-10 p-2"
          disabled={userState.partnerLeft}
          onClick={() => {
            sendMessage(currentMessage);
            setCurrentMessage("");
          }}
        >
          <Image alt="Send message" src={ArrowUp} />
        </Button>
      </form>
    </div>
  );
};
