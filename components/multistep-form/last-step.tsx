import Image from "next/image";
import Loading from "@/public/images/loading.gif";

export default function LastStep() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-2">
      <Image alt="Icone de chargement" src={Loading} width={86} height={86} />
      <p>Mise en relation...</p>
    </div>
  );
}


