import Header from "@/components/Header";
import CreativePageHeader from "@/components/CreativePageHeader";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Grid, Sofa, Car, Bed, Square, Zap, CheckCircle } from "lucide-react";

// Import des images
import beforeImg from "./images/before.jpg";
import afterImg from "./images/afte.jpg";
import beforev from "./images/befvoi.png";
import afterv from "./images/afvoi.png";
import beff from "./images/beff.png";
import afff from "./images/afff.png";
import matkh from "./images/matkh.png";
import psss from "./images/pssss.png";
import tapkkk from "./images/tapkkk.jpg";
import tapmmm from "./images/tapmmm.jpg";
import mate from "./images/mate.jpg";
import matfff from "./images/matff.jpg";
import zark from "./images/zark.png";
import zarm from "./images/zarm.png";
import caca from "./images/caca.png";
import papa from "./images/papa.png";
import ts from "./images/ts.png";
import tsts from "./images/tsts.png";

const beforeAfterExamples = [
  {
    title: "Nettoyage de Canapé",
    before: beforeImg,
    after: afterImg,
    description: "Redonnez vie à vos canapés en tissu",
    category: "canape"
  },
  {
    title: "Nettoyage de Canapé",
    before: caca,
    after: papa,
    description: "Élimination des taches tenaces",
    category: "canape"
  },
  {
    title: "Intérieur Véhicules",
    before: beforev,
    after: afterv,
    description: "Nettoyage complet de l'habitacle",
    category: "vehicule"
  },
  {
    title: "Nettoyage de Matelas",
    before: mate,
    after: matfff,
    description: "Assainissement en profondeur",
    category: "matelas"
  },
  {
    title: "Intérieur Véhicules",
    before: beff,
    after: afff,
    description: "Restauration des surfaces",
    category: "vehicule"
  },
  {
    title: "Nettoyage de Matelas",
    before: matkh,
    after: psss,
    description: "Élimination des allergènes",
    category: "matelas"
  },
  {
    title: "Nettoyage de Tapis",
    before: tapkkk,
    after: tapmmm,
    description: "Ravivez vos tapis",
    category: "tapis"
  },
  {
    title: "Nettoyage de Tapis",
    before: zark,
    after: zarm,
    description: "Nettoyage en profondeur",
    category: "tapis"
  },
  {
    title: "Nettoyage de Canapé",
    before: ts,
    after: tsts,
    description: "Résultats professionnels",
    category: "canape"
  },
];

function BeforeAfter() {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>(
    beforeAfterExamples.reduce((acc, _, i) => ({ ...acc, [i]: 50 }), {})
  );
  const [isDragging, setIsDragging] = useState<Record<number, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleSliderChange = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging[index]) return;
    const div = e.currentTarget;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPositions((prev) => ({ ...prev, [index]: percentage }));
  };

  const handleTouchMove = (index: number, e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging[index]) return;
    const touch = e.touches[0];
    const div = e.currentTarget;
    const rect = div.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPositions((prev) => ({ ...prev, [index]: percentage }));
  };

  const startDragging = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: true }));
  };

  const stopDragging = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: false }));
  };

  const filteredExamples = activeFilter === "all"
    ? beforeAfterExamples
    : beforeAfterExamples.filter(example => example.category === activeFilter);

  const categories = [
    { value: "all", label: "Tous", icon: Grid },
    { value: "canape", label: "Canapés", icon: Sofa },
    { value: "vehicule", label: "Véhicules", icon: Car },
    { value: "matelas", label: "Matelas", icon: Bed },
    { value: "tapis", label: "Tapis", icon: Square },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#6497b1]/5 to-white relative overflow-hidden">
      {/* Décoration de fond animée */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-[#2596be]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#005b96]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          id="transformations"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-mt-32"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-[#2596be]/10 to-[#6497b1]/10 px-5 py-2.5 rounded-full border border-[#2596be]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-5 h-5 text-[#005b96]" />
            <span className="text-[#03396c] font-semibold">Résultats Garantis</span>
            <Zap className="w-4 h-4 text-[#2596be]" />
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#011f4b] via-[#005b96] to-[#2596be] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transformations Spectaculaires
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Découvrez la puissance de notre technologie de nettoyage à la vapeur sèche. 
            Des résultats visibles et durables, sans produits chimiques.
          </motion.p>
        </motion.div>

        {/* Filtres par catégorie avec animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  activeFilter === category.value
                    ? "bg-gradient-to-r from-[#005b96] to-[#2596be] text-white shadow-xl"
                    : "bg-white text-[#03396c] hover:bg-[#6497b1]/10 shadow-md hover:shadow-lg"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 ${
                    activeFilter === category.value ? "text-white" : "text-[#2596be]"
                  }`}
                  strokeWidth={2.5}
                />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grille avec AnimatePresence pour les transitions */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            style={{ userSelect: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredExamples.map((example, index) => {
              const position = sliderPositions[index] || 50;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-[#011f4b] via-[#005b96] to-[#2596be] p-5 relative overflow-hidden">
                    {/* Effet de brillance */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                      }}
                    />
                    <h3 className="text-xl font-bold text-white text-center relative z-10">
                      {example.title}
                    </h3>
                  </div>

                  <div
                    className="relative w-full overflow-hidden bg-gray-200 h-80 cursor-col-resize group"
                    onMouseMove={(e) => handleSliderChange(index, e)}
                    onMouseUp={() => stopDragging(index)}
                    onMouseLeave={() => stopDragging(index)}
                    onTouchMove={(e) => handleTouchMove(index, e)}
                    onTouchEnd={() => stopDragging(index)}
                  >
                    {/* Image Après (fond) */}
                    <img
                      src={example.after}
                      alt={`${example.title} - Après`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Image Avant (superposée) */}
                    <div
                      className="absolute inset-y-0 left-0 overflow-hidden"
                      style={{ width: `${position}%` }}
                    >
                      <img
                        src={example.before}
                        alt={`${example.title} - Avant`}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: `${100 / (position / 100)}%`, maxWidth: 'none' }}
                      />
                    </div>

                    {/* Ligne de séparation et curseur */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                      style={{ left: `${position}%` }}
                    >
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#2596be] cursor-grab active:cursor-grabbing group-hover:scale-110 transition-transform"
                        onMouseDown={() => startDragging(index)}
                        onTouchStart={() => startDragging(index)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronLeft className="absolute left-2 w-5 h-5 text-[#011f4b]" strokeWidth={3} />
                        <ChevronRight className="absolute right-2 w-5 h-5 text-[#011f4b]" strokeWidth={3} />
                      </motion.div>
                    </div>

                    {/* Labels Avant/Après avec animations */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Avant
                    </motion.div>
                    <motion.div 
                      className="absolute top-4 right-4 bg-[#005b96] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Après
                    </motion.div>
                  </div>

                  {example.description && (
                    <div className="p-5 bg-gradient-to-b from-gray-50 to-white">
                      <p className="text-center text-[#03396c] font-medium flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2596be]" />
                        {example.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Section Comment ça marche */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-br from-white to-[#6497b1]/5 rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto border border-[#6497b1]/20 relative overflow-hidden">
            {/* Décoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2596be]/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold mb-6 text-[#011f4b] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Comment ça marche ?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-[#03396c] mb-10 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Glissez le curseur sur les images pour découvrir la transformation spectaculaire avant et après notre intervention professionnelle.
              </motion.p>
              
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-red-500 shadow-lg" />
                  <span className="text-[#03396c] font-semibold">État initial</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#2596be]">
                    <ChevronLeft className="w-4 h-4 text-[#011f4b]" />
                    <ChevronRight className="w-4 h-4 text-[#011f4b]" />
                  </div>
                  <span className="text-[#03396c] font-semibold">Glissez pour comparer</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#005b96] shadow-lg" />
                  <span className="text-[#03396c] font-semibold">Résultat final</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Call to action avec animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#005b96] to-[#2596be] text-white px-10 py-5 rounded-full font-bold text-lg hover:from-[#03396c] hover:to-[#005b96] shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-6 h-6" />
              Obtenez votre transformation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === '/services' && window.location.hash === '#transformations') {
      setTimeout(() => {
        const element = document.getElementById('transformations');
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CreativePageHeader
          title="Nos Services"
          description="Solutions complètes de nettoyage et désinfection à la vapeur sèche pour particuliers et professionnels."
          backgroundImage="/testimonials/scsc.jpg"
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ServicesContent />
          </div>
        </section>
        <BeforeAfter />
      </main>
      <Footer />
    </div>
  );
}