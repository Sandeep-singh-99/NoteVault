"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#10B981]/40 bg-gradient-to-br from-[#10B981] via-[#059669] to-[#2DD4BF] p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(16,185,129,0.3)]">
          {/* Subtle geometric background pattern overlay */}
          <div className="absolute inset-0 bg-[#0A0F0D]/60 backdrop-blur-2xl" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2DD4BF]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#10B981]/30 blur-[100px] rounded-full pointer-events-none" />

          {/* Inner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-xs font-mono text-[#10B981] font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Free 14-Day Pro Trial Included</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2F5F4] tracking-tight">
              Ready to elevate your notes into living documents?
            </h2>

            <p className="text-base sm:text-lg text-[#8FA19A] max-w-xl mx-auto leading-relaxed">
              Join over 35,000 developers, writers, and product architects organizing knowledge with Tiptap blocks and MDX components.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-[#141B18]/90 border border-[#10B981] max-w-md mx-auto text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-[#10B981] font-bold">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Welcome aboard!</span>
                </div>
                <p className="text-xs text-[#8FA19A]">
                  We sent your workspace setup link to <span className="text-[#F2F5F4] font-mono">{email}</span>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-[#0A0F0D]/80 border-white/20 text-[#F2F5F4] placeholder:text-[#8FA19A] focus-visible:ring-[#10B981] text-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-6 bg-[#10B981] hover:bg-[#059669] text-[#0A0F0D] font-bold text-sm shrink-0 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </form>
            )}

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8FA19A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                100% data export guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
