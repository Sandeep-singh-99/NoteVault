"use client";

import React from "react";
import { StickyScroll } from "@/components/aceternity/sticky-scroll-reveal";
import { FolderPlus, PenTool, LayoutGrid, Check, Sparkles, Code2, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
  const content = [
    {
      step: "01",
      title: "Create your workspace",
      description:
        "Initialize your vault in seconds. Choose from engineering RFCs, sprint planning, system design specs, or start with a pristine blank canvas. All folders and notes sync locally with instant offline availability.",
      icon: <FolderPlus className="h-5 w-5" />,
      content: (
        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-[#0A0F0D] border border-white/10 p-5 font-mono text-xs text-[#8FA19A]">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[#10B981] font-bold">New Vault Setup</span>
              <span className="text-[10px] text-[#2DD4BF]">Local-First</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#141B18] border border-[#10B981]/30 text-[#F2F5F4] flex items-center justify-between">
                <span>📁 ~/engineering/core-specs</span>
                <span className="text-[#10B981] text-[10px]">INITIALIZED</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#141B18]/40 border border-white/5 text-[#8FA19A]">
                <span>📄 architecture-rfc.mdx</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#141B18]/40 border border-white/5 text-[#8FA19A]">
                <span>📄 sprint-24-metrics.mdx</span>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>Encrypted SQLite + IndexedDB synced</span>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Write with blocks & MDX",
      description:
        "Type naturally using standard markdown syntax, or trigger the '/' command to drop rich block nodes. Embed live React buttons, tables, metric counters, and code blocks with syntax highlighting.",
      icon: <PenTool className="h-5 w-5" />,
      content: (
        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-[#0A0F0D] border border-white/10 p-5 font-mono text-xs text-[#8FA19A]">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[#2DD4BF] font-bold">Slash Command Trigger</span>
              <Badge variant="teal" className="text-[10px] py-0">
                Tiptap Block
              </Badge>
            </div>
            <div className="space-y-1.5">
              <div className="p-2 rounded bg-[#10B981]/15 border border-[#10B981]/30 text-[#F2F5F4] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>/mdx &lt;LiveChart /&gt;</span>
                </span>
                <span className="text-[10px] text-[#10B981]">RETURN</span>
              </div>
              <div className="p-2 rounded bg-white/5 text-[#8FA19A] flex items-center justify-between">
                <span>/heading 2</span>
                <span className="text-[10px]">H2</span>
              </div>
              <div className="p-2 rounded bg-white/5 text-[#8FA19A] flex items-center justify-between">
                <span>/checklist</span>
                <span className="text-[10px]">[]</span>
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg border border-white/10 bg-[#141B18] text-[#F2F5F4] text-[11px] flex items-center justify-between">
            <span>&lt;Counter start=&#123;100&#125; /&gt;</span>
            <span className="text-[#10B981] font-bold">100 → Live</span>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Organize, search & ship",
      description:
        "Tag blocks across documents, run sub-millisecond fuzzy searches with ⌘K, and publish your notes to living documentation or export clean MDX files straight into your Next.js project.",
      icon: <LayoutGrid className="h-5 w-5" />,
      content: (
        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-[#0A0F0D] border border-white/10 p-5 font-mono text-xs text-[#8FA19A]">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[#10B981] font-bold">Vault Organization</span>
              <span className="text-[10px] text-[#8FA19A]">Export Ready</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="emeraldGlow" className="text-[10px]">
                  #architecture
                </Badge>
                <Badge variant="teal" className="text-[10px]">
                  #react-19
                </Badge>
                <Badge variant="secondary" className="text-[10px]">
                  #v2.0
                </Badge>
              </div>
              <div className="p-3 rounded-lg bg-[#141B18] border border-white/5 space-y-1">
                <div className="text-[#F2F5F4] font-semibold">Publish to Docs Site</div>
                <div className="text-[11px] text-[#8FA19A]">
                  docs.company.com/specs/v2
                </div>
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#10B981] text-[#0A0F0D] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md">
            <span>Export to GitHub Repo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="emeraldGlow" className="mb-4">
            Simple 3-Step Flow
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F5F4] tracking-tight">
            How NoteVault works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8FA19A] leading-relaxed">
            From quick brainstorm to live interactive product specs in three seamless steps.
          </p>
        </div>

        {/* Sticky Scroll Reveal */}
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
