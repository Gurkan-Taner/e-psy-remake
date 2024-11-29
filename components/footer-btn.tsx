import { Button } from "@/components/ui/button";

export default function FooterButton() {
  return (
    <div className="flex">
      <Button className="mr-auto" variant="secondary">
        {"<-"} Précèdent
      </Button>
      <Button className="ml-auto">Suivant {"->"}</Button>
    </div>
  );
}
