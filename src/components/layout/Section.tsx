import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", children, ...props }, ref) => {
    const spacings = {
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(spacings[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
