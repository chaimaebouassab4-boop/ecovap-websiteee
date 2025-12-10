import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import beforeImg from "./images/before.jpg";
import afterImg from "./images/afte.jpg";
import beforev from "./images/befvoi.png";
import afterv from "./images/afvoi.png";
import beff from "./images/beff.png";
import afff from "./images/afff.png";
import matkh from "./images/matkh.png";
import tapkkk from "./images/tapkkk.jpg";
import tapmmm from "./images/tapmmm.jpg";
import mate from "./images/mate.jpg";
import matfff from "./images/matff.jpg";
import zark from "./images/zark.png";
import zarm from "./images/zarm.jpg";

const beforeAfterExamples = [
  {
    title: "Nettoyage de Canapé ",
    before: beforeImg,
    after: afterImg,
  },
  {
    title: "Intérieur Véhicules",
    before: beforev ,
    after: afterv ,
  },
    {
    title: "Nettoyage de Matelas",
    before: mate,
    after: matfff,
  },
    {
    title: "Intérieur Véhicules",
    before: beff ,
    after: afff ,
  },
  {
    title: "Nettoyage de Tapis ",
    before: tapkkk,
    after: tapmmm,
  },
    {
    title: "Nettoyage de Tapis ",
    before: zark,
    after: zarm,
  },
  
  
];

function BeforeAfter() {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>(
    beforeAfterExamples.reduce((acc, _, i) => ({ ...acc, [i]: 50 }), {})
  );

  const handleSliderChange = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPositions((prev) => ({ ...prev, [index]: percentage }));
  };

  const handleTouchMove = (index: number, e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const div = e.currentTarget;
    const rect = div.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPositions((prev) => ({ ...prev, [index]: percentage }));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transformations Remarquables
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les résultats impressionnants de notre technologie de nettoyage à la vapeur sèche.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterExamples.map((example, index) => {
            const position = sliderPositions[index] || 50;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {example.title}
                </h3>
                <div
                  className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-col-resize bg-gray-200 h-80"
                  onMouseMove={(e) => handleSliderChange(index, e)}
                  onTouchMove={(e) => handleTouchMove(index, e)}
                >
                  {/* After Image (Background) */}
                  <img
                    src={example.after}
                    alt={`${example.title} - Après`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before Image (Overlay) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${position}%` }}
                  >
                    <img
                      src={example.before}
                      alt={`${example.title} - Avant`}
                      className="w-full h-full object-cover"
                      style={{ width: `calc(100% * ${100 / position})` }}
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-all"
                    style={{ left: `${position}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
                      <div className="flex items-center gap-1">
                        <div className="w-0.5 h-4 bg-blue-500" />
                        <div className="w-0.5 h-4 bg-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Avant
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Après
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Glissez le curseur pour voir la différence avant et après nettoyage
          </p>
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <span className="text-foreground font-medium">Avant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-foreground font-medium">Après</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
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
