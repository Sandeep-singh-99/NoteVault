"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star, CheckCircle } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
    handle?: string;
    role?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "65s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: start
            ? `scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite`
            : "none",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[380px] max-w-full relative rounded-2xl border border-white/10 bg-[#0A0A0A] px-6 py-6 md:w-[420px] shrink-0 hover:border-[#10B981]/40 transition-colors shadow-xl"
          >
            <div className="flex items-center gap-1 text-[#10B981] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#10B981] text-[#10B981]" />
              ))}
            </div>
            <blockquote>
              <p className="text-sm leading-relaxed text-[#FAFAFA] font-normal mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#10B981] to-[#2DD4BF] flex items-center justify-center text-[#000000] font-bold text-sm shrink-0 shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-[#FAFAFA]">
                      {item.name}
                    </span>
                    <CheckCircle className="h-3.5 w-3.5 text-[#10B981]" />
                  </div>
                  <span className="text-xs text-[#A1A1AA] truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
