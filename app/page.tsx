import Image from "next/image";
import SidebarChatIcon from "@/public/icons/chat.svg";
import SidebarAvatarIcon from "@/public/icons/avatar.svg";
import Micro from "@/public/images/micro.png";
import Speaker from "@/public/images/speaker.png";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FooterButton from "@/components/footer-btn";

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-primary-bg">
      <header className="py-8 flex flex-col items-center justify-between">
        <Image alt="Icône de chat" src={SidebarChatIcon} />
        <Image alt="Icône d'avatar" src={SidebarAvatarIcon} />
      </header>
      <main className="my-6 mr-6 flex flex-col w-full bg-main-bg rounded-3xl justify-center items-center p-8">
        <section className="flex flex-col p-16 gap-16 bg-white rounded-2xl shadow-md">
          {/* Premiere etape du form */}
          <div className="flex gap-16">
            <Card>
              <Image
                alt="Image de micro"
                src={Micro}
                width={256}
                height={256}
              />
              <CardHeader className="text-center">
                <CardTitle>Je souhaite discuter</CardTitle>
                <CardDescription>
                  J&apos;entame une discussion pour parler de ce qui me pèse.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <Image
                alt="Image de haut parleur"
                src={Speaker}
                width={256}
                height={256}
              />
              <CardHeader className="text-center">
                <CardTitle>Je souhaite écouter</CardTitle>
                <CardDescription>
                  J&apos;écoute attentivement une personne qui a besoin de
                  discuter.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Deuxieme etape du form */}
          {/* <h3 className="font-medium">Je souhaite parler de...</h3>
          <div>
            <Checkbox />
          </div> */}
          <FooterButton />
        </section>
      </main>
    </div>
  );
}
