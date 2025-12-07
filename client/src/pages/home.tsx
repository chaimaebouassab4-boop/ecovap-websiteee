import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
