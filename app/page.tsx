import Image from "next/image";
import SidebarChatIcon from "@/public/icons/chat.svg";
import SidebarAvatarIcon from "@/public/icons/avatar.svg";

import FooterButton from "@/components/footer-btn";
import SecondStep from "@/components/second-step";
import FirstStep from "@/components/first-step";

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-primary-bg">
      <header className="py-8 flex flex-col items-center justify-between">
        <Image alt="Icône de chat" src={SidebarChatIcon} />
        <Image alt="Icône d'avatar" src={SidebarAvatarIcon} />
      </header>
      <main className="my-6 mr-6 flex flex-col w-full bg-main-bg rounded-3xl justify-center items-center p-8">
        <section className="flex flex-col p-16 gap-8 bg-white rounded-2xl shadow-md">
          {/* Premiere etape du form */}
          {/* <div className="flex gap-x-16">
            <FirstStep />
          </div> */}
          {/* Deuxieme etape du form */}
          {/* <div className="flex flex-col gap-8">
            <SecondStep />
          </div> */}
          {/* Derniere etape form */}
          {/* <div className="text-center">
            <p>Mise en relation</p>
          </div> */}
          <FooterButton />
        </section>
      </main>
    </div>
  );
}
