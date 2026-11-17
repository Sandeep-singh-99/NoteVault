"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    step?: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
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
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      role="region"
      aria-label="How NoteVault works: three steps"
      className="relative flex gap-8 lg:gap-16"
      ref={ref}
    >
      <div className="relative min-w-0 flex-1">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="border-b border-white/10 py-10 first:pt-2 last:border-0">
              <div className="mb-4 flex items-center gap-3 text-emerald-400">
                <span className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs">{item.step ?? String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#FAFAFA] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#A1A1AA] sm:text-base">
                {item.description}
              </p>
              <div className="mt-6 min-h-72 lg:hidden">{item.content}</div>
            </div>
          ))}

        </div>
      </div>
      <div
        className={cn(
          "sticky top-24 hidden h-80 w-[42%] shrink-0 overflow-hidden rounded-2xl bg-black lg:block",
          contentClassName,
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
};
