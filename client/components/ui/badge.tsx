import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] shadow-sm",
        teal:
          "border-[#2DD4BF]/30 bg-[#2DD4BF]/10 text-[#2DD4BF] shadow-sm",
        secondary:
          "border-white/10 bg-[#141B18] text-[#8FA19A]",
        outline:
          "border-white/15 text-[#F2F5F4]",
        emeraldGlow:
          "border-[#10B981]/40 bg-[#10B981]/15 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.25)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
