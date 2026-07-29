import SiteHeader from "@/components/site/SiteHeader";
import {
  HeroSection,
  FeaturesSection,
  AboutSection,
  ContactSection,
  SiteFooter,
} from "@/components/site/sections";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <Pricing />
        <AboutSection />
        <FAQ />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
