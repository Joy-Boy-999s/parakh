import {
  ContactSection,
  FeaturesSection,
  Footer,
  FrameworkSection,
  GovStrip,
  HeroSection,
  Navbar,
  ParakhInteractions,
  ProblemSection,
  TrustBar,
} from "@/components";

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
