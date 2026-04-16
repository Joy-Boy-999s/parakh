import { ParakhInteractions } from "@/components/landing/ParakhInteractions";
import { Footer } from "@/components/layout/footer";
import { GovStrip } from "@/components/layout/gov-strip";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact";
import { FeaturesSection } from "@/components/sections/features";
import { FrameworkSection } from "@/components/sections/framework";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { TrustBar } from "@/components/sections/trust";

export default function Home() {
  return (
    <>
      <GovStrip />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <FrameworkSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
      <ParakhInteractions />
    </>
  );
}
