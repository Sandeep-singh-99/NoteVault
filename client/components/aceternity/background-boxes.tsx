"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: any;
}) => {
  const rows = useMemo(() => new Array(60).fill(1), []);
  const cols = useMemo(() => new Array(40).fill(1), []);

  // Emerald & Teal palette (No blue, pink, purple)
  const colors = [
    "#10B981", // emerald-500
    "#059669", // emerald-600
    "#34D399", // emerald-400
    "#2DD4BF", // teal-400
    "#14B8A6", // teal-500
    "#047857", // emerald-700
    "#0D9488", // teal-600
    "#6EE7B7", // emerald-300
    "#5EEAD4", // teal-300
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.7) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 pointer-events-auto",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="relative h-9 w-18 border-l border-white/[0.07]"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col-${j}`}
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2.2 },
              }}
              className="relative h-9 w-18 border-t border-r border-white/[0.07]"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-white/[0.09]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
