import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "soft" | "cyan" | "bordered";
  radius?: "card" | "panel";
}

export const Card: React.FC<CardProps> = ({
  variant = "surface",
  radius = "card",
  className,
  children,
  ...props
}) => {
  const variants = {
    surface: "bg-surface border border-border shadow-sm",
    soft: "bg-surface-soft border border-brand/20",
    cyan: "bg-surface-cyan border border-cyan/20",
    bordered: "bg-transparent border border-border",
  };

  const radiuses = {
    card: "rounded-card p-6",
    panel: "rounded-panel p-6 md:p-8",
  };

  return (
    <div
      className={twMerge(
        "relative overflow-hidden transition-all",
        variants[variant],
        radiuses[radius],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
