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
    // Méthode 1: Précharger avec <link rel="preload">
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = backgroundImage;
    document.head.appendChild(link);

    // Méthode 2: Pré-charger l'image en JavaScript
    const img = new Image();
    img.src = backgroundImage;
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      // Même en cas d'erreur, on affiche la page pour éviter un blocage
      setImageLoaded(true);
    };

    // Cleanup
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [backgroundImage]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      
      {/* Image invisible pour forcer le cache navigateur */}
      <div className="hidden" aria-hidden="true">
        <img src={backgroundImage} alt="" />
      </div>
      
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
        // Loading state - fond blanc pour éviter le flash noir
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            {/* Spinner animé */}
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-700 font-medium">Chargement...</p>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}