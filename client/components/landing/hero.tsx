"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Sparkles, CheckCircle2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spotlight, AuroraBackground } from "@/components/aceternity/spotlight";
import { TypewriterEffectSmooth } from "@/components/aceternity/typewriter-effect";
import { EditorMockup } from "@/components/landing/editor-mockup";
import { AuthModal } from "@/components/landing/auth-modal";
import { DemoModal } from "@/components/landing/demo-modal";

export function Hero() {
  const [authOpen, setAuthOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const headlineWords = [
    { text: "Where" },
    { text: "thoughts" },
    { text: "become" },
    { text: "blocks.", breakAfter: true },
    { text: "Powered", className: "text-[#10B981]" },
    { text: "by", className: "text-[#10B981]" },
    { text: "MDX.", className: "text-[#2DD4BF]" },
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Spotlight & Aurora Glow */}
      <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#10B981" />
      <AuroraBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-xs text-[#10B981] font-medium mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-[#10B981]/60 transition-all cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="font-semibold">NoteVault 2.0 with MDX block engine is live</span>
              <span className="text-[#8FA19A]">•</span>
              <span className="text-[#2DD4BF] flex items-center gap-1 font-mono">
                Read release <ArrowRight className="h-3 w-3" />
              </span>
            </div>

            {/* Headline with Typewriter/Smooth reveal */}
            <TypewriterEffectSmooth words={headlineWords} />

            {/* One-line subtext */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#8FA19A] max-w-2xl leading-relaxed">
              The Notion-style workspace that treats markdown like code and blocks like React components. Fast, flexible, and local-first.
            </p>

            {/* Two CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => setAuthOpen(true)}
                className="w-full sm:w-auto bg-[#10B981] text-[#0A0F0D] hover:bg-[#059669] font-bold text-base px-8 h-13 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02] cursor-pointer"
              >
                Start writing free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto border-white/10 hover:border-[#10B981]/40 text-[#F2F5F4] hover:text-[#10B981] font-semibold text-base px-6 h-13 bg-[#141B18]/90 backdrop-blur-md cursor-pointer"
              >
                <Play className="h-4 w-4 mr-2 fill-[#10B981] text-[#10B981]" />
                See interactive demo
              </Button>
            </div>

            {/* Reassurance Metrics */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8FA19A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#10B981]" />
                <span>100% open MDX specs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#10B981]" />
                <span>Sub-millisecond Tiptap sync</span>
              </div>
            </div>
          </div>

          {/* Large 3D Editor Mockup */}
          <div className="mt-14 sm:mt-18">
            <EditorMockup />
          </div>
        </div>
      </AuroraBackground>

      {/* Modals */}
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
