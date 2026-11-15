"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingCard = ({
  children,
  className,
  glowColor = "rgba(16, 185, 129, 0.4)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
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
        "group relative rounded-2xl border border-white/10 bg-[#141B18] p-6 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10",
        className
      )}
    >
      {/* Animated gradient spotlight on hover */}
      {mousePosition && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Subtle top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-30",
        className
      )}
    >
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#10B981]/20 via-[#2DD4BF]/10 to-transparent blur-[100px] rounded-full" />
    </div>
  );
};
