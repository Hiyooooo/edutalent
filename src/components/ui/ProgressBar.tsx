import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatPercent } from "@/lib/format";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  showText?: boolean;
  barColor?: "brand" | "cyan" | "success";
  size?: "sm" | "default" | "lg";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showText = true,
  barColor = "brand",
  size = "default",
  className,
  ...props
}) => {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.min(100, Math.round(value))) : 0;

  const heights = {
    sm: "h-2",
    default: "h-3",
    lg: "h-4",
  };

  const colors = {
    brand: "bg-brand",
    cyan: "bg-cyan-ink",
    success: "bg-success",
  };

  return (
    <div className={twMerge("w-full space-y-1.5", className)} {...props}>
      {(label || showText) && (
        <div className="flex items-center justify-between text-xs md:text-sm font-medium">
          {label && <span className="text-text-muted">{label}</span>}
          {showText && (
            <span className="font-mono text-text font-semibold ml-auto">
              {formatPercent(safeValue)}
            </span>
          )}
        </div>
      )}
      <div
        className={twMerge(
          "w-full bg-[#DDEBE8] rounded-full overflow-hidden",
          heights[size]
        )}
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Progres pembelajaran"}
      >
        <div
          className={twMerge(
            "h-full rounded-full transition-all duration-300",
            colors[barColor]
          )}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
};
