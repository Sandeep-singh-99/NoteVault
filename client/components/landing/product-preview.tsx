"use client";

import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Share2,
  MoreHorizontal,
  Folder,
  FileText,
  ChevronRight,
  Plus,
  Minus,
  Check,
  CheckCircle2,
  Code2,
  Layers,
  Terminal,
  Activity,
  Copy,
} from "lucide-react";

export function ProductPreview() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Define Tiptap block schema for custom React nodes", done: true },
    { id: 2, text: "Implement bi-directional MDX compiler with AST caching", done: true },
    { id: 3, text: "Connect offline-first sync with CRDT conflict resolution", done: false },
  ]);

  const [counter, setCounter] = useState(148200);
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="product-preview" className="relative -mt-10 sm:-mt-16 overflow-hidden bg-[#000000]">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center space-y-3">
            <Badge variant="emeraldGlow" className="text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Interactive Editor Canvas
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] tracking-tight">
              A block editor that doesn’t treat code like plain text
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto">
              Scroll down to watch the live workspace tilt into focus. Every node is reactive, draggable, and exportable.
            </p>
          </div>
        }
      >
        {/* Editor Screen Mockup */}
        <div className="w-full h-full flex flex-col bg-[#000000] text-[#A1A1AA] select-none overflow-hidden">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]/90" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]/90" />
              <div className="h-3 w-3 rounded-full bg-[#10B981]/90" />
              <div className="hidden sm:flex items-center gap-1.5 ml-3 text-xs text-[#A1A1AA]/80 font-mono">
                <span>workspace</span>
                <span>/</span>
                <span className="text-[#FAFAFA]">architecture-v2.mdx</span>
              </div>
            </div>

            {/* Center Status */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981] font-medium">Saved to cloud</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40">12ms sync</span>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="emeraldGlow" className="hidden sm:inline-flex py-0.5 text-[10px]">
                MDX Active
              </Badge>
              <div className="flex items-center gap-1.5 text-[#A1A1AA]">
                <Share2 className="h-3.5 w-3.5 hover:text-[#FAFAFA] cursor-pointer transition-colors" />
                <MoreHorizontal className="h-3.5 w-3.5 hover:text-[#FAFAFA] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Window Inner Grid: Sidebar + Canvas */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-0">
            {/* Notion-style Left Sidebar */}
            <div className="hidden md:flex md:col-span-3 border-r border-white/10 bg-[#0A0A0A]/70 p-3 flex-col justify-between text-xs font-medium">
              <div className="space-y-4">
                {/* Workspace Name */}
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] font-bold text-[10px]">
                      NV
                    </div>
                    <span className="font-semibold text-[#FAFAFA]">Acme Engineering</span>
                  </div>
                  <ChevronRight className="h-3 w-3 text-[#A1A1AA]" />
                </div>

                {/* Navigation Items */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#A1A1AA]/60 px-2 py-1">
                    Docs & Specs
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-[#10B981]/15 text-[#10B981] font-semibold border-l-2 border-[#10B981] cursor-pointer">
                    <FileText className="h-3.5 w-3.5" />
                    <span className="truncate">architecture-v2.mdx</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-[#A1A1AA] cursor-pointer transition-colors">
                    <FileText className="h-3.5 w-3.5" />
                    <span className="truncate">tiptap-ast-nodes.mdx</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-[#A1A1AA] cursor-pointer transition-colors">
                    <Folder className="h-3.5 w-3.5" />
                    <span className="truncate">components / widgets</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-[#A1A1AA] cursor-pointer transition-colors">
                    <Terminal className="h-3.5 w-3.5" />
                    <span className="truncate">crdt-sync-engine.ts</span>
                  </div>
                </div>
              </div>

              {/* Local-first status footer */}
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#A1A1AA]">Local Cache</span>
                  <span className="text-[#10B981] font-mono">2.4 MB</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-[#10B981] rounded-full" />
                </div>
              </div>
            </div>

            {/* Main Note Canvas */}
            <div className="col-span-1 md:col-span-9 p-4 sm:p-6 overflow-y-auto space-y-5 bg-[#000000]">
              {/* Document Header */}
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] font-mono border border-[#10B981]/30">
                    v2.4.0
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[#A1A1AA] font-mono border border-white/10">
                    Tiptap + MDX
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[#2DD4BF] font-mono border border-white/10">
                    CRDT Sync
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FAFAFA] tracking-tight">
                  System Architecture & Interactive MDX Pipeline
                </h1>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  Every paragraph is a reactive block. Write raw markdown, embed stateful React widgets, and compile into headless ASTs without leaves or DOM thrashing.
                </p>
              </div>

              {/* Live Interactive MDX Block: Metrics Counter */}
              <div className="p-4 rounded-xl border border-[#10B981]/30 bg-[#0A0A0A] shadow-[0_0_20px_rgba(16,185,129,0.06)] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-[#10B981]" />
                    <span className="text-xs font-mono font-semibold text-[#10B981]">
                      &lt;LiveMetricsCounter speed=&quot;instant&quot; /&gt;
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded border border-[#2DD4BF]/20">
                    Interactive Block
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-lg bg-black/60 border border-white/5">
                  <div>
                    <div className="text-[10px] text-[#A1A1AA] font-mono uppercase tracking-wider">
                      Processed AST Blocks
                    </div>
                    <div className="text-2xl font-bold font-mono text-[#FAFAFA]">
                      {counter.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCounter((c) => c - 100)}
                      className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[#FAFAFA] transition-colors"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setCounter((c) => c + 100)}
                      className="px-3 py-1.5 rounded-lg border border-[#10B981]/40 bg-[#10B981] hover:bg-[#059669] text-black font-semibold text-xs flex items-center gap-1 transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Increment
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Checklist Block */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-[#0A0A0A] space-y-2.5">
                <div className="text-xs font-semibold text-[#FAFAFA] flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>Interactive Checklist (CRDT Synchronized)</span>
                </div>
                <div className="space-y-1.5">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors text-xs"
                    >
                      <div
                        className={`h-4 w-4 rounded flex items-center justify-center border transition-all ${
                          item.done
                            ? "bg-[#10B981] border-[#10B981] text-black"
                            : "border-white/20 bg-black"
                        }`}
                      >
                        {item.done && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <span
                        className={
                          item.done
                            ? "line-through text-[#A1A1AA]/50"
                            : "text-[#FAFAFA]"
                        }
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Block */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden text-xs font-mono">
                <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/5">
                  <div className="flex items-center gap-2 text-[#A1A1AA]">
                    <Code2 className="h-3.5 w-3.5 text-[#10B981]" />
                    <span>mdx-renderer.tsx</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                        <span className="text-[#10B981]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 text-[11px] leading-relaxed text-[#FAFAFA] overflow-x-auto">
                  <code>{`import { MDXProvider } from "@notevault/engine";
import { LiveCounter } from "./components";

export default function Document() {
  return (
    <MDXProvider components={{ LiveCounter }}>
      <Content />
    </MDXProvider>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
