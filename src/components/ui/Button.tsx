import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-cyan";
  size?: "default" | "sm" | "lg";
  asLink?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-bold transition-colors select-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-control";

    const variants = {
      primary: "bg-brand-dark text-white hover:bg-brand-ink active:bg-brand-ink/90 shadow-sm",
      secondary:
        "bg-surface text-brand-dark border border-brand-dark/40 hover:bg-surface-soft hover:border-brand-dark active:bg-surface-soft/80",
      "outline-cyan":
        "bg-surface-cyan text-cyan-ink border border-cyan/40 hover:bg-cyan/20 active:bg-cyan/30",
    };

    const sizes = {
      default: "min-h-[48px] px-6 py-3 text-base",
      sm: "min-h-[40px] px-4 py-2 text-sm",
      lg: "min-h-[52px] px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
