"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    step: string;
    description: string;
    icon: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="relative flex justify-center space-x-10 rounded-3xl p-4 sm:p-8"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 sm:my-24">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-mono font-bold text-[#10B981]">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F5F4] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-[#8FA19A] leading-relaxed max-w-lg">
                  {item.description}
                </p>

                {/* Mobile visual display */}
                <div className="block lg:hidden mt-6 rounded-2xl border border-white/10 bg-[#141B18] p-4 overflow-hidden shadow-xl">
                  {item.content}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </div>

      {/* Desktop Sticky Graphic Panel */}
      <div
        className={cn(
          "hidden lg:block h-[420px] w-[500px] rounded-2xl border border-white/10 bg-[#141B18] sticky top-28 overflow-hidden shadow-2xl backdrop-blur-md",
          contentClassName
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/10 via-transparent to-[#2DD4BF]/5 pointer-events-none" />
        <div className="h-full w-full p-6 flex items-center justify-center">
          {content[activeCard]?.content ?? null}
        </div>
      </div>
    </div>
  );
};
