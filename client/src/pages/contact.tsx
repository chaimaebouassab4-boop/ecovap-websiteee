import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  const formRef = useRef(null);
  const socialRef = useRef(null);

  // Scroll vers la section appropriée selon le hash dans l'URL
  useEffect(() => {
    const hash = window.location.hash;
    
    // Petit délai pour s'assurer que le rendu est complet
    setTimeout(() => {
      if (hash === '#contact' && socialRef.current) {
        // Si hash #contact, scroll vers réseaux sociaux
        socialRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else if (formRef.current) {
        // Par défaut (avec ou sans #devis), scroll vers le formulaire
        formRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }, []);

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
        <div ref={socialRef} className="relative w-full overflow-hidden">
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
            

            {/* Right Section: Social Media Hub */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: '#2596be' }}
            >
              {/* Animated Background Circles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -right-20 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-white/5 rounded-full bottom-10 -left-10 animate-pulse delay-700"></div>
              </div>

              <div className="relative z-10 text-center p-8 w-full max-w-lg">
                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl lg:text-4xl font-bold text-white mb-3"
                >
                  Rejoignez Notre Communauté
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-white/90 mb-8 text-sm"
                >
                  Suivez-nous sur les réseaux sociaux pour découvrir nos transformations avant/après et les avis de nos clients ✨
                </motion.p>

                {/* Social Media Cards */}
                <div className="space-y-4">
                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/ecovap.tanger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</h3>
                      <p className="text-sm text-gray-600">@ecovap.tanger</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>

                  {/* YouTube */}
                  <motion.a
                    href="https://www.youtube.com/@EcoVapTanger/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">YouTube</h3>
                      <p className="text-sm text-gray-600">@EcoVapTanger</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://www.facebook.com/people/EcoVap-Tanger-Sarl/61564083751443/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Facebook</h3>
                      <p className="text-sm text-gray-600">EcoVap Tanger SARL</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>

                {/* Bottom Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-6 text-white/90 text-lg font-medium"
                >
                  Rejoignez des centaines de clients satisfaits ! 🌟
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Formulaire de Contact */}
        <motion.section
          ref={formRef}
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