"use client";

import React, { useState } from "react";
import {
  Code2,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  GripVertical,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Compare } from "@/components/ui/compare";

export function EditorShowcase() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"compare" | "mdx" | "ast">("compare");
  const [userLikes, setUserLikes] = useState(482);
  const [hasLiked, setHasLiked] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleLike = () => {
    if (hasLiked) {
      setUserLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setUserLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <section id="editor-showcase" className="py-24 sm:py-32 bg-[#0A0A0A]/40 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="teal" className="mb-4">
            Aceternity Compare Slider
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA] tracking-tight">
            Slide to compare raw MDX vs live rendered output
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Drag or hover across the slider below to see how raw Markdown blocks instantly transform into interactive, hydrated React components.
          </p>

          {/* Mode Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#0A0A0A] border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "compare"
                  ? "bg-[#10B981] text-[#000000] font-bold"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              Compare Slider
            </button>
            <button
              onClick={() => setActiveTab("mdx")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "mdx"
                  ? "bg-[#10B981] text-[#000000] font-bold"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              Full MDX Source
            </button>
            <button
              onClick={() => setActiveTab("ast")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "ast"
                  ? "bg-[#10B981] text-[#000000] font-bold"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              Tiptap AST JSON
            </button>
          </div>
        </div>

        {/* Compare Display */}
        {activeTab === "compare" && (
          <div className="relative">
            {/* Top Bar Indicators */}
            <div className="flex items-center justify-between mb-3 px-2 text-xs font-mono text-[#A1A1AA]">
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <Code2 className="h-4 w-4" />
                ◀ Raw MDX Source (Left)
              </span>
              <span className="text-white/40">Hover or drag handlebar</span>
              <span className="flex items-center gap-1.5 text-[#2DD4BF]">
                Live React Component (Right) ▶
              </span>
            </div>

            <Compare
              className="h-[520px] w-full"
              slideMode="hover"
              initialSliderPercentage={50}
              firstContent={
                /* LEFT CONTENT: RAW MDX SOURCE */
                <div className="w-full h-full p-6 sm:p-8 bg-[#000000] font-mono text-xs sm:text-sm text-[#A1A1AA] leading-relaxed overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                    <span className="text-[#10B981] font-bold">
                      FILE: /specs/LiveTelemetryCard.mdx
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">MDX 3.0</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-white/30">// Frontmatter & Props</div>
                    <div><span className="text-[#10B981]">---</span></div>
                    <div><span className="text-[#2DD4BF]">title</span>: <span className="text-[#FAFAFA]">&quot;Cloud Service Health&quot;</span></div>
                    <div><span className="text-[#2DD4BF]">status</span>: <span className="text-[#10B981]">&quot;operational&quot;</span></div>
                    <div><span className="text-[#10B981]">---</span></div>
                    <div className="py-1" />
                    <div><span className="text-[#10B981]">## Real-Time Infrastructure Status</span></div>
                    <div className="text-[#A1A1AA]">Everything is functioning smoothly across all edge nodes:</div>
                    <div className="py-1" />
                    <div className="text-white/30">// Embedded Live React Component</div>
                    <div><span className="text-[#10B981]">&lt;</span><span className="text-[#2DD4BF]">TelemetryBadge</span></div>
                    <div className="pl-4"><span className="text-[#FAFAFA]">latency</span>=<span className="text-[#10B981]">&quot;18ms&quot;</span></div>
                    <div className="pl-4"><span className="text-[#FAFAFA]">uptime</span>=<span className="text-[#10B981]">&quot;99.99%&quot;</span></div>
                    <div><span className="text-[#10B981]">/&gt;</span></div>
                    <div className="py-1" />
                    <div><span className="text-[#10B981]">&gt;</span> [!NOTE] All clusters synced via CRDT.</div>
                    <div>- [x] Automated failover tested</div>
                    <div>- [x] Zero hydration discrepancy verified</div>
                  </div>
                </div>
              }
              secondContent={
                /* RIGHT CONTENT: LIVE RENDERED REACT PREVIEW */
                <div className="w-full h-full p-6 sm:p-8 bg-[#0A0A0A] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-[#A1A1AA]">
                      <span className="text-[#2DD4BF] font-bold">
                        [LIVE HYDRATED REACT VIEW]
                      </span>
                      <Badge variant="emeraldGlow" className="text-[10px] py-0">
                        Hydrated 0ms
                      </Badge>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#FAFAFA] tracking-tight">
                      Real-Time Infrastructure Status
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      Everything is functioning smoothly across all edge nodes:
                    </p>

                    {/* Rendered Telemetry Widget */}
                    <div className="my-4 p-4 rounded-xl border border-[#10B981]/40 bg-[#000000] shadow-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                          <span className="font-semibold text-xs sm:text-sm text-[#FAFAFA]">
                            Global Gateway Cluster
                          </span>
                        </div>
                        <Badge variant="default" className="text-[10px]">
                          Operational
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5 text-xs font-mono">
                        <div>
                          <span className="text-[#A1A1AA]">P99 Latency: </span>
                          <span className="text-[#10B981] font-bold">18ms</span>
                        </div>
                        <div>
                          <span className="text-[#A1A1AA]">Uptime: </span>
                          <span className="text-[#2DD4BF] font-bold">99.99%</span>
                        </div>
                      </div>
                    </div>

                    {/* Note callout */}
                    <div className="p-3 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 text-xs text-[#FAFAFA] flex items-center gap-2.5 mb-3">
                      <Sparkles className="h-4 w-4 text-[#10B981] shrink-0" />
                      <span>
                        <strong className="text-[#10B981]">Note:</strong> All clusters synced via CRDT with zero data loss.
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-[#FAFAFA]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                        <span>Automated failover tested</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                        <span>Zero hydration discrepancy verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#A1A1AA]">Test interactive state:</span>
                    <button
                      onClick={handleToggleLike}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        hasLiked
                          ? "bg-[#10B981] text-[#000000] border-[#10B981]"
                          : "border-white/10 bg-white/5 text-[#FAFAFA] hover:border-[#10B981]/40"
                      }`}
                    >
                      <span>▲ Upvote Spec</span>
                      <span className="font-mono">{userLikes}</span>
                    </button>
                  </div>
                </div>
              }
            />
          </div>
        )}

        {activeTab === "mdx" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#000000] border border-white/10 font-mono text-xs sm:text-sm text-[#A1A1AA] leading-relaxed overflow-x-auto min-h-[460px]">
            <pre className="text-[#A1A1AA]">
              <span className="text-[#10B981]">---</span>{"\n"}
              <span className="text-[#2DD4BF]">title</span>: &quot;Cloud Service Health&quot;{"\n"}
              <span className="text-[#2DD4BF]">status</span>: &quot;operational&quot;{"\n"}
              <span className="text-[#10B981]">---</span>{"\n\n"}
              <span className="text-[#10B981]"># Real-Time Infrastructure Status</span>{"\n\n"}
              Everything is functioning smoothly across all edge nodes:{"\n\n"}
              <span className="text-[#10B981]">&lt;</span>
              <span className="text-[#2DD4BF]">TelemetryBadge</span>{" "}
              <span className="text-[#FAFAFA]">latency</span>=
              <span className="text-[#10B981]">&quot;18ms&quot;</span>{" "}
              <span className="text-[#FAFAFA]">uptime</span>=
              <span className="text-[#10B981]">&quot;99.99%&quot;</span>{" "}
              <span className="text-[#10B981]">/&gt;</span>{"\n\n"}
              <span className="text-[#10B981]">&gt;</span> [!NOTE] All clusters synced via CRDT.{"\n\n"}
              - [x] Automated failover tested{"\n"}
              - [x] Zero hydration discrepancy verified
            </pre>
          </div>
        )}

        {activeTab === "ast" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#000000] border border-white/10 font-mono text-xs text-[#A1A1AA] leading-relaxed overflow-x-auto min-h-[460px]">
            <pre className="text-[#A1A1AA]">
              &#123;{"\n"}
              {"  "}<span className="text-[#2DD4BF]">&quot;type&quot;</span>: <span className="text-[#10B981]">&quot;doc&quot;</span>,{"\n"}
              {"  "}<span className="text-[#2DD4BF]">&quot;content&quot;</span>: [&#123;{"\n"}
              {"    "}<span className="text-[#2DD4BF]">&quot;type&quot;</span>: <span className="text-[#10B981]">&quot;heading&quot;</span>,{"\n"}
              {"    "}<span className="text-[#2DD4BF]">&quot;attrs&quot;</span>: &#123; <span className="text-[#2DD4BF]">&quot;level&quot;</span>: 1 &#125;,{"\n"}
              {"    "}<span className="text-[#2DD4BF]">&quot;content&quot;</span>: [&#123; <span className="text-[#2DD4BF]">&quot;type&quot;</span>: <span className="text-[#10B981]">&quot;text&quot;</span>, <span className="text-[#2DD4BF]">&quot;text&quot;</span>: <span className="text-[#10B981]">&quot;Real-Time Infrastructure Status&quot;</span> &#125;]{"\n"}
              {"  "}&#125;, &#123;{"\n"}
              {"    "}<span className="text-[#2DD4BF]">&quot;type&quot;</span>: <span className="text-[#10B981]">&quot;mdxComponent&quot;</span>,{"\n"}
              {"    "}<span className="text-[#2DD4BF]">&quot;attrs&quot;</span>: &#123;{"\n"}
              {"      "}<span className="text-[#2DD4BF]">&quot;name&quot;</span>: <span className="text-[#10B981]">&quot;TelemetryBadge&quot;</span>,{"\n"}
              {"      "}<span className="text-[#2DD4BF]">&quot;props&quot;</span>: &#123; <span className="text-[#2DD4BF]">&quot;latency&quot;</span>: <span className="text-[#10B981]">&quot;18ms&quot;</span>, <span className="text-[#2DD4BF]">&quot;uptime&quot;</span>: <span className="text-[#10B981]">&quot;99.99%&quot;</span> &#125;{"\n"}
              {"    "}&#125;{"\n"}
              {"  "}&#125;]{"\n"}
              &#125;
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
