"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparkleProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}

export const SparklesCore = (props: SparkleProps) => {
  const {
    className,
    minSize = 0.6,
    maxSize = 2.4,
    particleDensity = 40,
    particleColor = "#10B981",
  } = props;

  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < particleDensity; i++) {
      items.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    setParticles(items);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((p, i) => (
        <motion.span
          key={`sparkle-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: particleColor,
            borderRadius: "50%",
            boxShadow: `0 0 ${p.size * 3}px ${particleColor}`,
          }}
        />
      ))}
    </div>
  );
};
