import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-transform duration-200 relative overflow-hidden inner-highlight",
      accent: "bg-gradient-accent text-accent-foreground hover:opacity-90",
      secondary: "bg-glass text-foreground border-gradient hover:opacity-90",
      outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10",
      ghost: "bg-transparent text-foreground hover:bg-muted",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const glowStyles = glow && variant !== "ghost" ? {
      primary: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.5)]",
      accent: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)]",
      outline: "hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
      ghost: "",
    } : { primary: "", accent: "", outline: "", ghost: "" };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };
