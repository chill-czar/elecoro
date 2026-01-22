import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import StakeholderWorkflows from "@/components/solutions/StakeholderWorkflows";
import SystemCapabilities from "@/components/solutions/SystemCapabilities";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SolutionsHero />
      <StakeholderWorkflows />
      <SystemCapabilities />
      <SolutionsCTA />
      <Footer />
    </main>
  );
}
