import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Grid, Sofa, Car, Bed, Square } from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-[#6497b1]/5 to-[#2596be]/10 relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#005b96] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2596be] rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          id="transformations"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 scroll-mt-32"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-[#2596be]/10 to-[#6497b1]/10 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-[#005b96]" />
            <span className="text-[#03396c] font-medium">Résultats Garantis</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
            Transformations Remarquables
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les résultats impressionnants de notre technologie de nettoyage à la vapeur sèche.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.value
                    ? "bg-gradient-to-r from-[#005b96] to-[#2596be] text-white shadow-lg scale-105"
                    : "bg-white text-[#03396c] hover:bg-[#6497b1]/10 shadow-md"
                }`}
              >
                <IconComponent 
                  className={`w-4 h-4 ${
                    activeFilter === category.value 
                      ? "text-white" 
                      : "text-[#2596be]"
                  }`}
                  strokeWidth={2}
                />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExamples.map((example, index) => {
            const position = sliderPositions[index] || 50;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-r from-[#011f4b] to-[#005b96] p-4">
                  <h3 className="text-xl font-semibold text-white text-center">
                    {example.title}
                  </h3>
                </div>
                
                <div
                  className="relative w-full overflow-hidden bg-gray-200 h-80 cursor-col-resize"
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
                    className="absolute inset-y-0 left-0 overflow-hidden transition-all duration-100"
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
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl transition-all duration-100"
                    style={{ left: `${position}%` }}
                  >
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-3 border-[#2596be] cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                      onMouseDown={() => startDragging(index)}
                      onTouchStart={() => startDragging(index)}
                    >
                      <ChevronLeft className="absolute left-2 w-4 h-4 text-[#011f4b]" />
                      <ChevronRight className="absolute right-2 w-4 h-4 text-[#011f4b]" />
                    </div>
                  </div>
                  
                  {/* Labels Avant/Après */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                    Avant
                  </div>
                  <div className="absolute top-4 right-4 bg-[#005b96] text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                    Après
                  </div>
                </div>
                
                {example.description && (
                  <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
                    <p className="text-center text-[#03396c] font-medium">
                      {example.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-[#6497b1]/20">
            <h3 className="text-2xl font-bold mb-4 text-[#011f4b]">Comment ça marche ?</h3>
            <p className="text-lg text-[#03396c] mb-6">
              Glissez le curseur sur les images pour voir la transformation spectaculaire avant et après notre intervention.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500 shadow-lg" />
                <span className="text-[#03396c] font-medium">État initial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#2596be]">
                  <ChevronLeft className="w-3 h-3 text-[#011f4b]" />
                  <ChevronRight className="w-3 h-3 text-[#011f4b]" />
                </div>
                <span className="text-[#03396c] font-medium">Glissez pour comparer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#005b96] shadow-lg" />
                <span className="text-[#03396c] font-medium">Résultat final</span>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#005b96] to-[#2596be] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#03396c] hover:to-[#005b96] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6" />
              Obtenez votre transformation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  const [location] = useLocation();

  useEffect(() => {
    // Gérer le scroll vers l'ancre au chargement de la page
    if (location === '/services' && window.location.hash === '#transformations') {
      setTimeout(() => {
        const element = document.getElementById('transformations');
        if (element) {
          const yOffset = -100; // Compensation pour le header fixe
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // Petit délai pour s'assurer que la page est complètement chargée
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Nos Services"
          description="Solutions complètes de nettoyage et désinfection à la vapeur sèche pour particuliers et professionnels."
          backgroundImage="/testimonials/serrrrrrrr.jpg"
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