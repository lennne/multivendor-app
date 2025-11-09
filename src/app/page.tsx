import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

/**
 * Renders a padded vertical stack of UI controls used as a simple demo layout.
 *
 * The layout includes a Button (elevated), an Input, a Progress indicator set to 50,
 * a Textarea, and a RadioGroup, each placed in its own row.
 *
 * @returns A JSX element containing the composed UI controls
 */
export default function Home() {
  return (
    <div className="p-4">
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant={"elevated"}>
          I am a button
        </Button>
      </div>
      <div>
        <Input placeholder="I am an input"/>
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Textarea placeholder="I am a textarea"/>
      </div>
      <div>
        <RadioGroup />
      </div>
    </div>
    </div>
  );
}