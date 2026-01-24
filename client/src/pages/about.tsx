import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  const backgroundImage = "/testimonials/vitre2.jpg";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        className="flex-1"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <PageHeader
            title="À Propos de EcoVap"
            description="Découvrez notre mission, notre technologie innovante et notre engagement pour un nettoyage écologique."
            backgroundImage={backgroundImage}
          />
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="py-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AboutContent />
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <CTASection />
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
}