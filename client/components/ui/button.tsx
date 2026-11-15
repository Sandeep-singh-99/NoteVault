import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#10B981] text-[#000000] font-semibold hover:bg-[#059669] shadow-lg shadow-[#10B981]/25 active:scale-[0.98]",
        secondary:
          "bg-[#0A0A0A] text-[#FAFAFA] border border-white/[0.08] hover:bg-[#141414] hover:border-[#10B981]/40 active:scale-[0.98]",
        outline:
          "border border-white/[0.08] bg-transparent text-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#10B981] hover:border-[#10B981]/50 active:scale-[0.98]",
        ghost:
          "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5 active:scale-[0.98]",
        link:
          "text-[#10B981] underline-offset-4 hover:underline p-0 h-auto",
        glow:
          "bg-gradient-to-r from-[#10B981] to-[#2DD4BF] text-[#000000] font-bold hover:opacity-95 shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
