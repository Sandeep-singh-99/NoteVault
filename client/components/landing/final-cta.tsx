"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";

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
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LampContainer className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-[#06281f] px-3 py-2 text-xs font-semibold leading-5 text-emerald-200 sm:rounded-full sm:px-4 sm:text-sm">
              <Sparkles aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span>Free 14-Day Pro Trial Included</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#FAFAFA] leading-tight">
              Ready to elevate your notes into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#2DD4BF] to-[#10B981]">
                living documents?
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
              Join over 35,000 developers, writers, and product architects organizing knowledge with Tiptap blocks and MDX components.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-[#0A0A0A]/90 border border-[#10B981] max-w-md mx-auto text-center space-y-2 shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-[#10B981] font-bold">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Welcome aboard!</span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  We sent your workspace setup link to{" "}
                  <span className="text-[#FAFAFA] font-mono">{email}</span>.
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
                  className="h-12 bg-[#000000]/90 border-white/20 text-[#FAFAFA] placeholder:text-[#A1A1AA] focus-visible:ring-[#10B981] text-sm rounded-xl"
                />
                <MovingBorderButton
                  duration={3000}
                  borderRadius="0.75rem"
                  as="button"
                  containerClassName="h-12 w-full shrink-0 sm:w-auto"
                  className="bg-[#10B981] text-[#000000] font-bold text-xs sm:text-sm px-6 hover:bg-[#059669] shrink-0"
                >
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    Get started
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </span>
                </MovingBorderButton>
              </form>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A1A1AA]">
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
          </motion.div>
        </LampContainer>
      </div>
    </section>
  );
}
