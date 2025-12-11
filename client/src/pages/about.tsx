import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="À Propos de EcoVap"
          description="Découvrez notre mission, notre technologie innovante et notre engagement pour un nettoyage écologique."
          backgroundImage="/testimonials/mmmmmmmmm.jpg"
        />
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AboutContent />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

