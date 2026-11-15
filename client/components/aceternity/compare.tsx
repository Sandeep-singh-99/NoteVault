"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, Code2, Play, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export const Compare = ({
  firstContent,
  secondContent,
  className,
  firstContentClassName,
  secondContentClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
}: {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  className?: string;
  firstContentClassName?: string;
  secondContentClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slideMode === "hover" || isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => slideMode === "drag" && setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className={cn(
        "relative w-full h-[480px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-[#141B18] select-none shadow-2xl",
        className
      )}
    >
      {/* Second Content (Right side / Base layer: Live Rendered Output) */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full overflow-hidden bg-[#141B18]",
          secondContentClassname
        )}
      >
        {secondContent}
      </div>

      {/* First Content (Left side / Clipped overlay: Raw MDX Source) */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full overflow-hidden bg-[#0A0F0D]",
          firstContentClassName
        )}
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        {firstContent}
      </div>

      {/* Slider Divider Line */}
      {showHandlebar && (
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#10B981] via-[#2DD4BF] to-[#10B981] z-30 cursor-ew-resize shadow-[0_0_15px_#10B981]"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          {/* Circular Handlebar Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-[#10B981] text-[#0A0F0D] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.8)] border border-white/40">
            <GripVertical className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
  );
};
