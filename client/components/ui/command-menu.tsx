"use client";

import * as React from "react";
import {
  Search,
  FileText,
  Code2,
  Sparkles,
  Blocks,
  ArrowRight,
  BookOpen,
  Keyboard,
  Settings,
  Layers,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [query, setQuery] = React.useState("");

  const items = [
    {
      category: "Quick Actions",
      icon: FileText,
      title: "New Note with MDX Canvas",
      shortcut: "⌘ N",
      action: "Create fresh note",
    },
    {
      category: "Quick Actions",
      icon: Sparkles,
      title: "Open Slash Command Palette",
      shortcut: "/",
      action: "Insert block",
    },
    {
      category: "Slash Blocks",
      icon: Code2,
      title: "React Component Block",
      shortcut: "< />",
      action: "Embed JSX / MDX",
    },
    {
      category: "Slash Blocks",
      icon: Blocks,
      title: "Interactive Checklist Block",
      shortcut: "[]",
      action: "Task tracker",
    },
    {
      category: "Documentation",
      icon: BookOpen,
      title: "Tiptap Block Extensions API",
      shortcut: "Docs",
      action: "Read architecture guide",
    },
    {
      category: "Navigation",
      icon: Layers,
      title: "Jump to Architecture Specs",
      shortcut: "G S",
      action: "Open workspace folder",
    },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className="max-w-xl p-0 overflow-hidden bg-[#0A0A0A] border border-white/[0.08] shadow-2xl"
      >
        <DialogTitle className="sr-only">Command Menu</DialogTitle>
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3 bg-black/80">
          <Search className="h-4 w-4 text-[#10B981] shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                onOpenChange(false);
              }
            }}
            placeholder="Search commands, blocks, notes, and components..."
            className="w-full bg-transparent text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA] outline-none"
            autoFocus
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-[11px] font-mono text-[#A1A1AA] border border-white/[0.08] hover:bg-[#10B981]/15 hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors cursor-pointer shrink-0"
            title="Close dialog (Esc)"
          >
            <span>ESC</span>
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#A1A1AA]">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onOpenChange(false)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#141414] group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/[0.08] text-[#10B981] group-hover:border-[#10B981]/40">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#FAFAFA] group-hover:text-[#10B981] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#A1A1AA]">{item.action}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#A1A1AA] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {item.shortcut}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] bg-black/50 px-4 py-2.5 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <Keyboard className="h-3.5 w-3.5 text-[#10B981]" />
            <span>Navigation: ↑ ↓ to select</span>
          </div>
          <span>Enter to execute</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
