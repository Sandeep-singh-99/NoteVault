"use client";

import React, { useState } from "react";
import { FloatingNav, NavItem } from "@/components/aceternity/floating-navbar";
import { CommandMenu } from "@/components/ui/command-menu";
import { AuthModal } from "@/components/landing/auth-modal";

export function Navbar() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const navItems: NavItem[] = [
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
        onSearchClick={() => setCommandOpen(true)}
        onSignInClick={() => setAuthOpen(true)}
        onGetStartedClick={() => setAuthOpen(true)}
      />

      {/* Global Modals */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
