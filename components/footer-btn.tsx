import { Button } from "@/components/ui/button";

export default function FooterButton() {
  return (
    <div className="flex gap-8 mt-auto w-full">
      <Button className="mr-auto" variant="secondary">
        <p>{"<-"}</p>
        <p>Précèdent</p>
      </Button>
      <Button className="ml-auto bg-primary-600">
        <p>Suivant</p>
        <p>{"->"}</p>
      </Button>
    </div>
  );
}
