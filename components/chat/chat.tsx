import { Message } from "@/types/message";
import MessageBox from "./message-box";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import ArrowUp from "@/public/icons/arrow-narrow-up.svg";

export default function Chat() {
  const messages: Message[] = [
    {
      author: "me",
      message:
        "Salut, je ressens beaucoup de stress ces derniers temps. J’ai du mal à gérer la pression au travail, et ça commence à affecter mon sommeil. Est-ce que tu as déjà vécu quelque chose de similaire ?",
    },
    {
      author: "other",
      message:
        "Ça peut vraiment être lourd de porter tout ça seul. Est-ce que tu as essayé de parler de cette pression avec tes collègues ou ton manager ?",
    },
    {
      author: "me",
      message: "c'est dur d'en parler",
    },
    {
      author: "me",
      message:
        "Salut, je ressens beaucoup de stress ces derniers temps. J’ai du mal à gérer la pression au travail, et ça commence à affecter mon sommeil. Est-ce que tu as déjà vécu quelque chose de similaire ?",
    },
    {
      author: "me",
      message:
        "Salut, je ressens beaucoup de stress ces derniers temps. J’ai du mal à gérer la pression au travail, et ça commence à affecter mon sommeil. Est-ce que tu as déjà vécu quelque chose de similaire ?",
    },
    {
      author: "me",
      message:
        "Salut, je ressens beaucoup de stress ces derniers temps. J’ai du mal à gérer la pression au travail, et ça commence à affecter mon sommeil. Est-ce que tu as déjà vécu quelque chose de similaire ?",
    },
    {
      author: "me",
      message:
        "Salut, je ressens beaucoup de stress ces derniers temps. J’ai du mal à gérer la pression au travail, et ça commence à affecter mon sommeil. Est-ce que tu as déjà vécu quelque chose de similaire ?",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:p-4 text-white md:w-[70%] h-[95%] m-auto overflow-auto">
      <MessageBox messages={messages} />
      <form className="flex w-full mt-auto py-8 md:py-0 gap-2">
        <Input
          placeholder="Entrez votre message..."
          className="bg-white rounded-full text-black shadow-lg h-10"
        />
        <Button
          color="primary"
          className="rounded-3xl bg-primary-500 w-10 h-10 p-2"
        >
          <Image alt="Send message" src={ArrowUp} />
        </Button>
      </form>
    </div>
  );
}
