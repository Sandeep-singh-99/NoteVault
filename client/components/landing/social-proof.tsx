"use client";

import React from "react";
import { Users, FileText, Activity, Star } from "lucide-react";

export function SocialProof() {
  const logos = [
    { name: "Vercel", label: "VERCEL", highlight: "Next.js Engine" },
    { name: "Linear", label: "LINEAR", highlight: "Issue Sync" },
    { name: "Supabase", label: "SUPABASE", highlight: "Postgres Realtime" },
    { name: "Raycast", label: "RAYCAST", highlight: "Quick Extensions" },
    { name: "Resend", label: "RESEND", highlight: "Email Notifications" },
    { name: "Prisma", label: "PRISMA", highlight: "Type-Safe DB" },
    { name: "Loom", label: "LOOM", highlight: "Video Blocks" },
    { name: "GitHub", label: "GITHUB", highlight: "Git Sync" },
  ];

  const stats = [
    {
      value: "120,000+",
      label: "Notes & blocks authored",
      icon: FileText,
    },
    {
      value: "99.99%",
      label: "Sync uptime & availability",
      icon: Activity,
    },
    {
      value: "4.9 / 5",
      label: "Developer satisfaction rating",
      icon: Star,
    },
    {
      value: "35,000+",
      label: "Active knowledge workers",
      icon: Users,
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-y border-white/5 bg-[#0A0A0A]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
          POWERING HIGH-VELOCITY ENGINEERING TEAMS WORLDWIDE
        </p>

        {/* Aceternity Moving Logo Cards with soft fade edges */}
        <div className="mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 py-3">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/10 bg-[#0A0A0A]/90 text-xs font-mono text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#10B981]/40 transition-all shrink-0 select-none cursor-pointer"
              >
                <div className="h-2 w-2 rounded-full bg-[#10B981] group-hover:scale-125 transition-transform" />
                <span className="font-bold text-[#FAFAFA] tracking-wider">
                  {logo.label}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[11px] text-[#2DD4BF] opacity-80">
                  {logo.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 flex flex-col justify-between hover:border-[#10B981]/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between text-[#A1A1AA] mb-2">
                  <span className="text-xs uppercase tracking-wider font-mono">
                    Stat 0{idx + 1}
                  </span>
                  <Icon className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FAFAFA] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
