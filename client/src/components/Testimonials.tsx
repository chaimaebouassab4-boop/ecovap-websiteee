// Testimonials.tsx - Section témoignages créative avec animations et carrousel
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, Heart, ThumbsUp } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  image?: string; // Image du témoignage (capture d'écran)
  avatar?: string; // Avatar du client
  date: string;
  verified: boolean;
}

// Exemple de données - Remplacez par vos vraies captures
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Marie L.",
    location: "Casablanca",
    service: "Nettoyage de Canapé",
    rating: 5,
    comment: "Service exceptionnel ! Mon canapé est comme neuf. L'équipe était professionnelle et ponctuelle. Je recommande vivement EcoVap !",
    image: "/testimonials/capture1.jpg",
    avatar: "/avatars/marie.jpg",
    date: "Il y a 2 semaines",
    verified: true
  },
  {
    id: 2,
    name: "Ahmed B.",
    location: "Rabat",
    service: "Nettoyage Intérieur Véhicule",
    rating: 5,
    comment: "Incroyable ! Ma voiture sent le neuf et tous les sièges sont impeccables. Le processus à la vapeur sèche est vraiment efficace.",
    image: "/testimonials/capture2.jpg",
    avatar: "/avatars/ahmed.jpg",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 3,
    name: "Fatima Z.",
    location: "Marrakech",
    service: "Nettoyage de Matelas",
    rating: 5,
    comment: "Je suis allergique aux acariens et depuis le traitement, je dors beaucoup mieux. Service professionnel et résultats visibles !",
    image: "/testimonials/capture3.jpg",
    avatar: "/avatars/fatima.jpg",
    date: "Il y a 3 semaines",
    verified: true
  },
  {
    id: 4,
    name: "Youssef K.",
    location: "Tanger",
    service: "Nettoyage de Tapis",
    rating: 5,
    comment: "Mes tapis persans ont retrouvé leurs couleurs d'origine. L'équipe a pris grand soin de mes biens. Excellent travail !",
    image: "/testimonials/capture4.jpg",
    avatar: "/avatars/youssef.jpg",
    date: "Il y a 5 jours",
    verified: true
  },
  {
    id: 5,
    name: "Sarah M.",
    location: "Fès",
    service: "Nettoyage de Canapé",
    rating: 5,
    comment: "Des taches impossibles ont disparu comme par magie ! Le service client est aussi excellent que le nettoyage. Merci EcoVap !",
    image: "/testimonials/capture5.jpg",
    avatar: "/avatars/sarah.jpg",
    date: "Il y a 2 mois",
    verified: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-play du carrousel
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
      className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden scroll-mt-24"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 px-4 py-2 rounded-full">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Témoignages Clients</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis authentiques de nos clients satisfaits à travers le Maroc
          </p>
        </motion.div>

        {/* Carrousel principal */}
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
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Partie gauche - Contenu du témoignage */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img 
                          src={testimonialsData[currentIndex].avatar || "/default-avatar.jpg"}
                          alt={testimonialsData[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-3 border-green-500"
                        />
                        {testimonialsData[currentIndex].verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                            <ThumbsUp className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {testimonialsData[currentIndex].name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonialsData[currentIndex].location} • {testimonialsData[currentIndex].service}
                        </p>
                      </div>
                    </div>

                    {/* Étoiles */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonialsData[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {testimonialsData[currentIndex].date}
                      </span>
                    </div>

                    {/* Citation */}
                    <div className="relative mb-6">
                      <Quote className="absolute -top-4 -left-4 w-8 h-8 text-green-200" />
                      <p className="text-lg text-gray-700 italic relative z-10 pl-6">
                        "{testimonialsData[currentIndex].comment}"
                      </p>
                    </div>

                    {/* Badge vérifié */}
                    {testimonialsData[currentIndex].verified && (
                      <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        <ThumbsUp className="w-4 h-4" />
                        Avis vérifié
                      </div>
                    )}
                  </div>

                  {/* Partie droite - Image/Capture */}
                  <div className="relative h-full min-h-[400px] bg-gradient-to-br from-blue-100 to-green-100">
                    {testimonialsData[currentIndex].image ? (
                      <img 
                        src={testimonialsData[currentIndex].image}
                        alt={`Témoignage ${testimonialsData[currentIndex].name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center p-8">
                          <MessageCircle className="w-24 h-24 text-blue-300 mx-auto mb-4" />
                          <p className="text-gray-600">Capture d'écran du témoignage</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
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
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
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
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full' 
                  : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
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
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Plus d'avis de nos clients
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(testimonial.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative overflow-hidden group"
              >
                {/* Effet de fond au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.avatar || "/default-avatar.jpg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm line-clamp-3">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{testimonial.service}</span>
                    {hoveredCard === testimonial.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1"
                      >
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        <span className="text-xs text-gray-600">Utile</span>
                      </motion.div>
                    )}
                  </div>
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
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez des centaines de clients satisfaits
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Demandez votre devis gratuit
          </a>
        </motion.div>
      </div>

      {/* Styles pour les animations blob */}
      <style jsx>{`
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