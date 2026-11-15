import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProductPreview } from "@/components/landing/product-preview";
import { SocialProof } from "@/components/landing/social-proof";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { EditorShowcase } from "@/components/landing/editor-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#A1A1AA] flex flex-col selection:bg-[#10B981] selection:text-[#000000]">
      {/* 1. Aceternity Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (Spotlight + Sparkles + Flip Words + Hero Highlight + Moving Border CTA) */}
        <Hero />

        {/* 3. Product Preview (Aceternity Container Scroll Animation with 3D Tilt) */}
        <ProductPreview />

        <SectionDivider />

        {/* 4. Social Proof (Aceternity Infinite Moving Cards with Gradient Fade Edges) */}
        <SocialProof />

        <SectionDivider />

        {/* 5. Features Grid (Aceternity Bento Grid + Cursor Glowing Effect + Placeholders & Vanish Input) */}
        <FeaturesGrid />

        <SectionDivider />

        {/* 6. Editor Showcase (Aceternity Compare Slider) */}
        <EditorShowcase />

        <SectionDivider />

        {/* 7. How It Works (Aceternity Sticky Scroll Reveal) */}
        <HowItWorks />

        <SectionDivider />

        {/* 8. Pricing Section (Aceternity Background Gradient Glow on Pro Tier) */}
        <Pricing />

        <SectionDivider />

        {/* 9. Testimonials (Aceternity Testimonials Marquee Grid Boxed) */}
        <Testimonials />

        <SectionDivider />

        {/* 10. Final CTA (Aceternity Lamp Container + Moving Border CTA) */}
        <FinalCTA />
      </main>

      {/* 11. Footer (Aceternity Text Hover Effect + Dotted Grid Background) */}
      <Footer />
    </div>
  );
}
