// Testimonials.tsx - Section témoignages avec captures d'écran uniquement
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Heart, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  image: string; // Capture d'écran du témoignage Google
  date: string;
  verified: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Khadija Elbakkal",
    location: "Tanger",
    service: "Nettoyage de Canapé",
    rating: 5,
    comment: "Honestly, I'm impressed by their work!",
    image: "/testimonials/khadija.png",
    date: "Il y a un mois",
    verified: true
  },
  {
    id: 2,
    name: "Oumaima Elhadi",
    location: "Tanger",
    service: "Nettoyage Matelas",
    rating: 5,
    comment: "We are a hotel company, we called them for our sofas...",
    image: "/testimonials/oumm.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 3,
    name: "MaKika Mb",
    location: "Tanger",
    service: "Nettoyage de Canapés",
    rating: 5,
    comment: "Professional team...",
    image: "/testimonials/maki.png",
    date: "Il y a 2 mois",
    verified: true
  },
  {
    id: 4,
    name: "Yassin mazid",
    location: "Tanger",
    service: "Nettoyage de Matelas",
    rating: 5,
    comment: "Quick, efficient, and friendly service...",
    image: "/testimonials/yaya.png",
    date: "Il y a un mois",
    verified: true
  },
  {
    id: 5,
    name: "Tuflach Hamza",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Service impeccable...",
    image: "/testimonials/haha.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 6,
    name: "Malak Touihar",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Service impeccable...",
    image: "/testimonials/avis2.jpg",
    date: "Il y a 7 semaines",
    verified: true
  },
  {
    id: 7,
    name: "CASA DOS MARES",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "We are an apartment hotel...",
    image: "/testimonials/avis3.jpg",
    date: "Il y a 7 semaines",
    verified: true
  },
  {
    id: 8,
    name: "Fathia chentouf",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Hello Sirs, I would like to thank you...",
    image: "/testimonials/avis 4.jpg",
    date: "Il y a 6 semaines",
    verified: true
  },
  {
    id: 9,
    name: "dexter",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "The steam cleaning of my sofas...",
    image: "/testimonials/dex.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 10,
    name: "Houssam Nadour",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "EcoVap a dépassé mes attentes !",
    image: "/testimonials/hoho.png",
    date: "Il y a 1 mois",
    verified: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="temoignages"
      className="py-20 lg:py-28 bg-gradient-to-br from-[#6497b1]/10 via-white to-[#2596be]/10 relative overflow-hidden scroll-mt-24"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2596be] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#005b96] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#011f4b] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Clients Populaires */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
              Nos Clients de Confiance
            </h3>
            <p className="text-lg text-[#03396c] max-w-2xl mx-auto">
              Des entreprises prestigieuses qui nous font confiance pour leurs besoins en nettoyage et désinfection
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-10">
            {[
              { name: "Ibn Batouta", category: "Café & Restaurant", logo: "/testimonials/backg ibn batt.png" },
              { name: "Essaadi", category: "Hôtel", logo: "/testimonials/background saadi.png" },
              { name: "Mondini", category: "By Clum", logo: "/testimonials/mondini22.png" },
              { name: "Centrico", category: "Luxury Living", logo: "/testimonials/background centrico.png" },
              { name: "Marina Bay", category: "By Clum", logo: "/testimonials/background marina.png" }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[180px] border border-[#2596be]/10 ${
                  client.name === "Mondini" 
                    ? "bg-gradient-to-br from-[#011f4b] to-[#03396c]" 
                    : "bg-white"
                }`}>
                  <div className="relative w-full h-32 flex items-center justify-center mb-4">
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        client.name === "Mondini"
                          ? "filter-none group-hover:scale-110"
                          : "filter grayscale group-hover:grayscale-0"
                      }`}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#011f4b]/90 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-semibold text-sm text-center mb-1">{client.name}</h4>
                    <p className="text-[#6497b1] text-xs text-center">{client.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005b96] to-[#2596be] text-white px-6 py-3 rounded-full font-semibold hover:from-[#03396c] hover:to-[#005b96] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Devenir Client
            </a>
          </div>
        </motion.div>

        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-[#2596be]/10 to-[#005b96]/10 px-4 py-2 rounded-full">
            <MessageCircle className="w-5 h-5 text-[#005b96]" />
            <span className="text-[#03396c] font-medium">Témoignages Clients</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-[#03396c] max-w-2xl mx-auto">
            Découvrez les avis authentiques de nos clients satisfaits à travers le Maroc
          </p>
        </motion.div>

        {/* Carrousel principal - CAPTURES D'ÉCRAN UNIQUEMENT */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Capture d'écran taille réduite */}
                <div className="relative min-h-[400px] md:min-h-[450px] bg-gradient-to-br from-[#6497b1]/5 to-[#2596be]/5 flex items-center justify-center p-6 md:p-8">
                  {testimonialsData[currentIndex].image ? (
                    <div className="max-w-2xl w-full">
                      <img
                        src={testimonialsData[currentIndex].image}
                        alt={`Témoignage ${testimonialsData[currentIndex].name}`}
                        className="w-full h-auto object-contain rounded-lg shadow-2xl"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-8">
                        <MessageCircle className="w-24 h-24 text-[#2596be] mx-auto mb-4" />
                        <p className="text-[#03396c]">Capture d'écran du témoignage</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-[#011f4b]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-[#011f4b]" />
          </button>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2 mb-16">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-[#005b96] to-[#2596be] rounded-full'
                  : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-[#2596be]'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Grille de mini-témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-[#011f4b]">
              Plus d'avis de nos clients
            </h3>

            <a
              href="https://www.google.com/search?q=ECOVAP+TANGER+SARL+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#005b96] to-[#2596be] text-white px-6 py-3 rounded-full font-semibold hover:from-[#03396c] hover:to-[#005b96] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Consultez tous les avis
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(7, 10).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(testimonial.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64">
                  <img
                    src={testimonial.image}
                    alt={`Avis ${testimonial.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {hoveredCard === testimonial.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#011f4b]/80 to-transparent flex items-end p-4"
                    >
                      <div className="text-white">
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#03396c] mb-6">
            Rejoignez des centaines de clients satisfaits
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#005b96] to-[#2596be] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#03396c] hover:to-[#005b96] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Demandez votre devis gratuit
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}