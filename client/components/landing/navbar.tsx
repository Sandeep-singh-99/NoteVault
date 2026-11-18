"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { CommandMenu } from "@/components/ui/command-menu";
import { AuthModal } from "@/components/landing/auth-modal";

export function Navbar() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed inset-x-2 top-3 z-[5000] mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-2 rounded-2xl border border-white/10 bg-neutral-950/95 px-2 py-1.5 text-white shadow-lg shadow-black/25 backdrop-blur-md sm:inset-x-6 sm:top-5 sm:px-3"
      >
        <Link href="/" className="inline-flex min-h-11 items-center gap-1.5 rounded-lg text-sm font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:gap-2 sm:text-base">
          <span aria-hidden="true" className="grid size-6 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-300 text-xs font-black text-neutral-950 sm:size-8 sm:text-sm">N</span>
          NoteVault
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search documentation"
            onClick={() => setCommandOpen(true)}
            className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:px-3"
          >
            <Search aria-hidden="true" size={17} />
            <span className="hidden sm:inline">Search</span>
          </button>
          <Link href="/login" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-lg px-1.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:px-3">
            Sign in
          </Link>
          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-emerald-400 px-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:px-4"
          >
            Get started
            <ArrowRight aria-hidden="true" size={16} className="hidden sm:block" />
          </button>
        </div>
      </nav>

      {/* Global Modals */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
