"use client";

import React from "react";
import { Users, FileText, Activity, Star } from "lucide-react";

export function SocialProof() {
  const logos = [
    { name: "Vercel", label: "VERCEL" },
    { name: "Linear", label: "LINEAR" },
    { name: "Supabase", label: "SUPABASE" },
    { name: "Raycast", label: "RAYCAST" },
    { name: "Resend", label: "RESEND" },
    { name: "Prisma", label: "PRISMA" },
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
    <section className="py-14 border-y border-white/5 bg-[#0E1512]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[#8FA19A]">
          TRUSTED BY MODERN PRODUCT & ENGINEERING TEAMS WORLDWIDE
        </p>

        {/* Logos Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center gap-2 text-sm font-semibold tracking-wider font-mono text-[#8FA19A] hover:text-[#F2F5F4] transition-colors"
            >
              <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-[#10B981] transition-colors" />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-[#141B18]/60 p-4 sm:p-5 flex flex-col justify-between hover:border-[#10B981]/30 transition-all hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between text-[#8FA19A] mb-2">
                  <span className="text-xs uppercase tracking-wider font-mono">
                    Stat 0{idx + 1}
                  </span>
                  <Icon className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F2F5F4] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8FA19A] mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
