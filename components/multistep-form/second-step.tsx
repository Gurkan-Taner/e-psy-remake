import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/context/state";

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
  const { userState, setTherapieSubject, setListenerSubject } = useAppContext();

  return (
    <div className="flex flex-col w-full gap-4 sm:p-4">
      <h3 className="font-medium">Je souhaite parler de...</h3>
      {userState.mode === "listener" && (
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => {
            return (
              <div
                key={`${item} - ${i}`}
                className="flex items-center space-x-2 border-[1px] p-4 rounded-xl hover:scale-105 ease-in duration-100"
              >
                <Checkbox
                  id={item.name}
                  className="border-gray-100"
                  checked={userState.listenerSubject.includes(item.name)}
                  onCheckedChange={(value: boolean) => {
                    setListenerSubject((prev: string[]) => {
                      return value
                        ? [...prev, item.name]
                        : prev.filter(
                            (subject: string) => subject !== item.name
                          );
                    });
                  }}
                />
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
      )}
      {userState.mode === "therapie" && (
        <RadioGroup
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          onValueChange={(subject) => {
            setTherapieSubject(subject);
          }}
          value={userState.therapieSubject}
        >
          {items.map((item, i) => {
            return (
              <div
                key={`{item} - ${i}`}
                className="flex items-center space-x-2 border-[1px] p-4 rounded-xl hover:scale-105 ease-in duration-100"
              >
                <RadioGroupItem
                  value={item.name}
                  id={item.name}
                  className="border-gray-100"
                />
                <Label htmlFor={item.name}>{item.label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
    </div>
  );
}
