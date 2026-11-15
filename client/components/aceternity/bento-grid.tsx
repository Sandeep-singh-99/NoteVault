"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 shadow-input p-6 bg-[#141B18] border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden hover:border-[#10B981]/40",
        className
      )}
    >
      {/* Interactive cursor-following glow effect */}
      {mousePosition && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.25), transparent 70%)`,
          }}
        />
      )}

      {/* Top subtle highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent" />

      {/* Visual Header / Animation */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        {header}
      </div>

      {/* Text & Icon Footer */}
      <div className="relative z-10 transition duration-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-[#10B981]">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded-full border border-[#2DD4BF]/20">
              {badge}
            </span>
          )}
        </div>
        <div className="font-bold text-[#F2F5F4] text-base mb-1 group-hover/bento:text-[#10B981] transition-colors">
          {title}
        </div>
        <div className="font-normal text-[#8FA19A] text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
