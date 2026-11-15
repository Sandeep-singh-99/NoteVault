"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Check, CheckCircle2, Code2, Layers, RefreshCw } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<"block" | "mdx" | "preview">("preview");
  const [metricValue, setMetricValue] = useState(148200);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-[#0A0A0A] border border-white/10 p-6 overflow-hidden">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="emeraldGlow">Interactive Live Demo</Badge>
            <span className="text-xs text-[#A1A1AA]">Tiptap 2.x + React 19 MDX</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-[#FAFAFA]">
            Experience NoteVault Block & MDX Editor
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-[#A1A1AA]">
            Try writing, toggling embedded React components, and switching between the block tree and live renderer.
          </DialogDescription>
        </DialogHeader>

        {/* Demo Window Chrome */}
        <div className="mt-4 rounded-xl border border-white/10 bg-[#000000] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#0A0A0A]/60">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
              <div className="h-3 w-3 rounded-full bg-[#10B981]/80" />
              <span className="ml-2 font-mono text-xs text-[#A1A1AA]">
                demo-playground.mdx
              </span>
            </div>

            <div className="flex items-center gap-1 bg-black/40 rounded-lg p-0.5 border border-white/5">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                  activeTab === "preview"
                    ? "bg-[#10B981] text-[#000000]"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setActiveTab("block")}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                  activeTab === "block"
                    ? "bg-[#10B981] text-[#000000]"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                }`}
              >
                Block Tree
              </button>
              <button
                onClick={() => setActiveTab("mdx")}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                  activeTab === "mdx"
                    ? "bg-[#10B981] text-[#000000]"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                }`}
              >
                Raw MDX
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 min-h-[300px]">
            {activeTab === "preview" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#10B981]">
                  <span># SECTION 01</span>
                  <span className="text-[#A1A1AA]">•</span>
                  <span className="text-[#2DD4BF]">Interactive Node</span>
                </div>
                <h3 className="text-xl font-bold text-[#FAFAFA]">
                  Production Revenue Telemetry
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  The block below is a live React component embedded directly inside the Tiptap document.
                  Click the button inside to test state persistence!
                </p>

                {/* Embedded Live React Component */}
                <div className="rounded-xl border border-[#10B981]/30 bg-[#0A0A0A] p-4 shadow-lg shadow-[#10B981]/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA]">
                      Live MDX Widget: &lt;RevenueMetrics /&gt;
                    </span>
                    <Badge variant="teal">Connected to Supabase</Badge>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div
                        suppressHydrationWarning
                        className="text-2xl font-bold font-mono text-[#FAFAFA]"
                      >
                        ${metricValue.toLocaleString("en-US")}
                      </div>
                      <div className="text-xs text-[#10B981] mt-0.5">
                        ↑ +18.4% from last deployment
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setMetricValue((prev) => prev + 2450)}
                      className="text-xs border-[#10B981]/30 hover:border-[#10B981] text-[#10B981]"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Simulate Sale
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#FAFAFA]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Hydrated client-side with zero layout shift</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#FAFAFA]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Syncs with offline indexedDB storage</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "block" && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/5 text-[#A1A1AA]">
                  <span className="text-[#10B981] font-bold">Node 1: HeadingBlock</span> (level: 2)
                  <p className="text-[#FAFAFA] mt-1">&ldquo;Production Revenue Telemetry&rdquo;</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#10B981]/30 text-[#A1A1AA]">
                  <span className="text-[#2DD4BF] font-bold">Node 2: MdxComponentBlock</span> (component: &quot;RevenueMetrics&quot;)
                  <p className="text-[#A1A1AA] mt-1">props: &#123; endpoint: &quot;/api/v1/telemetry&quot;, live: true &#125;</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/5 text-[#A1A1AA]">
                  <span className="text-[#10B981] font-bold">Node 3: ChecklistBlock</span> (items: 2, checked: 2)
                </div>
              </div>
            )}

            {activeTab === "mdx" && (
              <pre className="font-mono text-xs text-[#A1A1AA] bg-[#0A0A0A] p-4 rounded-xl border border-white/5 overflow-x-auto leading-relaxed">
                <span className="text-[#10B981]">---</span>{"\n"}
                <span className="text-[#2DD4BF]">title</span>: Production Revenue Telemetry{"\n"}
                <span className="text-[#2DD4BF]">author</span>: engineering-lead{"\n"}
                <span className="text-[#10B981]">---</span>{"\n\n"}
                <span className="text-[#10B981]">## Production Revenue Telemetry</span>{"\n\n"}
                The block below is a live React component embedded inside the document:{"\n\n"}
                <span className="text-[#10B981]">&lt;</span>
                <span className="text-[#2DD4BF]">RevenueMetrics</span>{" "}
                <span className="text-[#FAFAFA]">endpoint</span>=
                <span className="text-[#10B981]">&quot;/api/v1/telemetry&quot;</span>{" "}
                <span className="text-[#FAFAFA]">live</span>=
                <span className="text-[#10B981]">&#123;true&#125;</span>
                <span className="text-[#10B981]">&gt;</span>{"\n"}
                {"  "}&lt;TelemetryGraph range=&quot;30d&quot; /&gt;{"\n"}
                <span className="text-[#10B981]">&lt;/</span>
                <span className="text-[#2DD4BF]">RevenueMetrics</span>
                <span className="text-[#10B981]">&gt;</span>{"\n\n"}
                - [x] Hydrated client-side with zero layout shift{"\n"}
                - [x] Syncs with offline indexedDB storage
              </pre>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-[#A1A1AA]">
            Runs locally in browser • No telemetry leaks
          </span>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-[#10B981] text-[#000000] hover:bg-[#059669] font-semibold text-xs"
          >
            Close Playground
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
