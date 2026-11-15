"use client";

import React from "react";
import { ContainerScroll } from "@/components/aceternity/container-scroll-animation";
import { EditorMockup } from "@/components/landing/editor-mockup";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function ProductPreview() {
  return (
    <section id="product-preview" className="relative -mt-10 sm:-mt-16 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center space-y-3">
            <Badge variant="emeraldGlow" className="text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Interactive Editor Canvas
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F2F5F4] tracking-tight">
              A block editor that doesn’t treat code like plain text
            </h2>
            <p className="text-sm sm:text-base text-[#8FA19A] max-w-xl mx-auto">
              Scroll down to watch the live workspace tilt into focus. Every node is reactive, draggable, and exportable.
            </p>
          </div>
        }
      >
        <EditorMockup />
      </ContainerScroll>
    </section>
  );
}
