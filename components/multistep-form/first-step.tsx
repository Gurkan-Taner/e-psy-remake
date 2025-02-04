import Micro from "@/public/images/micro.png";
import Speaker from "@/public/images/speaker.png";

import { Label } from "@/components/ui/label";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppContext } from "@/context/state";

export default function FirstStep() {
  const { setMode } = useAppContext();

  return (
    <>
      <RadioGroup className="grid grid-cols-1 md:grid-cols-2 items-center sm:gap-4 md:gap-0 h-[60%] my-auto">
        <Label className="hover:scale-105 ease-in duration-100 w-[80%] m-auto">
          <Card
            className="relative bg-no-repeat bg-[length:150px_100%] bg-left flex flex-col p-1 sm:p-4"
            style={{ backgroundImage: `url(${Micro.src})` }}
          >
            <RadioGroupItem
              className="ml-auto"
              value="therapie"
              onClick={() => {
                setMode("therapie");
              }}
            />
            <CardHeader className="text-center">
              <CardTitle className="font-semibold">
                Je souhaite discuter
              </CardTitle>
              <CardDescription>
                J&apos;entame une discussion pour parler de ce qui me pèse.
              </CardDescription>
            </CardHeader>
          </Card>
        </Label>
        <Label className="hover:scale-105 ease-in duration-100 w-[80%] m-auto">
          <Card
            className="relative bg-no-repeat bg-[length:150px_100%] bg-left flex flex-col p-1 sm:p-4"
            style={{ backgroundImage: `url(${Speaker.src})` }}
          >
            <RadioGroupItem
              className="ml-auto"
              value="listener"
              onClick={() => {
                setMode("listener");
              }}
            />
            <CardHeader className="text-center">
              <CardTitle className="font-semibold">
                Je souhaite écouter
              </CardTitle>
              <CardDescription>
                J&apos;écoute attentivement une personne qui a besoin de
                discuter.
              </CardDescription>
            </CardHeader>
          </Card>
        </Label>
      </RadioGroup>
    </>
  );
}
