"use client";

import React, { useState } from "react";
import {
  FileText,
  Folder,
  ChevronRight,
  Plus,
  GripVertical,
  Check,
  Code2,
  Sparkles,
  Heading,
  List,
  MessageSquare,
  Hash,
  Table,
  CheckSquare,
  Layers,
  Terminal,
  Activity,
  Calendar,
  Share2,
  MoreHorizontal,
  CloudCheck,
  CheckCircle2,
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/aceternity/card-3d";
import { Badge } from "@/components/ui/badge";

export function EditorMockup() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Define Tiptap block schema for custom React nodes", done: true },
    { id: 2, text: "Implement bi-directional MDX compiler with AST caching", done: true },
    { id: 3, text: "Connect offline-first sync with CRDT conflict resolution", done: false },
  ]);

  const [counter, setCounter] = useState(148200);

  const toggleCheck = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <CardContainer className="inter-var w-full max-w-5xl" containerClassName="py-0">
      <CardBody className="relative w-full rounded-2xl border border-white/10 bg-[#141B18]/95 p-1 sm:p-2 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl group/card hover:border-[#10B981]/40 transition-colors">
        {/* Editor Window Frame */}
        <div className="w-full rounded-xl border border-white/5 bg-[#0A0F0D] overflow-hidden text-[#8FA19A]">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#141B18]/60 select-none">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]/90" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]/90" />
              <div className="h-3 w-3 rounded-full bg-[#10B981]/90" />
              <div className="hidden sm:flex items-center gap-1.5 ml-3 text-xs text-[#8FA19A]/80 font-mono">
                <span>workspace</span>
                <span>/</span>
                <span className="text-[#F2F5F4]">architecture-v2.mdx</span>
              </div>
            </div>

            {/* Center Status */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981]">Saved to cloud</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40">12ms sync</span>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="emeraldGlow" className="hidden sm:inline-flex py-0.5 text-[10px]">
                MDX Active
              </Badge>
              <div className="flex items-center gap-1 text-[#8FA19A]">
                <Share2 className="h-3.5 w-3.5 hover:text-[#F2F5F4] cursor-pointer" />
                <MoreHorizontal className="h-3.5 w-3.5 hover:text-[#F2F5F4] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Window Inner Grid: Sidebar + Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
            {/* Notion-style Left Sidebar */}
            <div className="hidden md:flex md:col-span-3 border-r border-white/10 bg-[#0E1512] p-3 flex-col justify-between text-xs font-medium">
              <div className="space-y-4">
                {/* Workspace Name */}
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] font-bold text-[10px]">
                      NV
                    </div>
                    <span className="font-semibold text-[#F2F5F4]">Acme Engineering</span>
                  </div>
                  <ChevronRight className="h-3 w-3 text-[#8FA19A]" />
                </div>

                {/* Section: Documents */}
                <div className="space-y-1">
                  <div className="px-2 text-[10px] uppercase tracking-wider text-[#8FA19A]/60 font-mono">
                    Workspace Notes
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[#141B18] text-[#10B981] border border-[#10B981]/20">
                    <FileText className="h-3.5 w-3.5 text-[#10B981]" />
                    <span className="truncate font-semibold">architecture-v2.mdx</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <FileText className="h-3.5 w-3.5" />
                    <span className="truncate">design-tokens.md</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <FileText className="h-3.5 w-3.5" />
                    <span className="truncate">database-migration.mdx</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <Folder className="h-3.5 w-3.5" />
                    <span className="truncate">RFCs & Proposals</span>
                  </div>
                </div>

                {/* Section: Tags */}
                <div className="space-y-1 pt-2">
                  <div className="px-2 text-[10px] uppercase tracking-wider text-[#8FA19A]/60 font-mono">
                    Blocks & Components
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 text-[11px] text-[#8FA19A]">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="h-3 w-3 text-[#2DD4BF]" />
                      &lt;RevenueMetrics /&gt;
                    </span>
                    <span className="font-mono text-[10px] text-[#10B981]">live</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 text-[11px] text-[#8FA19A]">
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-3 w-3 text-[#2DD4BF]" />
                      &lt;BenchmarkChart /&gt;
                    </span>
                    <span className="font-mono text-[10px] text-white/30">v1.4</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8FA19A]">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                  <span>CRDT Engine</span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981]">ONLINE</span>
              </div>
            </div>

            {/* Main Canvas Editor Area */}
            <div className="col-span-1 md:col-span-9 p-4 sm:p-6 lg:p-8 bg-[#0A0F0D] relative overflow-hidden">
              {/* Note Header / Meta */}
              <CardItem translateZ="20" className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-[#8FA19A]">
                  <span className="text-xl">⚡</span>
                  <span className="text-[#10B981] font-mono">SPECIFICATION-2026</span>
                  <span>•</span>
                  <span>Updated 2 minutes ago</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F2F5F4] tracking-tight">
                  Next-Gen Component Architecture & State
                </h1>
                <p className="text-sm text-[#8FA19A] leading-relaxed">
                  Design specification for embedding live React components inside Tiptap block nodes
                  with zero hydration mismatch and real-time AST serialization.
                </p>
              </CardItem>

              {/* Block 1: Heading 2 with drag handle */}
              <CardItem translateZ="30" className="group/block relative flex items-start gap-2 mb-3">
                <div className="opacity-0 group-hover/block:opacity-100 transition-opacity flex items-center gap-0.5 text-[#8FA19A] cursor-grab -ml-6 pt-1">
                  <Plus className="h-3.5 w-3.5 hover:text-[#10B981]" />
                  <GripVertical className="h-3.5 w-3.5" />
                </div>
                <h2 className="text-lg font-bold text-[#F2F5F4] flex items-center gap-2">
                  <Hash className="h-4 w-4 text-[#10B981]" />
                  Core Engineering Milestones
                </h2>
              </CardItem>

              {/* Block 2: Interactive Checklist */}
              <CardItem translateZ="40" className="space-y-2 mb-6 pl-2">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className="flex items-center gap-3 group/check cursor-pointer py-0.5 select-none"
                  >
                    <div
                      className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all ${
                        item.done
                          ? "bg-[#10B981] border-[#10B981] text-[#0A0F0D]"
                          : "border-white/20 bg-transparent group-hover/check:border-[#10B981]"
                      }`}
                    >
                      {item.done && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-sm transition-colors ${
                        item.done
                          ? "line-through text-[#8FA19A]/50"
                          : "text-[#F2F5F4] group-hover/check:text-[#10B981]"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </CardItem>

              {/* Block 3: Code Block with JetBrains Mono */}
              <CardItem translateZ="50" className="mb-6">
                <div className="rounded-xl border border-white/10 bg-[#141B18] overflow-hidden shadow-lg">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#0E1512] text-xs font-mono text-[#8FA19A]">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-3.5 w-3.5 text-[#10B981]" />
                      <span>NodeViewRenderer.tsx</span>
                    </div>
                    <span className="text-[10px] text-[#2DD4BF]">TypeScript MDX</span>
                  </div>
                  <pre className="p-4 font-mono text-xs text-[#8FA19A] overflow-x-auto leading-relaxed bg-[#0E1512]/60">
                    <span className="text-[#10B981]">import</span> &#123; ReactNodeViewRenderer &#125;{" "}
                    <span className="text-[#10B981]">from</span>{" "}
                    <span className="text-[#2DD4BF]">&apos;@tiptap/react&apos;</span>;{"\n"}
                    <span className="text-[#10B981]">import</span> &#123; MetricCard &#125;{" "}
                    <span className="text-[#10B981]">from</span>{" "}
                    <span className="text-[#2DD4BF]">&apos;@/components/mdx/metric&apos;</span>;{"\n\n"}
                    <span className="text-[#8FA19A]/60">// Embedded live React component block</span>{"\n"}
                    <span className="text-[#10B981]">export const</span> MdxMetricExtension = Extension.create&#40;&#123;{"\n"}
                    {"  "}name: <span className="text-[#2DD4BF]">&apos;mdxMetricCard&apos;</span>,{"\n"}
                    {"  "}addNodeView&#40;&#41; &#123;{"\n"}
                    {"    "}<span className="text-[#10B981]">return</span> ReactNodeViewRenderer&#40;MetricCard&#41;;{"\n"}
                    {"  "}&#125;,{"\n"}
                    &#125;&#41;;
                  </pre>
                </div>
              </CardItem>

              {/* Block 4: Embedded Live MDX Component with Real Interaction */}
              <CardItem translateZ="60" className="mb-6">
                <div className="rounded-xl border border-[#10B981]/40 bg-gradient-to-br from-[#141B18] to-[#0E1512] p-4 shadow-xl shadow-[#10B981]/5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                      <span className="font-mono text-xs text-[#10B981] font-semibold">
                        &lt;MetricCard trend=&quot;+24.8%&quot; /&gt;
                      </span>
                    </div>
                    <Badge variant="teal" className="text-[10px]">
                      Live Rendered
                    </Badge>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase font-mono tracking-wider text-[#8FA19A]">
                        Quarterly Active Workspaces
                      </div>
                      <div
                        suppressHydrationWarning
                        className="text-2xl font-bold font-mono text-[#F2F5F4] mt-0.5"
                      >
                        ${counter.toLocaleString("en-US")}
                      </div>
                      <div className="text-xs text-[#10B981] flex items-center gap-1 mt-0.5 font-medium">
                        <span>↑ +24.8%</span>
                        <span className="text-[#8FA19A]">vs last quarter</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCounter((prev) => prev + 1250)}
                      className="px-3 py-1.5 rounded-lg bg-[#10B981] text-[#0A0F0D] font-semibold text-xs hover:bg-[#059669] transition-all shadow-md active:scale-95 cursor-pointer self-start sm:self-auto"
                    >
                      + Trigger Event
                    </button>
                  </div>
                </div>
              </CardItem>

              {/* Block 5: The Open "/" Slash Command Menu! */}
              <CardItem
                translateZ="80"
                className="relative -mt-2 sm:ml-4 z-20 max-w-sm rounded-xl border border-[#10B981]/50 bg-[#141B18] p-2 shadow-2xl shadow-black/80 backdrop-blur-xl"
              >
                <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8FA19A] border-b border-white/10 flex items-center justify-between">
                  <span>Slash Command &ldquo;/&rdquo;</span>
                  <span className="text-[#10B981] font-bold">Tiptap Blocks</span>
                </div>

                <div className="space-y-0.5 mt-1">
                  {/* Selected Item */}
                  <div className="flex items-center justify-between rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 px-2.5 py-1.5 text-xs text-[#F2F5F4] font-medium cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#10B981]" />
                      <span>MDX React Component</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/20 px-1 rounded">
                      &lt;/&gt;
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Heading className="h-3.5 w-3.5" />
                      <span>Heading 1</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8FA19A]">H1</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-3.5 w-3.5" />
                      <span>Interactive To-Do List</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8FA19A]">[]</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>Syntax Code Block</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8FA19A]">```</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[#8FA19A] hover:bg-white/5 hover:text-[#F2F5F4] transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Table className="h-3.5 w-3.5" />
                      <span>Database Table View</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8FA19A]">Table</span>
                  </div>
                </div>
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
