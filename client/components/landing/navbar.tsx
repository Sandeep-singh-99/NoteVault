"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CommandMenu } from "@/components/ui/command-menu";
import { AuthModal } from "@/components/landing/auth-modal";

export function Navbar() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Preview", link: "#product-preview" },
    { name: "Compare", link: "#editor-showcase" },
    { name: "Workflow", link: "#how-it-works" },
    { name: "Pricing", link: "#pricing" },
  ];

  return (
    <>
      <FloatingNav
        navItems={navItems}
        className="top-4 max-w-[96vw]"
      >
        <div className="flex shrink-0 items-center gap-2">
          <button aria-label="Search documentation" onClick={() => setCommandOpen(true)} className="rounded-full px-3 py-2 text-sm text-neutral-300 hover:text-white">Search</button>
          <button onClick={() => setAuthOpen(true)} className="whitespace-nowrap rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black">Get started</button>
          <Link href="/login" className="whitespace-nowrap rounded-full px-3 py-2 text-sm hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-500">Sign in</Link>
        </div>
      </FloatingNav>

      {/* Global Modals */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
