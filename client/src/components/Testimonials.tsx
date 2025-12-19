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
    name: "Khadija Elbakkal",
    location: "Tanger",
    service: "Nettoyage de Canapé",
    rating: 5,
    comment: "Honestly, I’m impressed by their work! My sofas, mattresses, and carpets look completely renewed after the steam cleaning. Everything feels fresh and comfortable again. The team was on time, respectful, and very detail-oriented. I’ll definitely call them again and recommend them to others!",
    image: "/testimonials/khadija.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a un mois",
    verified: true
  },
  {
    id: 2,
    name: "Oumaima Elhadi",
    location: "",
    service: "Nettoyage Matelas",
    rating: 5,
    comment: "We are a hotel company, we called them for our sofas, and mattresses. They handled a great quantity with efficiency and professional care. They also offer steam cleaning for all of our rooms. We do thank Mr Ousama for his professional services. We highly recommend.Once again, Thank you very much.",
    image: "/testimonials/oumm.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 3,
    name: "MaKika Mb",
    location: "Tanger",
    service: "Nettoyage de Canapés",
    rating: 5,
    comment: "Professional team. They strictly adhered to the cleaning schedule for my sofa. As for the service, there's nothing to complain about; we got the sofa back to its original color, especially with the kids. Otherwise, I'm already thinking about our next appointment next year, insha'Allah.I'm so grateful to the owner and his team.",
    image: "/testimonials/maki.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a 2 mois",
    verified: true
  },
  {
    id: 4,
    name: "Yassin mazid",
    location: "Tanger",
    service: "Nettoyage de Matelas",
    rating: 5,
    comment: "Quick, efficient, and friendly service. My sofa is spotless, thanks EcoVap. The team arrived on time and worked diligently. I highly recommend their steam cleaning service for anyone looking to refresh their furniture.",
    image: "/testimonials/yaya.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a un mois",
    verified: true
  },
  {
    id: 5,
    name: "Tuflach Hamza",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Service impeccable. Je recommande vivement. Ponctuels et très professionnels. Ils ont nettoyé mon canapé et mon matelas à la vapeur avec un résultat parfait.!",
    image: "/testimonials/haha.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 6,
    name: "Malak Touihar",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Service impeccable. Je recommande vivement. Ponctuels et très professionnels. Ils ont nettoyé mon canapé et mon matelas à la vapeur avec un résultat parfait.!",
    image: "/testimonials/avis2.jpg",
    avatar: "/testimonials/avav.png",
    date: "Il y a 7 semaines",
    verified: true
  }, {
    id: 7,
    name: "CASA DOS MARES",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "We are an apartment hotel and hired this company for the cleaning of our sofas. The work was carried out with seriousness and professionalism. The results are impeccable, and we are fully satisfied with their services. We highly recommend them!",
    image: "/testimonials/avis3.jpg",
    avatar: "/testimonials/avav.png",
    date: "Il y a 7 semaines",
    verified: true
  }, {
    id: 8,
    name: "Fathia chentouf",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "Hello Sirs, I would like to thank you for the quality and efficiency of your cleaning service. We are very satisfied. See you next time. Thank you very much and good luck.",
    image: "/testimonials/avis 4.jpg",
    avatar: "/testimonials/avav.png",
    date: "Il y a 6 semaines",
    verified: true
  },
  {
    id: 9,
    name: "dexter",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "The steam cleaning of my sofas and mattress has given my living room a new lease on lifeThank you very much and good luck.",
    image: "/testimonials/dex.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 10,
    name: "Houssam Nadour",
    location: "Tanger",
    service: "Nettoyage de Canapé et Matelas",
    rating: 5,
    comment: "EcoVap a dépassé mes attentes ! Professionnel, fiable et d’excellents résultats. Je recommande vivement !",
    image: "/testimonials/hoho.png",
    avatar: "/testimonials/avav.png",
    date: "Il y a 1 mois",
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
        {/* Section Clients Populaires */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Nos Clients de Confiance
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des entreprises prestigieuses qui nous font confiance pour leurs besoins en nettoyage et désinfection
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {[
              {
                name: "Ibn Batouta",
                category: "Café & Restaurant",
                logo: "/testimonials/backg ibn batt.png"
              },
              {
                name: "Essaadi",
                category: "Hôtel",
                logo: "/testimonials/background saadi.png"
              },
              {
                name: "Centrico",
                category: "Luxury Living",
                logo: "/testimonials/background centrico.png"
              },
              {
                name: "Marina Bay",
                category: "By Clum",
                logo: "/testimonials/background marina.png"
              }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[180px] border border-gray-100">
                  <div className="relative w-full h-32 flex items-center justify-center mb-4">
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-semibold text-sm text-center mb-1">
                      {client.name}
                    </h4>
                    <p className="text-gray-300 text-xs text-center">
                      {client.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                  <div className="relative h-full min-h-[400px] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    {testimonialsData[currentIndex].image ? (
                      <img
                        src={testimonialsData[currentIndex].image}
                        alt={`Témoignage ${testimonialsData[currentIndex].name}`}
                        className="w-11/12 h-11/12 object-cover rounded-lg"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
              className={`transition-all duration-300 ${index === currentIndex
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
  {/* Title + Button Row */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
    <h3 className="text-2xl font-bold text-gray-800">
      Plus d’avis de nos clients
    </h3>

  <a
  href="https://www.google.com/search?sca_esv=434108a22045feca&sxsrf=AE3TifMHUD9SDdAcE63iNzC5xUTdOp6a8Q:1766066542638&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LmdG-1ruIBDlPI-24I9kqHpgorCQz21DfBp92eIvLxU6DrUskjHOhdekn-u9r8_-UhOFxVt8qa4zcEjGvxKOTov0RyCTJi89QmtYr6C2doXEgINg%3D%3D&q=ECOVAP+TANGER+SARL+Reviews&sa=X&ved=2ahUKEwjLzrHHpseRAxVCxwIHHaY0EMgQ0bkNegQIHxAD&biw=1536&bih=791&dpr=1.25"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Voir les avis Google ECOVAP Tanger SARL"
  className="hidden md:inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
>
  <MessageCircle className="w-5 h-5" />
  Consultez tous les avis
</a>

  </div>

  {/* ici tu peux mettre ta grille de mini-témoignages */}

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