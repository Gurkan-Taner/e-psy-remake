import Micro from "@/public/images/micro.png";
import Speaker from "@/public/images/speaker.png";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FirstStep() {
  return (
    <>
      <Card>
        <Image alt="Image de micro" src={Micro} width={256} height={256} />
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
            J&apos;écoute attentivement une personne qui a besoin de discuter.
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
