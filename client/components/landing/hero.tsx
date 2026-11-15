"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Sparkles, CheckCircle2, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/aceternity/spotlight";
import { SparklesCore } from "@/components/aceternity/sparkles";
import { FlipWords } from "@/components/aceternity/flip-words";
import { HeroHighlight, Highlight } from "@/components/aceternity/hero-highlight";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { BackgroundCubesGrid } from "@/components/ui/background-cubes-grid";
import { AuthModal } from "@/components/landing/auth-modal";
import { DemoModal } from "@/components/landing/demo-modal";

export function Hero() {
  const [authOpen, setAuthOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const flipWordsList = [
    "blocks.",
    "MDX widgets.",
    "React components.",
    "knowledge trees.",
  ];

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-[#000000] pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Aceternity UI: Background Cubes Grid (Official 3D Perspective Grid with Emerald Wave Animation) */}
      <BackgroundCubesGrid
        variant="perspective"
        backgroundColor="#000000"
        baseColor="#0f1914"
        waveColor="#10B981"
        gridSize={48}
        gap={0.06}
        glow={1.2}
        amplitude={0.65}
        tilt={0.74}
        idleRipples={true}
        className="opacity-75 z-0"
      />

      {/* Background Spotlight & Ambient Sparkles */}
      <Spotlight className="-top-40 left-0 md:left-48 md:-top-20 z-[2]" fill="#10B981" />
      <SparklesCore
        particleColor="#10B981"
        particleDensity={20}
        minSize={0.6}
        maxSize={1.8}
        className="opacity-40 z-[2]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-xs text-[#10B981] font-medium mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-[#10B981]/60 transition-all cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="font-semibold">NoteVault 2.0 with MDX block engine is live</span>
              <span className="text-[#A1A1AA]">•</span>
              <span className="text-[#2DD4BF] flex items-center gap-1 font-mono">
                Read release <ArrowRight className="h-3 w-3" />
              </span>
            </div>

            {/* Headline with Flip Words and Hero Highlight */}
            <div className="my-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FAFAFA] leading-[1.18] sm:leading-[1.14] text-balance">
                <span>Where thoughts become</span>{" "}
                <FlipWords
                  words={flipWordsList}
                  className="text-[#10B981] font-black"
                />
                <br />
                <HeroHighlight containerClassName="inline-block my-1">
                  <Highlight className="text-[#000000] bg-gradient-to-r from-[#10B981] to-[#2DD4BF]">
                    Powered by MDX.
                  </Highlight>
                </HeroHighlight>
              </h1>
            </div>

            {/* One-line subtext */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed">
              The Notion-style workspace that treats markdown like code and blocks like React components. Fast, flexible, and local-first.
            </p>

            {/* Two CTAs with Aceternity Moving Border on Primary */}
            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <MovingBorderButton
                duration={3200}
                borderRadius="1rem"
                onClick={() => setAuthOpen(true)}
                containerClassName="h-13 w-full sm:w-auto"
                className="bg-[#10B981] text-[#000000] font-bold text-base px-8 h-full hover:bg-[#059669] shadow-[0_0_25px_rgba(16,185,129,0.35)]"
              >
                <span>Start writing free</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </MovingBorderButton>

              <button
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto h-13 px-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/90 text-[#FAFAFA] hover:text-[#10B981] hover:border-[#10B981]/40 font-semibold text-base flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              >
                <Play className="h-4 w-4 mr-2 fill-[#10B981] text-[#10B981]" />
                <span>See interactive demo</span>
              </button>
            </div>

            {/* Reassurance Metrics */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A1A1AA]">
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
        </div>

      {/* Modals */}
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
