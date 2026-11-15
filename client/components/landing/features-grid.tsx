"use client";

import React from "react";
import {
  Blocks,
  Code2,
  Sparkles,
  Moon,
  Search,
  ArrowDownToLine,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { GlowingCard } from "@/components/aceternity/glowing-border";
import { Badge } from "@/components/ui/badge";

export function FeaturesGrid() {
  const features = [
    {
      title: "Tiptap Block Editor",
      badge: "Block Architecture",
      description:
        "Every paragraph, header, and table is an independent draggable block node. Reorder effortlessly with multi-level nesting and instant keyboard shortcuts.",
      icon: Blocks,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 text-xs font-mono space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-[#141B18] border border-[#10B981]/30 text-[#10B981]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              :: draggable_node:heading
            </span>
            <span className="text-[10px] text-[#8FA19A]">L2</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-[#141B18]/60 border border-white/5 text-[#8FA19A]">
            <span>:: draggable_node:checklist</span>
            <span className="text-[10px] text-[#10B981]">active</span>
          </div>
        </div>
      ),
    },
    {
      title: "Full MDX Support",
      badge: "React 19 Inside",
      description:
        "Write pure Markdown on top, embed interactive React components below. Render metric cards, interactive charts, and API sandboxes directly inside your notes.",
      icon: Code2,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 text-xs font-mono space-y-1 text-[#8FA19A]">
          <div className="text-[#10B981]">&lt;<span className="text-[#2DD4BF]">MetricCard</span></div>
          <div className="pl-4 text-[#F2F5F4]">value=<span className="text-[#10B981]">&quot;$148,200&quot;</span></div>
          <div className="pl-4 text-[#F2F5F4]">trend=<span className="text-[#10B981]">&quot;+24.8%&quot;</span></div>
          <div className="text-[#10B981]">/&gt;</div>
        </div>
      ),
    },
    {
      title: "Intelligent Slash Commands",
      badge: "Zero Friction",
      description:
        "Hit '/' anywhere to trigger the contextual block palette. Format headings, create callouts, summon code fences, or drop custom React templates without touching your mouse.",
      icon: Sparkles,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 text-xs font-mono space-y-1.5">
          <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#10B981]/20 border border-[#10B981]/40 text-[#F2F5F4]">
            <span className="flex items-center gap-2">
              <span className="text-[#10B981]">/</span>
              <span>React Component</span>
            </span>
            <span className="text-[10px] text-[#10B981]">&lt;&gt;</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 text-[#8FA19A]">
            <span className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              <span>Code Block</span>
            </span>
            <span className="text-[10px] text-white/40">```</span>
          </div>
        </div>
      ),
    },
    {
      title: "Dark-First Precision",
      badge: "Ergonomic Palette",
      description:
        "Engineered for deep technical work. A calibrated near-black (#0A0F0D) background paired with emerald glows eliminates retina fatigue during late-night build sessions.",
      icon: Moon,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 flex items-center justify-around text-xs font-mono">
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-6 rounded-lg bg-[#0A0F0D] border border-white/20" />
            <span className="text-[10px] text-[#8FA19A]">#0A0F0D</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-6 rounded-lg bg-[#141B18] border border-white/20" />
            <span className="text-[10px] text-[#8FA19A]">#141B18</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-6 rounded-lg bg-[#10B981] shadow-[0_0_12px_#10B981]" />
            <span className="text-[10px] text-[#10B981]">#10B981</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-6 rounded-lg bg-[#2DD4BF] shadow-[0_0_12px_#2DD4BF]" />
            <span className="text-[10px] text-[#2DD4BF]">#2DD4BF</span>
          </div>
        </div>
      ),
    },
    {
      title: "Instant Cmd+K Search",
      badge: "Sub-Millisecond",
      description:
        "Fuzzy search through thousands of notes, nested blocks, and code snippets instantly. Fully indexed client-side for blazing offline navigation.",
      icon: Search,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 text-xs font-mono space-y-1.5">
          <div className="flex items-center gap-2 text-[#8FA19A] border-b border-white/5 pb-1.5">
            <Search className="h-3.5 w-3.5 text-[#10B981]" />
            <span className="text-[#F2F5F4]">query: &quot;auth-hook&quot;</span>
          </div>
          <div className="text-[11px] text-[#10B981]">
            ✓ 3 notes matched in 0.4ms
          </div>
        </div>
      ),
    },
    {
      title: "Bi-Directional Markdown I/O",
      badge: "Zero Lock-In",
      description:
        "Your thoughts belong to you. One-click export to clean CommonMark, MDX, static HTML, or auto-sync your entire vault to private GitHub repositories.",
      icon: ArrowDownToLine,
      visual: (
        <div className="mt-4 rounded-xl border border-white/5 bg-[#0A0F0D] p-3 text-xs font-mono space-y-1 text-[#8FA19A]">
          <div className="flex items-center justify-between">
            <span className="text-[#F2F5F4]">Export Target:</span>
            <span className="text-[#10B981]">.mdx bundle</span>
          </div>
          <div className="text-[10px] text-[#2DD4BF]">
            SHA: a7f8e3 • Clean React tree exported
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emeraldGlow" className="mb-4">
            Powerful Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F5F4] tracking-tight">
            Crafted for engineers who value speed and control
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8FA19A] leading-relaxed">
            NoteVault marries Notion’s modular block hierarchy with the raw developer superpowers of MDX, Tiptap, and React.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <GlowingCard
                key={idx}
                className="flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="teal" className="text-[10px]">
                      {feat.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-[#F2F5F4] tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#8FA19A] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Micro visual */}
                {feat.visual}
              </GlowingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
