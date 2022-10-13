import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

const Button = ({ children, asChild = false }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        `text-black font-semibold font-sans
         bg-cyan-500 p-4 rounded-md w-full text-sm
         hover:bg-cyan-300 transition-colors focus:ring-2 ring-white
          outline-none
        `
      )}
    >
      {children}
    </Comp>
  );
};

export default Button;
