import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { EditorShowcase } from "@/components/landing/editor-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#8FA19A] flex flex-col selection:bg-[#10B981] selection:text-[#0A0F0D]">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (with Typewriter Headline, CTAs & 3D Editor Mockup) */}
        <Hero />

        {/* 3. Social Proof Section */}
        <SocialProof />

        {/* 4. Features Grid (6 Glowing Cards) */}
        <FeaturesGrid />

        {/* 5. Editor Showcase (Split MDX Source & Live Rendered View) */}
        <EditorShowcase />

        {/* 6. How It Works (3 Steps with Sticky Scroll Reveal) */}
        <HowItWorks />

        {/* 7. Pricing Section (3 Tiers with Pro Emerald Border Glow) */}
        <Pricing />

        {/* 8. Testimonials (Infinite Moving Cards) */}
        <Testimonials />

        {/* 9. Final CTA (Full-Width Emerald-to-Teal Gradient Banner) */}
        <FinalCTA />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
