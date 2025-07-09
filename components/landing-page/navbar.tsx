import Image from "next/image";
import SidebarChatIcon from "@/public/icons/chat.svg";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="flex w-full justify-between items-center">
      <Image
        alt="Logo du site qui représente une messagerie"
        src={SidebarChatIcon}
      />
      <div className="flex gap-8">
        <p>Accueil</p>
        <p>À propos</p>
      </div>
      <Button className="bg-primary-700 border-primary-600">Rejoindre</Button>
    </header>
  );
}


