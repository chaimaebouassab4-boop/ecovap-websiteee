import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Nos Services"
          description="Solutions complètes de nettoyage et désinfection à la vapeur sèche pour particuliers et professionnels."
        />
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ServicesContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
