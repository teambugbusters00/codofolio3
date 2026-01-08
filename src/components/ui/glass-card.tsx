import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "strong" | "rainbow";
  glow?: "none" | "primary" | "accent" | "neon-blue" | "neon-purple" | "neon-cyan";
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "rainbow", glow = "none", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "glass-card",
      subtle: "glass-panel p-6",
      strong: "glass-card bg-card/80",
      rainbow: "rainbow-glass-card",
    };

    const glowStyles = {
      none: "",
      primary: "glow-primary",
      accent: "glow-accent",
      "neon-blue": "glow-neon-blue",
      "neon-purple": "glow-neon-purple",
      "neon-cyan": "glow-neon-cyan",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          glowStyles[glow],
          hover && "hover-lift cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
