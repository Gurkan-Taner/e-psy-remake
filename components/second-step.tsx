import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const items = [
  {
    label: "Anxiété/Stress",
    name: "stresse",
  },
  {
    label: "Dépression",
    name: "depression",
  },
  {
    label: "Estime de soi",
    name: "estime",
  },
  {
    label: "Addictions",
    name: "addiction",
  },
  {
    label: "Solitude",
    name: "solitude",
  },
  {
    label: "Autres",
    name: "autres",
  },
];

export default function SecondStep() {
  return (
    <>
      <h3 className="font-medium">Je souhaite parler de...</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item, i) => {
          return (
            <div
              key={`${item} - ${i}`}
              className="flex items-center space-x-2 border-[1px] p-4 rounded-xl hover:scale-105 ease-in duration-100"
            >
              <Checkbox id={item.name} />
              <Label
                htmlFor={item.name}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </Label>
            </div>
          );
        })}
      </div>
      <RadioGroup className="grid md:grid-cols-3 gap-4">
        {items.map((item, i) => {
          return (
            <div
              key={`{item} - ${i}`}
              className="flex items-center space-x-2 border-[1px] p-4 rounded-xl hover:scale-105 ease-in duration-100"
            >
              <RadioGroupItem value={item.name} id={item.name} />
              <Label htmlFor={item.name}>{item.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </>
  );
}
