"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AuthModal } from "@/components/landing/auth-modal";

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);

  const tiers = [
    {
      name: "Free",
      id: "tier-free",
      badge: "Individual",
      priceMonthly: 0,
      priceAnnual: 0,
      description:
        "Everything you need to write and organize personal block notes locally.",
      highlight: false,
      features: [
        "Unlimited personal notes & blocks",
        "Up to 25 custom MDX components",
        "Local-first SQLite storage",
        "CommonMark and PDF export",
        "Instant ⌘K fuzzy search",
        "Standard community support",
      ],
      ctaText: "Start writing free",
      ctaVariant: "outline" as const,
    },
    {
      name: "Pro",
      id: "tier-pro",
      badge: "Most Popular",
      priceMonthly: 12,
      priceAnnual: 10,
      description:
        "For power authors, developers, and makers building living documentation.",
      highlight: true,
      features: [
        "Everything in Free, plus:",
        "Unlimited embedded React / MDX components",
        "50GB cloud sync with CRDT conflict resolution",
        "Version history & point-in-time restore (30 days)",
        "One-click publish to custom domain",
        "Bi-directional sync to private GitHub repos",
        "Priority 24/7 developer email support",
      ],
      ctaText: "Upgrade to Pro",
      ctaVariant: "default" as const,
    },
    {
      name: "Team",
      id: "tier-team",
      badge: "Workspaces",
      priceMonthly: 28,
      priceAnnual: 24,
      description:
        "For engineering teams, agencies, and companies standardizing on MDX.",
      highlight: false,
      features: [
        "Everything in Pro, plus:",
        "Unlimited team workspaces & members",
        "Real-time multiplayer block collaboration",
        "SAML SSO & Google Workspace provisioning",
        "Granular RBAC role-based permissions",
        "Audit logs & compliance exports (SOC2)",
        "Dedicated engineer & SLA guarantee",
      ],
      ctaText: "Contact for Team",
      ctaVariant: "secondary" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#0A0A0A]/40 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal" className="mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA] tracking-tight">
            Invest in your technical clarity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Start completely free. Upgrade when your team needs real-time collaboration and automated GitHub synchronization.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-[#0A0A0A] border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                !annual
                  ? "bg-[#000000] text-[#FAFAFA] shadow-sm"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                annual
                  ? "bg-[#10B981] text-[#000000] font-bold shadow-md shadow-[#10B981]/20"
                  : "text-[#A1A1AA] hover:text-[#FAFAFA]"
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                annual ? "bg-[#000000]/20 text-[#000000]" : "bg-[#10B981]/20 text-[#10B981]"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards: Pro with Aceternity BackgroundGradient */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const cardContent = (
              <div
                className={`relative rounded-3xl flex flex-col justify-between p-6 sm:p-8 h-full transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[#0A0A0A] text-[#FAFAFA]"
                    : "bg-[#0A0A0A]/90 border border-white/10 hover:border-white/20 hover:-translate-y-1 shadow-xl"
                }`}
              >
                {/* Highlight Badge */}
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#10B981] to-[#2DD4BF] text-[#000000] text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1 z-20">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#FAFAFA]">
                      {tier.name}
                    </h3>
                    <Badge variant={tier.highlight ? "emeraldGlow" : "secondary"}>
                      {tier.badge}
                    </Badge>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#FAFAFA] font-mono tracking-tight">
                      ${annual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    <span className="text-xs text-[#A1A1AA] font-mono">
                      {tier.priceMonthly === 0
                        ? "forever"
                        : annual
                        ? "/mo (billed annually)"
                        : "/mo"}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                    <p className="text-[11px] uppercase tracking-wider font-mono text-[#A1A1AA]">
                      Included Capabilities
                    </p>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#FAFAFA]">
                        <div className="h-4 w-4 rounded-full bg-[#10B981]/15 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6">
                  <Button
                    variant={tier.ctaVariant}
                    onClick={() => setAuthOpen(true)}
                    className={`w-full h-11 text-sm font-semibold transition-all ${
                      tier.highlight
                        ? "bg-[#10B981] text-[#000000] hover:bg-[#059669] shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                        : ""
                    }`}
                  >
                    {tier.ctaText}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            );

            return tier.highlight ? (
              <BackgroundGradient
                key={tier.id}
                className="rounded-3xl h-full"
                containerClassName="h-full lg:-translate-y-3"
              >
                {cardContent}
              </BackgroundGradient>
            ) : (
              <div key={tier.id} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <div className="mt-12 text-center text-xs text-[#A1A1AA]">
          Need self-hosted on-premise deployments or custom HIPAA / SOC2 contracts?{" "}
          <a href="#" className="text-[#10B981] underline underline-offset-4 hover:text-[#059669]">
            Talk to our engineering founders
          </a>
        </div>
      </div>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </section>
  );
}
