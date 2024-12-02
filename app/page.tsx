"use client";

import Image from "next/image";
import SidebarChatIcon from "@/public/icons/chat.svg";
import SidebarAvatarIcon from "@/public/icons/avatar.svg";
import LogoutIcon from "@/public/icons/logout.svg";
import LogoutIconMobile from "@/public/icons/logout-mobile.svg";

import MultiStepForm from "@/components/multistep-form/multi-steps";
import Chat from "@/components/chat/chat";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen max-h-screen font-[family-name:var(--font-geist-sans)] bg-primary-700 md:p-3 md:gap-2">
      <header className="hidden md:flex py-12 flex-col items-center justify-between">
        <Image alt="Icône de chat" src={SidebarChatIcon} />
        <section className="flex flex-col items-center gap-12">
          <Button variant="ghost" className="hover:bg-transparent">
            <Image alt="Déconnexion" src={LogoutIcon} />
          </Button>
          <Image alt="Icône d'avatar" src={SidebarAvatarIcon} />
        </section>
      </header>
      <main className="flex flex-col w-full bg-primary-300 md:rounded-3xl justify-center items-center md:p-0 sm:p-5 p-3">
        {/* <section className="flex flex-col bg-white rounded-2xl shadow-md p-8 w-[95%] h-[74%] sm:w-fit sm:h-fit md:min-w-[60%] md:max-w-[80%]">
          <MultiStepForm />
        </section> */}
        <section className="flex flex-col p-3 md:p-0 md:flex-row h-full w-full md:rounded-3xl">
          <Button
            variant="ghost"
            className="md:hidden hover:bg-transparent ml-auto my-4 p-1"
          >
            <Image
              alt="Déconnexion"
              src={LogoutIconMobile}
              width={32}
              height={32}
            />
          </Button>
          <Chat />
        </section>
      </main>
    </div>
  );
}
