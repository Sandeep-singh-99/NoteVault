"use client";

import { AuthForm } from "@/components/auth-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function AuthModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-md overflow-y-auto sm:p-8">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-2xl">Create your account</DialogTitle>
          <DialogDescription>A home for your notes, projects, and ideas.</DialogDescription>
        </DialogHeader>
        <AuthForm mode="signup" />
      </DialogContent>
    </Dialog>
  );
}
