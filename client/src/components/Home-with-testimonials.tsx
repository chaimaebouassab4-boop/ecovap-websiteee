// Home.tsx - Exemple d'intégration de la section témoignages dans la page d'accueil
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials"; // Import du nouveau composant
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Testimonials /> {/* Ajout de la section témoignages */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

// Alternative : Si vous voulez ajouter la section témoignages uniquement sur une page spécifique
// ou dans un ordre différent, vous pouvez simplement importer et utiliser le composant où vous voulez