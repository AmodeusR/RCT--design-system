import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Checkbox = (props: CheckboxProps) => {
  
  return (
    <CheckboxPrimitive.Root {...props} className="flex justify-center items-center p-[0px] w-6 h-6 rounded bg-gray-800">
      <CheckboxPrimitive.Indicator  asChild>
        <Check weight="bold" className="w-6 h-6 text-white bg-cyan-500 rounded" /> 
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
};

export default Checkbox;
