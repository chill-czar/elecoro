import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutCoreCapabilities from "@/components/about/AboutCoreCapabilities";
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutStakeholders from "@/components/about/AboutStakeholders";
import AboutVisionMission from "@/components/about/AboutVisionMission";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutVisionMission />
      <AboutStakeholders />
      <AboutCoreCapabilities />
      <AboutCTA />
      <Footer />
    </main>
  );
}
