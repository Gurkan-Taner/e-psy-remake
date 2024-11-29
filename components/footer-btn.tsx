import { Button } from "@/components/ui/button";

export default function FooterButton() {
  return (
    <div className="flex gap-8">
      <Button className="mr-auto" variant="secondary">
        <p>{"<-"}</p>
        <p>Précèdent</p>
      </Button>
      <Button className="ml-auto bg-button-bg">
        <p>Suivant</p>
        <p>{"->"}</p>
      </Button>
    </div>
  );
}
