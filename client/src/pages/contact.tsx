import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Précharger les images avant d'afficher le contenu
  useEffect(() => {
    const imagesToLoad = [
      "/testimonials/devis.png",
      "/attached_assets/EcoVapLoGo.png"
    ];

    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setImagesLoaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Chargement...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        {/* Section Hero avec Image et Vidéo */}
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Section: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/testimonials/devis.png')`,
                }}
              >
                {/* Overlay gradient pour améliorer la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
              
              {/* Contenu superposé sur l'image */}
             
            </motion.div>
            

            {/* Right Section: Vidéo YouTube intégrée */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-black"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JYS1UGeg0tw?autoplay=1&mute=1&loop=1&playlist=JYS1UGeg0tw&controls=1"
                title="EcoVap Vidéo de présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Section Formulaire de Contact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            

            <ContactForm />
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}