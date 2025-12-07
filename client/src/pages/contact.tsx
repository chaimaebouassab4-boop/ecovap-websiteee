import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Contactez-nous"
          description="Nous sommes à votre écoute. Demandez un devis gratuit ou posez-nous vos questions."
        />
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
