"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/ui/command-menu";
import { AuthModal } from "@/components/landing/auth-modal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-lg shadow-black/40"
            : "bg-[#0A0F0D]/70 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#2DD4BF] text-[#0A0F0D] font-black text-lg shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-transform duration-200 group-hover:scale-105">
              <span className="font-mono text-base font-extrabold tracking-tighter">N</span>
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#0A0F0D] flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#F2F5F4] group-hover:text-white transition-colors">
                NoteVault
              </span>
              <span className="text-[10px] font-mono text-[#8FA19A] tracking-wider uppercase -mt-0.5">
                Block & MDX
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="#features"
              className="px-3 py-1.5 text-sm text-[#8FA19A] hover:text-[#F2F5F4] transition-colors rounded-lg hover:bg-white/5"
            >
              Features
            </Link>
            <Link
              href="#editor-showcase"
              className="px-3 py-1.5 text-sm text-[#8FA19A] hover:text-[#F2F5F4] transition-colors rounded-lg hover:bg-white/5"
            >
              Editor
            </Link>
            <Link
              href="#how-it-works"
              className="px-3 py-1.5 text-sm text-[#8FA19A] hover:text-[#F2F5F4] transition-colors rounded-lg hover:bg-white/5"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="px-3 py-1.5 text-sm text-[#8FA19A] hover:text-[#F2F5F4] transition-colors rounded-lg hover:bg-white/5"
            >
              Pricing
            </Link>
            <a
              href="#docs"
              className="px-3 py-1.5 text-sm text-[#8FA19A] hover:text-[#F2F5F4] transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
            >
              Docs
              <span className="text-[10px] text-[#2DD4BF] bg-[#2DD4BF]/10 px-1.5 py-0.2 rounded border border-[#2DD4BF]/20 font-mono">
                v2.0
              </span>
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Command Trigger */}
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-[#141B18]/80 text-xs text-[#8FA19A] hover:text-[#F2F5F4] hover:border-[#10B981]/40 transition-all cursor-pointer"
              title="Search documentation and commands"
            >
              <Search className="h-3.5 w-3.5 text-[#10B981]" />
              <span>Search docs & blocks...</span>
              <kbd className="ml-1 rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-[#8FA19A] border border-white/5">
                ⌘K
              </kbd>
            </button>

            {/* Sign In Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAuthOpen(true)}
              className="text-[#8FA19A] hover:text-[#F2F5F4]"
            >
              Sign in
            </Button>

            {/* Get Started Emerald Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => setAuthOpen(true)}
              className="bg-[#10B981] hover:bg-[#059669] text-[#0A0F0D] font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setCommandOpen(true)}
              className="p-2 rounded-lg border border-white/10 text-[#8FA19A] hover:text-[#F2F5F4]"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-[#8FA19A] hover:text-[#F2F5F4] focus:outline-none focus:ring-1 focus:ring-[#10B981]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-white/10 bg-[#0A0F0D] px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#8FA19A] hover:text-[#F2F5F4] rounded-lg hover:bg-white/5"
              >
                Features
              </Link>
              <Link
                href="#editor-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#8FA19A] hover:text-[#F2F5F4] rounded-lg hover:bg-white/5"
              >
                Editor Showcase
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#8FA19A] hover:text-[#F2F5F4] rounded-lg hover:bg-white/5"
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#8FA19A] hover:text-[#F2F5F4] rounded-lg hover:bg-white/5"
              >
                Pricing
              </Link>
            </nav>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthOpen(true);
                }}
              >
                Sign in
              </Button>
              <Button
                variant="default"
                className="w-full text-xs bg-[#10B981] hover:bg-[#059669] text-[#0A0F0D]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthOpen(true);
                }}
              >
                Get started free
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
