import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
    { value: "all", label: "Tous", icon: "🌟" },
    { value: "canape", label: "Canapés", icon: "🛋️" },
    { value: "vehicule", label: "Véhicules", icon: "🚗" },
    { value: "matelas", label: "Matelas", icon: "🛏️" },
    { value: "tapis", label: "Tapis", icon: "🟦" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Résultats Garantis</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.value
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
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
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4">
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
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-3 border-gradient-to-r from-green-500 to-blue-600 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                      onMouseDown={() => startDragging(index)}
                      onTouchStart={() => startDragging(index)}
                    >
                      <ChevronLeft className="absolute left-2 w-4 h-4 text-gray-700" />
                      <ChevronRight className="absolute right-2 w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Labels Avant/Après */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                    Avant
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                    Après
                  </div>
                </div>
                
                {example.description && (
                  <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
                    <p className="text-center text-gray-700 font-medium">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Comment ça marche ?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Glissez le curseur sur les images pour voir la transformation spectaculaire avant et après notre intervention.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500 shadow-lg" />
                <span className="text-gray-700 font-medium">État initial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300">
                  <ChevronLeft className="w-3 h-3" />
                  <ChevronRight className="w-3 h-3" />
                </div>
                <span className="text-gray-700 font-medium">Glissez pour comparer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 shadow-lg" />
                <span className="text-gray-700 font-medium">Résultat final</span>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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