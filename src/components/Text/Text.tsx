import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string
}

const Text = ({ children, size = "md", asChild = false, className = "" }: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(`font-sans ${className}`, {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};

export default Text;
