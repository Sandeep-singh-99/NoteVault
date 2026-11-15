"use client";

import React, { useState } from "react";
import {
  Code2,
  Sparkles,
  Play,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function EditorShowcase() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"split" | "mdx" | "ast">("split");
  const [userLikes, setUserLikes] = useState(482);
  const [hasLiked, setHasLiked] = useState(false);
  const [alertDismissed, setAlertDismissed] = useState(false);

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
    <section id="editor-showcase" className="py-20 sm:py-28 bg-[#0E1512]/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="teal" className="mb-4">
            Side-By-Side Compilation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F5F4] tracking-tight">
            See MDX come alive in real time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8FA19A] leading-relaxed">
            Write markdown on the left, watch rich block components compile into living, interactive UI on the right.
          </p>

          {/* Mode Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#141B18] border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab("split")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "split"
                  ? "bg-[#10B981] text-[#0A0F0D] font-bold"
                  : "text-[#8FA19A] hover:text-[#F2F5F4]"
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => setActiveTab("mdx")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "mdx"
                  ? "bg-[#10B981] text-[#0A0F0D] font-bold"
                  : "text-[#8FA19A] hover:text-[#F2F5F4]"
              }`}
            >
              Full MDX Source
            </button>
            <button
              onClick={() => setActiveTab("ast")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "ast"
                  ? "bg-[#10B981] text-[#0A0F0D] font-bold"
                  : "text-[#8FA19A] hover:text-[#F2F5F4]"
              }`}
            >
              Tiptap AST JSON
            </button>
          </div>
        </div>

        {/* Showcase Container */}
        <div className="rounded-2xl border border-white/10 bg-[#141B18] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0A0F0D]/60 select-none">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <div className="h-3 w-3 rounded-full bg-[#10B981]" />
              </div>
              <span className="font-mono text-xs text-[#8FA19A] hidden sm:inline">
                components/LiveTelemetryCard.mdx
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                Live Hot-Reload: 0ms
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg hover:bg-white/5 text-[#8FA19A] hover:text-[#F2F5F4] transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="h-4 w-4 text-[#10B981]" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Showcase Body */}
          {activeTab === "split" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 min-h-[460px]">
              {/* LEFT: MDX Source Code */}
              <div className="p-4 sm:p-6 bg-[#0A0F0D] font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#8FA19A]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-[#8FA19A]">
                  <span className="text-[#10B981] uppercase tracking-wider font-semibold">
                    [MDX SOURCE]
                  </span>
                  <span>UTF-8 • Markdown</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[#8FA19A]/40">// Frontmatter & Props</div>
                  <div>
                    <span className="text-[#10B981]">---</span>
                  </div>
                  <div>
                    <span className="text-[#2DD4BF]">title</span>:{" "}
                    <span className="text-[#F2F5F4]">&quot;Cloud Service Health&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#2DD4BF]">status</span>:{" "}
                    <span className="text-[#10B981]">&quot;operational&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#10B981]">---</span>
                  </div>
                  <div className="py-1" />
                  <div>
                    <span className="text-[#10B981]">## Real-Time Infrastructure Status</span>
                  </div>
                  <div className="text-[#8FA19A]">
                    Everything is functioning smoothly across all edge nodes:
                  </div>
                  <div className="py-1" />
                  <div className="text-[#8FA19A]/40">// Embed Live React Component</div>
                  <div>
                    <span className="text-[#10B981]">&lt;</span>
                    <span className="text-[#2DD4BF]">TelemetryBadge</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#F2F5F4]">latency</span>=
                    <span className="text-[#10B981]">&quot;18ms&quot;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#F2F5F4]">uptime</span>=
                    <span className="text-[#10B981]">&quot;99.99%&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#10B981]">/&gt;</span>
                  </div>
                  <div className="py-1" />
                  <div className="text-[#8FA19A]/40">// Interactive Callout block</div>
                  <div>
                    <span className="text-[#10B981]">&gt;</span> [!NOTE] All clusters synced via CRDT.
                  </div>
                  <div className="py-1" />
                  <div>- [x] Automated failover tested</div>
                  <div>- [x] Zero hydration discrepancy verified</div>
                </div>
              </div>

              {/* RIGHT: Live Rendered Output */}
              <div className="p-4 sm:p-6 lg:p-8 bg-[#141B18] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 text-[11px] font-mono text-[#8FA19A]">
                    <span className="text-[#2DD4BF] uppercase tracking-wider font-semibold">
                      [LIVE RENDERED PREVIEW]
                    </span>
                    <Badge variant="emeraldGlow" className="text-[10px] py-0">
                      Hydrated
                    </Badge>
                  </div>

                  {/* Rendered Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2F5F4] tracking-tight">
                    Real-Time Infrastructure Status
                  </h3>
                  <p className="mt-1 text-sm text-[#8FA19A] leading-relaxed">
                    Everything is functioning smoothly across all edge nodes:
                  </p>

                  {/* Rendered Component 1: TelemetryBadge */}
                  <div className="my-5 p-4 rounded-xl border border-[#10B981]/40 bg-[#0A0F0D] shadow-lg shadow-[#10B981]/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
                        <span className="font-semibold text-sm text-[#F2F5F4]">
                          Global Gateway Cluster
                        </span>
                      </div>
                      <Badge variant="default" className="text-[10px]">
                        Operational
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5 text-xs font-mono">
                      <div>
                        <span className="text-[#8FA19A]">P99 Latency: </span>
                        <span className="text-[#10B981] font-bold">18ms</span>
                      </div>
                      <div>
                        <span className="text-[#8FA19A]">Uptime: </span>
                        <span className="text-[#2DD4BF] font-bold">99.99%</span>
                      </div>
                    </div>
                  </div>

                  {/* Rendered Callout */}
                  {!alertDismissed ? (
                    <div className="p-3.5 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 text-xs text-[#F2F5F4] flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-2.5">
                        <Sparkles className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#10B981]">Note:</strong> All clusters synced via CRDT. No data loss even on total network partition.
                        </div>
                      </div>
                      <button
                        onClick={() => setAlertDismissed(true)}
                        className="text-[#8FA19A] hover:text-[#F2F5F4] text-xs font-mono cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setAlertDismissed(false)}
                      className="text-xs text-[#10B981] hover:underline mb-4 font-mono"
                    >
                      + Show dismissed note callout
                    </button>
                  )}

                  {/* Checklist */}
                  <div className="space-y-1.5 text-xs text-[#F2F5F4]">
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

                {/* Interactive Like/Heart Widget to prove real React reactivity! */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#8FA19A]">
                    Test embedded React component state:
                  </span>
                  <button
                    onClick={handleToggleLike}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      hasLiked
                        ? "bg-[#10B981] text-[#0A0F0D] border-[#10B981]"
                        : "border-white/10 bg-white/5 text-[#F2F5F4] hover:border-[#10B981]/40"
                    }`}
                  >
                    <span>▲ Upvote spec</span>
                    <span className="font-mono">{userLikes}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mdx" && (
            <div className="p-6 bg-[#0A0F0D] font-mono text-xs sm:text-sm text-[#8FA19A] leading-relaxed overflow-x-auto min-h-[460px]">
              <pre className="text-[#8FA19A]">
                <span className="text-[#10B981]">---</span>{"\n"}
                <span className="text-[#2DD4BF]">title</span>: &quot;Cloud Service Health&quot;{"\n"}
                <span className="text-[#2DD4BF]">status</span>: &quot;operational&quot;{"\n"}
                <span className="text-[#2DD4BF]">tags</span>: [&quot;infra&quot;, &quot;telemetry&quot;, &quot;edge&quot;]{"\n"}
                <span className="text-[#10B981]">---</span>{"\n\n"}
                <span className="text-[#10B981]"># Real-Time Infrastructure Status</span>{"\n\n"}
                Everything is functioning smoothly across all edge nodes:{"\n\n"}
                <span className="text-[#10B981]">&lt;</span>
                <span className="text-[#2DD4BF]">TelemetryBadge</span>{" "}
                <span className="text-[#F2F5F4]">latency</span>=
                <span className="text-[#10B981]">&quot;18ms&quot;</span>{" "}
                <span className="text-[#F2F5F4]">uptime</span>=
                <span className="text-[#10B981]">&quot;99.99%&quot;</span>{" "}
                <span className="text-[#10B981]">/&gt;</span>{"\n\n"}
                <span className="text-[#10B981]">&gt;</span> [!NOTE] All clusters synced via CRDT.{"\n\n"}
                - [x] Automated failover tested{"\n"}
                - [x] Zero hydration discrepancy verified
              </pre>
            </div>
          )}

          {activeTab === "ast" && (
            <div className="p-6 bg-[#0A0F0D] font-mono text-xs text-[#8FA19A] leading-relaxed overflow-x-auto min-h-[460px]">
              <pre className="text-[#8FA19A]">
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
      </div>
    </section>
  );
}
