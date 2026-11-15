"use client";

import React, { useState, useEffect } from "react";
import {
  Blocks,
  Code2,
  Sparkles,
  Moon,
  Search,
  ArrowDownToLine,
  CheckCircle2,
  Terminal,
  GripVertical,
  Plus,
  GitBranch,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { PlaceholdersAndVanishInput } from "@/components/aceternity/placeholders-and-vanish-input";
import { Badge } from "@/components/ui/badge";

export function FeaturesGrid() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Write in blocks. Render in React. Export in MDX.";

  useEffect(() => {
    let currentIdx = 0;
    let isDeleting = false;
    const interval = setInterval(() => {
      if (!isDeleting) {
        setTypingText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
        if (currentIdx === fullText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1500);
        }
      } else {
        setTypingText(fullText.slice(0, currentIdx - 1));
        currentIdx--;
        if (currentIdx === 0) {
          isDeleting = false;
        }
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  const searchPlaceholders = [
    "Search 'auth-session-hook.mdx'...",
    "Search 'postgres-schema-migration'...",
    "Search '/telemetry-metrics'...",
    "Search 'design-tokens-v2'...",
  ];

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emeraldGlow" className="mb-4">
            Bento Grid Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F5F4] tracking-tight">
            Crafted for engineers who value speed and control
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8FA19A] leading-relaxed">
            NoteVault marries Notion’s modular block hierarchy with the raw developer superpowers of MDX, Tiptap, and React.
          </p>
        </div>

        {/* Aceternity Bento Grid with Varied Spans & Animated Visuals */}
        <BentoGrid>
          {/* Card 1: Tiptap Block Editor (span 2) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Tiptap Block Editor"
            badge="Draggable Nodes"
            description="Every paragraph, header, and table is an independent draggable block node. Reorder effortlessly with multi-level nesting and sub-millisecond typing."
            icon={<Blocks className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-[#0A0F0D] border border-white/5 p-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px] text-[#8FA19A]">
                  <span className="flex items-center gap-1.5 text-[#10B981]">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                    tiptap_canvas:active
                  </span>
                  <span>Markdown + React</span>
                </div>
                <div className="space-y-2 py-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141B18] border border-[#10B981]/30 text-[#F2F5F4]">
                    <GripVertical className="h-3.5 w-3.5 text-[#8FA19A]" />
                    <span className="text-[#10B981] font-bold">#</span>
                    <span>{typingText}</span>
                    <span className="inline-block w-1.5 h-4 bg-[#10B981] animate-pulse" />
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg text-[#8FA19A]/80 text-[11px]">
                    <Plus className="h-3.5 w-3.5 text-[#8FA19A]" />
                    <span>Type &apos;/&apos; for commands or drag blocks to reorder</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#8FA19A] pt-1 border-t border-white/5">
                  <span>AST: 12 nodes</span>
                  <span className="text-[#2DD4BF]">0ms latency</span>
                </div>
              </div>
            }
          />

          {/* Card 2: Full MDX Support (span 1) */}
          <BentoGridItem
            className="md:col-span-1"
            title="Full MDX Support"
            badge="React 19"
            description="Embed live interactive React components directly into your markdown. Props and states compile in real time."
            icon={<Code2 className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-[#0A0F0D] border border-white/5 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-[#8FA19A] border-b border-white/5 pb-1.5">
                  <span className="text-[#2DD4BF]">&lt;TelemetryChart /&gt;</span>
                  <span className="text-[#10B981]">LIVE</span>
                </div>
                <div className="space-y-1 text-[11px] text-[#8FA19A] py-2">
                  <div>
                    <span className="text-[#10B981]">&lt;</span>
                    <span className="text-[#2DD4BF]">MetricCard</span>
                  </div>
                  <div className="pl-3 text-[#F2F5F4]">
                    trend=<span className="text-[#10B981]">&quot;+24.8%&quot;</span>
                  </div>
                  <div className="pl-3 text-[#F2F5F4]">
                    autoSync=<span className="text-[#10B981]">&#123;true&#125;</span>
                  </div>
                  <div>
                    <span className="text-[#10B981]">/&gt;</span>
                  </div>
                </div>
                <div className="p-1.5 rounded bg-[#10B981]/15 text-[#10B981] text-[10px] flex items-center justify-between font-bold">
                  <span>Hydrated Node</span>
                  <span>100% Type-Safe</span>
                </div>
              </div>
            }
          />

          {/* Card 3: Intelligent Slash Commands (span 1) */}
          <BentoGridItem
            className="md:col-span-1"
            title="Smart Slash Commands"
            badge="Keyboard First"
            description="Summon block types, drop JSX widgets, or format callouts with a single keystroke without leaving your keyboard."
            icon={<Sparkles className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-[#0A0F0D] border border-white/5 p-3.5 font-mono text-xs">
                <div className="px-2 py-1 text-[10px] text-[#8FA19A] border-b border-white/5 flex items-center justify-between">
                  <span>Quick Palette &apos;/&apos;</span>
                  <span className="text-[#10B981]">Enter ↵</span>
                </div>
                <div className="space-y-1 py-1">
                  <div className="flex items-center justify-between px-2 py-1 rounded bg-[#10B981]/20 border border-[#10B981]/40 text-[#F2F5F4]">
                    <span>/mdx component</span>
                    <span className="text-[10px] text-[#10B981]">&lt;&gt;</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 rounded text-[#8FA19A]">
                    <span>/code-block</span>
                    <span className="text-[10px]">```</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 rounded text-[#8FA19A]">
                    <span>/checklist</span>
                    <span className="text-[10px]">[]</span>
                  </div>
                </div>
                <div className="text-[10px] text-[#8FA19A] text-center pt-1 border-t border-white/5">
                  Sub-millisecond filtering
                </div>
              </div>
            }
          />

          {/* Card 4: Instant Fuzzy Search with Aceternity Placeholders & Vanish Input (span 2) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Instant Fuzzy Search"
            badge="⌘K Vanish Search"
            description="Search thousands of notes, blocks, and code snippets in sub-millisecond time. Powered by client-side IndexedDB indexes."
            icon={<Search className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-center items-center rounded-2xl bg-[#0A0F0D] border border-white/5 p-6">
                <div className="w-full max-w-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8FA19A] mb-2 px-1">
                    <span>Universal Vault Search</span>
                    <span className="text-[#10B981]">Client-Indexed</span>
                  </div>
                  <PlaceholdersAndVanishInput
                    placeholders={searchPlaceholders}
                    onSubmit={(e) => e.preventDefault()}
                  />
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#8FA19A] px-1">
                    <span>Press Enter to simulate vanish search</span>
                    <span className="text-[#2DD4BF]">0.4ms avg match</span>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 5: Dark-First Precision (span 1) */}
          <BentoGridItem
            className="md:col-span-1"
            title="Dark-First Precision"
            badge="#0A0F0D Canvas"
            description="Calibrated contrast engineered specifically to eliminate eye strain during midnight programming sessions."
            icon={<Moon className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-[#0A0F0D] border border-white/5 p-4 font-mono text-xs">
                <div className="text-[10px] text-[#8FA19A] border-b border-white/5 pb-1.5 flex justify-between">
                  <span>Palette Swatches</span>
                  <span className="text-[#10B981]">AA+ Contrast</span>
                </div>
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="p-2 rounded-lg bg-[#0A0F0D] border border-white/20 text-center">
                    <div className="h-4 w-full rounded bg-[#0A0F0D] mb-1" />
                    <span className="text-[9px] text-[#8FA19A]">#0A0F0D</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#141B18] border border-white/20 text-center">
                    <div className="h-4 w-full rounded bg-[#141B18] mb-1" />
                    <span className="text-[9px] text-[#8FA19A]">#141B18</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 text-center">
                    <div className="h-4 w-full rounded bg-[#10B981] shadow-[0_0_8px_#10B981] mb-1" />
                    <span className="text-[9px] text-[#10B981]">#10B981</span>
                  </div>
                </div>
                <div className="text-[10px] text-[#10B981] font-bold text-center">
                  OLED Ready • Pure Technical Focus
                </div>
              </div>
            }
          />

          {/* Card 6: Bi-Directional Markdown & Git I/O (span 2) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Bi-Directional Markdown I/O"
            badge="Zero Lock-In"
            description="Export to clean CommonMark, MDX bundles, or auto-sync directly into your GitHub branches with automated pull requests."
            icon={<ArrowDownToLine className="h-5 w-5" />}
            header={
              <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-[#0A0F0D] border border-white/5 p-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px] text-[#8FA19A]">
                  <span className="flex items-center gap-1.5 text-[#2DD4BF]">
                    <GitBranch className="h-3.5 w-3.5" />
                    git:main/docs-sync
                  </span>
                  <span className="text-[#10B981]">SYNCHRONIZED</span>
                </div>
                <div className="space-y-1.5 py-2 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#141B18] border border-white/5 text-[#F2F5F4]">
                    <span>commit 8a4c1f: sync specifications.mdx</span>
                    <span className="text-[#10B981] text-[10px]">12s ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#141B18]/60 text-[#8FA19A]">
                    <span>commit 3f99e2: update react metric schema</span>
                    <span className="text-[10px]">2m ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#8FA19A] pt-1 border-t border-white/5">
                  <span>Export: .md • .mdx • PDF</span>
                  <span className="text-[#10B981]">Instant Export Ready</span>
                </div>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}
