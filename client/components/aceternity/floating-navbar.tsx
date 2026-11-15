"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, ArrowRight, Menu, X } from "lucide-react";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
  onSearchClick,
  onSignInClick,
  onGetStartedClick,
}: {
  navItems: NavItem[];
  className?: string;
  onSearchClick: () => void;
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;

      if (current < 0.05) {
        setVisible((v) => (v ? v : true));
      } else if (direction < -0.005) {
        setVisible((v) => (v ? v : true));
      } else if (direction > 0.005) {
        setVisible((v) => (!v ? v : false));
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-50 max-w-5xl w-[94%] sm:w-auto",
          className
        )}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6 rounded-full border border-white/[0.08] bg-[#0A0A0A]/90 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#2DD4BF] text-[#000000] font-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-transform duration-200 group-hover:scale-105">
              N
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-black flex items-center justify-center">
                <div className="h-1 w-1 rounded-full bg-[#10B981] animate-pulse" />
              </div>
            </div>
            <span className="text-sm font-bold tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
              NoteVault
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5 rounded-lg transition-colors"
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick ⌘K Trigger */}
            <button
              onClick={onSearchClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/[0.08] bg-white/5 text-[11px] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#10B981]/40 transition-all cursor-pointer"
              title="Search documentation (⌘K)"
            >
              <Search className="h-3 w-3 text-[#10B981]" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="font-mono text-[9px] bg-white/10 px-1 py-0.2 rounded text-[#A1A1AA]">
                ⌘K
              </kbd>
            </button>

            {/* Sign in ghost button */}
            <button
              onClick={onSignInClick}
              className="hidden sm:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] px-2 py-1 transition-colors cursor-pointer"
            >
              Sign in
            </button>

            {/* Emerald Primary Button */}
            <button
              onClick={onGetStartedClick}
              className="relative inline-flex items-center gap-1 rounded-full bg-[#10B981] px-4 py-1.5 text-xs font-bold text-[#000000] shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all hover:bg-[#059669] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get started</span>
              <ArrowRight className="h-3 w-3" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[#A1A1AA] hover:text-[#FAFAFA] rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/98 p-4 backdrop-blur-xl shadow-2xl space-y-2"
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] rounded-lg hover:bg-white/5"
              >
                {navItem.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onSignInClick();
                }}
                className="text-xs text-[#A1A1AA] hover:text-[#FAFAFA]"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onGetStartedClick();
                }}
                className="text-xs font-bold text-[#10B981]"
              >
                Get started free →
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
