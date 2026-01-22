import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SupportChannels from "@/components/support/SupportChannels";
import SupportForm from "@/components/support/SupportForm";
import SupportHero from "@/components/support/SupportHero";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SupportHero />
      <SupportChannels />
      <SupportForm />
      <Footer />
    </main>
  );
}
