import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const backgroundImage = "/testimonials/vitre2.jpg";

  useEffect(() => {
    // Pré-charger l'image avant l'animation
    const img = new Image();
    img.src = backgroundImage;
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      // Même en cas d'erreur, on affiche la page pour éviter un blocage
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      
      {/* Affiche la page seulement quand l'image est chargée */}
      {imageLoaded ? (
        <motion.main 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex-1"
        >
          <PageHeader
            title="À Propos de EcoVap"
            description="Découvrez notre mission, notre technologie innovante et notre engagement pour un nettoyage écologique."
            backgroundImage={backgroundImage}
          />
          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AboutContent />
            </div>
          </section>
          <CTASection />
        </motion.main>
      ) : (
        // Loading state optionnel - vous pouvez personnaliser ou retirer
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Chargement...</p>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}