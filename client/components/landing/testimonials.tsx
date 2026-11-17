"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "NoteVault completely replaced Notion for our engineering team. Being able to drop real interactive React components straight into sprint specs without leaving markdown is pure magic.",
      name: "Marcus Vance",
      title: "Staff Software Engineer at CloudScale",
      handle: "@marcus_vance",
    },
    {
      quote:
        "The Tiptap block system is so fast. Zero typing lag, instant slash commands, and when we export to MDX, the syntax is so clean it commits directly into our Next.js repository.",
      name: "Elena Rostova",
      title: "Head of Developer Experience at StackFlow",
      handle: "@elena_dev",
    },
    {
      quote:
        "Finally a notes app that doesn't treat dark mode as an afterthought. The emerald contrast is perfect for late-night architecture reviews, and Cmd+K is faster than my local IDE.",
      name: "Siddharth Mehta",
      title: "Founder & CTO at ApexAPI",
      handle: "@sidd_cto",
    },
    {
      quote:
        "We embedded live Postgres query runners into our internal troubleshooting guides. Our on-call engineers execute diagnostics directly inside NoteVault notes. Game changer.",
      name: "Chloe Bennett",
      title: "Lead Infrastructure Architect at PulseNet",
      handle: "@chloe_arch",
    },
    {
      quote:
        "Local-first SQLite with instant cloud sync gives me the speed of Sublime Text with the collaborative power of Notion. I'll never write engineering docs in anything else.",
      name: "David K.",
      title: "Principal Systems Designer at NovaLabs",
      handle: "@david_k_dev",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Badge variant="emeraldGlow" className="mb-4">
          Community Feedback
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA] tracking-tight">
          Loved by engineers who write docs like code
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
          Here is how modern engineering organizations use NoteVault to supercharge technical documentation.
        </p>
      </div>

      {/* Infinite Moving Cards Carousel */}
      <div className="flex flex-col items-center justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          pauseOnHover={true}
        />
        <div className="mt-4">
          <InfiniteMovingCards
            items={testimonials.slice().reverse()}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
