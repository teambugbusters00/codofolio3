import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "custom";
  animate?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, variant = "primary", animate = false, as: Component = "span", children, ...props }, ref) => {
    const variants = {
      primary: "text-gradient-primary",
      accent: "text-gradient-accent",
      custom: "",
    };

    return (
      <Component
        ref={ref as any}
        className={cn(
          variants[variant],
          animate && "animate-gradient bg-[length:200%_200%]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GradientText.displayName = "GradientText";

export { GradientText };
