import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

const Heading = ({ children, size = "md", asChild = false, className = "" }: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(`font-bold font-sans ${className}`, {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};

export default Heading;
