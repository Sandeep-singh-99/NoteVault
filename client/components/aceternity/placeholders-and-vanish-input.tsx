"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
  className,
}: {
  placeholders: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    const cleanup = startAnimation();
    return () => cleanup();
  }, [startAnimation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    setAnimating(true);
    if (onSubmit) onSubmit(e);
    setTimeout(() => {
      setValue("");
      setAnimating(false);
    }, 600);
  };

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto bg-[#000000] h-11 rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 border border-white/10 focus-within:border-[#10B981]",
        value && "bg-[#0A0A0A]",
        className
      )}
      onSubmit={handleSubmit}
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]">
        <Search className="h-4 w-4" />
      </div>

      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            if (onChange) onChange(e);
          }
        }}
        value={value}
        type="text"
        className={cn(
          "w-full text-xs sm:text-sm font-mono z-20 border-none bg-transparent text-[#FAFAFA] focus:outline-none focus:ring-0 pl-9 pr-10 h-full",
          animating && "text-transparent"
        )}
      />

      <button
        disabled={!value}
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-[#10B981] disabled:bg-white/5 transition duration-200 flex items-center justify-center disabled:opacity-30 cursor-pointer"
      >
        <ArrowRight className="h-3.5 w-3.5 text-[#000000]" />
      </button>

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -5,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="text-[#A1A1AA] text-xs font-mono truncate pointer-events-none pl-9"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
