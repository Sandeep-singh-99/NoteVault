"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WordItem {
  text: string;
  className?: string;
  breakAfter?: boolean;
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: WordItem[];
  className?: string;
  cursorClassName?: string;
}) => {
  return (
    <div className={cn("w-full max-w-5xl mx-auto my-4 px-4 text-center", className)}>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FAFAFA] leading-[1.18] sm:leading-[1.15] text-balance">
        {words.map((word, idx) => (
          <React.Fragment key={`word-${idx}`}>
            <motion.span
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className={cn("inline-block mr-2 sm:mr-3.5", word.className)}
            >
              {word.text}
            </motion.span>
            {word.breakAfter && <br className="hidden sm:inline" />}
          </React.Fragment>
        ))}
        {/* Animated Typewriter Cursor */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={cn(
            "inline-block w-[3px] sm:w-[5px] h-6 sm:h-10 md:h-12 lg:h-14 bg-[#10B981] ml-1 align-baseline rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]",
            cursorClassName
          )}
        />
      </h1>
    </div>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  return (
    <div className={cn("font-bold text-center", className)}>
      <div className="leading-snug tracking-tight">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1,
            }}
            className="inline-block mr-2 text-[#FAFAFA]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
