import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {};

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div
      className="flex gap-3 h-12 items-center py-4 px-3 rounded-md bg-gray-800 focus-within:ring-cyan-300 focus-within:ring-2 transition-all"
    >
      {children}
    </div>
  );
};

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
};

const TextInputInput = (props: TextInputInputProps) => {
  return <input type="text" className="flex-1 bg-transparent text-gray-200 placeholder:text-gray-400 font-sans text-xs outline-none" {...props} />;
};

export default {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput
};
