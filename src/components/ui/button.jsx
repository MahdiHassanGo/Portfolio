"use client";
import React from "react";
import { MovingBorder } from "../../components/ui/moving-border";
import { cn } from "../../lib/utils";

export function ButtonWithMovingBorder({
  borderRadius = "1.75rem",
  children,
  className,
  ...otherProps
}) {
  return (
    <button
      className={cn(
        "relative bg-transparent text-xl h-16 w-40 p-[1px] overflow-hidden",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={2000} rx="30%" ry="30%" />
      </div>
      <div
        className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </button>
  );
}
