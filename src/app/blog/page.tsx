import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="bg-white-blue min-h-screen">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  );
}
