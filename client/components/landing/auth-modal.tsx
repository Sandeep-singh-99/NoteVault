"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#0A0A0A] border border-white/10 p-6 sm:p-8">
        <DialogHeader className="text-center sm:text-center items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] mb-3 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            <Sparkles className="h-6 w-6" />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#FAFAFA]">
            Welcome to NoteVault
          </DialogTitle>
          <DialogDescription className="text-sm text-[#A1A1AA]">
            Sign in to sync your blocks, MDX templates, and notes across all devices.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="text-lg font-semibold text-[#FAFAFA]">
              Magic link sent!
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Check your inbox at <span className="text-[#10B981] font-mono">{email}</span> to sign in.
            </p>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="secondary"
                type="button"
                className="w-full text-xs font-medium border border-white/10 hover:border-white/20 gap-2 h-11"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => {
                    setSubmitted(false);
                    onOpenChange(false);
                  }, 1200);
                }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-2.9c0-1.8 0-3.4 0-5.2z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.6L1.9 15.6C3.7 20.3 7.5 23 12 23z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="secondary"
                type="button"
                className="w-full text-xs font-medium border border-white/10 hover:border-white/20 gap-2 h-11"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => {
                    setSubmitted(false);
                    onOpenChange(false);
                  }, 1200);
                }}
              >
                <GithubIcon className="h-4 w-4 text-[#FAFAFA]" />
                GitHub
              </Button>
            </div>

            <div className="relative my-4 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative bg-[#0A0A0A] px-3 text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                or continue with email
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-[#000000] border-white/10 text-sm"
              />
              <Button
                type="submit"
                variant="default"
                className="w-full h-11 font-semibold text-[#000000] bg-[#10B981] hover:bg-[#059669] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Continue with Magic Link
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </form>

            <p className="text-center text-[11px] text-[#A1A1AA]/80 pt-2">
              By clicking continue, you agree to our{" "}
              <a href="#" className="text-[#10B981] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#10B981] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
