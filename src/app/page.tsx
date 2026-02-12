import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import DashboardPreview from "../components/DashboardPreview";
import ModulesSection from "../components/ModulesSection";
import JourneySection from "../components/JourneySection";
import PartnersSection from "../components/PartnersSection";
import TrustedBySection from "../components/TrustedBySection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-light-gray min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <DashboardPreview />
      <ModulesSection />
      <JourneySection />
      <PartnersSection />
      <TrustedBySection />
      <CTASection />
      <Footer />
    </main>
  );
}
