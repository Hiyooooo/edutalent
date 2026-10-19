import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "cyan" | "neutral" | "success" | "warning";
  size?: "sm" | "default";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "brand",
  size = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-medium rounded-full uppercase tracking-wider select-none";

  const variants = {
    brand: "bg-surface-soft text-brand-dark border border-brand/30",
    cyan: "bg-surface-cyan text-cyan-ink border border-cyan/30",
    neutral: "bg-surface text-text-muted border border-border",
    success: "bg-emerald-50 text-success border border-success/30",
    warning: "bg-amber-50 text-warning border border-warning/30",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    default: "px-3 py-1 text-xs md:text-sm",
  };

  return (
    <span
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </span>
  );
};
