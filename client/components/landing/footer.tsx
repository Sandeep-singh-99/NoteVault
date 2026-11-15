"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/icons";

export function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Block Editor", href: "#features" },
        { label: "MDX Engine", href: "#editor-showcase" },
        { label: "Slash Commands", href: "#features" },
        { label: "Local-First SQLite", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Tiptap Extension API", href: "#" },
        { label: "MDX Component Specs", href: "#" },
        { label: "GitHub Repository", href: "https://github.com", external: true },
        { label: "CLI & Sync Tool", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Engineering Blog", href: "#" },
        { label: "Community Discord", href: "#" },
        { label: "Markdown Guide", href: "#" },
        { label: "Migration from Notion", href: "#" },
        { label: "Template Library", href: "#" },
        { label: "Status Page", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About NoteVault", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security & SOC2", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0A0F0D] pt-16 pb-12 text-[#8FA19A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#2DD4BF] text-[#0A0F0D] font-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                N
              </div>
              <span className="text-base font-bold tracking-tight text-[#F2F5F4]">
                NoteVault
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#8FA19A] max-w-sm leading-relaxed">
              The Notion-style block editor built for modern technical thinkers. Rich blocks, full MDX support, and sub-millisecond local-first sync.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#141B18] text-[11px] font-mono">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#F2F5F4]">All systems operational</span>
              <span className="text-[#8FA19A]">•</span>
              <span className="text-[#10B981]">99.99%</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8FA19A] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8FA19A] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8FA19A] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8FA19A] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F2F5F4] font-mono">
                {col.title}
              </div>
              <ul className="space-y-2 text-xs">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="hover:text-[#10B981] transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div suppressHydrationWarning>
            &copy; 2026 NoteVault Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[#8FA19A]">
            <span>Crafted with precision for</span>
            <span className="text-[#10B981] font-semibold">Tiptap & MDX</span>
            <span>enthusiasts.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
