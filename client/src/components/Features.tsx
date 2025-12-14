import { motion } from "framer-motion";
import { Wrench, Clock, Target, Award, CheckCircle, Zap, Shield, Leaf } from "lucide-react";

import { useState, useEffect } from 'react';

// Configuration des features avec les bonnes références d'images
const features = [
  {
    icon: Wrench,
    title: "Sans Démontage",
    description:
      "Nettoyage sur place sans démonter ni déplacer vos équipements. Intervention rapide et efficace.",
    // Utiliser le chemin correct vers votre image
    image: "/features/afbef.png", // Image qui existe dans votre projet
    imageAlt: "Technicien nettoyant un canapé directement sur place avec machine vapeur",
    gradient: "from-[#005b96] to-[#2596be]",
    stats: { value: "", unit: "démontage", label: "Gain de temps" },
    highlights: ["Pas de déplacement", "Pas de risque", "Gain de temps"]
  },
  {
    icon: Clock,
    title: "Rapide",
    description:
      "Espaces utilisables immédiatement après nettoyage.Séchage des textiles en 50 minutes et remise en service des espaces en moins de 1h30.",
    image: "/features/pspspsp.png", // À remplacer par vos images
    imageAlt: "Chronomètre digital affichant 40 minutes avec vapeur en arrière-plan",
    gradient: "from-[#2596be] to-[#6497b1]",
    stats: { value: "", unit: "minutes", label: "Séchage textiles" },
    highlights: ["Séchage rapide", "Utilisation immédiate", "Productivité maintenue"]
  },
  {
    icon: Target,
    title: "Efficace",
    description:
      "Élimine 100% des bactéries, acariens, parasites, même le COVID-19. Résultats garantis.",
    image: "/features/bac.png",
    imageAlt: "Visualisation microscopique de l'élimination des bactéries par la vapeur",
    gradient: "from-[#03396c] to-[#005b96]",
    stats: { value: "", unit: "", label: "Élimination garantie" },
    highlights: ["Anti-bactérien", "Anti-acariens", "Anti-COVID"]
  },
  {
    icon: Award,
    title: "Conforme AFNOR",
    description:
      "Technologie vapeur sèche respectant la norme AFNOR pour milieux médicaux, collectifs et alimentaires (HACCP).",
    image: "/features/norm.png",
    imageAlt: "Logos de certification AFNOR et HACCP avec équipement professionnel",
    gradient: "from-[#011f4b] to-[#03396c]",
    stats: { value: "AFNOR", unit: "", label: "Certification officielle" },
    highlights: ["Norme médicale", "HACCP alimentaire", "Qualité certifiée"]
  },
];

// Composant Feature Card avec gestion d'erreur d'image
function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
        {/* Section image avec placeholder amélioré */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Placeholder créatif toujours visible */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} flex items-center justify-center transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative">
              {/* Cercles décoratifs animés */}
              <div className="absolute inset-0 -m-8">
                <div className="absolute top-0 left-0 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full animate-pulse animation-delay-1000" />
              </div>
              
              {/* Icône centrale */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl relative z-10">
                <feature.icon className="w-16 h-16 text-[#011f4b]" />
              </div>
            </div>
          </div>

          {/* Image réelle */}
          {!imageError && (
            <img
              src={feature.image}
              alt={feature.imageAlt}
              className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 group-hover:scale-110 group-hover:rotate-1' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                console.log(`Image non trouvée: ${feature.image}`);
              }}
            />
          )}

          {/* Overlay avec statistique */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#011f4b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-4xl font-bold mb-1">
                {feature.stats.value}

              </div>
              <div className="text-sm opacity-90">{feature.stats.label}</div>
            </div>
          </div>

          {/* Badge icône flottant */}
          <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
            </div>
          </div>

          {/* Indicateur si l'image n'est pas chargée */}
          {imageError && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-[#6497b1] font-medium">
              Image bientôt disponible
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#011f4b] mb-3 flex items-center gap-3">
            {feature.title}
          </h3>
          
          <p className="text-[#6497b1] text-sm leading-relaxed mb-4">
            {feature.description}
          </p>

          {/* Points forts avec animation */}
          <div className="space-y-2 mt-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
            {feature.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center gap-2 text-xs text-[#03396c]"
              >
                <div className="w-1.5 h-1.5 bg-[#2596be] rounded-full" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Barre de progression décorative */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#2596be] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}

// Composant principal
export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#6497b1]/5 to-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2596be]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#005b96]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-[#2596be]/10 px-4 py-2 rounded-full">
            <Zap className="w-5 h-5 text-[#005b96]" />
            <span className="text-[#03396c] font-semibold text-sm uppercase tracking-wide">
              Technologie Avancée
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#011f4b] mb-4">
            Pourquoi Choisir <span className="bg-gradient-to-r from-[#005b96] to-[#2596be] bg-clip-text text-transparent">EcoVap</span> ?
          </h2>
          <p className="text-lg text-[#6497b1] max-w-3xl mx-auto">
            Notre technologie de vapeur sèche révolutionne le nettoyage professionnel 
            avec des résultats exceptionnels et une approche 100% écologique
          </p>
        </motion.div>

        {/* Grille de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Section bonus */}
// Images du carrousel - ajoutez vos images ici
const carouselImages = [
  '/testimonials/service1.jpg',
  '/testimonials/service2.jpg',
  '/testimonials/service3.jpg',
  '/testimonials/service4.jpg',
  '/testimonials/service5.jpg',
  '/testimonials/service6.jpg',
];

export default function HomeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique des images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Section avec logo et carrousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        {/* Logo centré */}
        <div className="text-center mb-8">
          <img 
            src="/attached_assets/EcoVapLoGo.png"
            alt="EcoVap Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
          />
        </div>

        {/* Carrousel d'images qui défile */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl">
          {/* Container des images avec animation de translation */}
          <motion.div
            className="flex h-full"
            animate={{
              x: `-${currentIndex * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full relative"
              >
                <img
                  src={image}
                  alt={`Transformation ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient pour meilleure lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Indicateurs de position */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>

          {/* Boutons navigation (optionnel) */}
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? carouselImages.length - 1 : prev - 1
            )}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => 
              (prev + 1) % carouselImages.length
            )}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
            aria-label="Image suivante"
          >
            ›
          </button>
        </div>
      </motion.div>

      {/* Section des badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-12 flex-wrap justify-center px-4">
          
          {/* Bloc 100% Écologique */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#2596be]/10 rounded-full flex items-center justify-center">
              <Leaf className="w-7 h-7 text-[#005b96]" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#011f4b] text-lg">100% Écologique</div>
              <div className="text-base text-[#6497b1]">Sans produits chimiques</div>
            </div>
          </div>
          
          {/* Bloc Garanti & Assuré */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#2596be]/10 rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#005b96]" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#011f4b] text-lg">Garanti & Assuré</div>
              <div className="text-base text-[#6497b1]">Résultats garantis</div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </>
  );
}

<motion.div
  // Animation ajustée pour commencer après le logo
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="text-center" // J'ai retiré le mt-20 initial ici pour le remonter un peu
>
  <div className="inline-flex items-center gap-12 flex-wrap justify-center px-4"> 
    {/* J'ai augmenté le gap-8 à gap-12 pour plus d'espace */}
    
    {/* Bloc 100% Écologique */}
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 bg-[#2596be]/10 rounded-full flex items-center justify-center">
        <Leaf className="w-7 h-7 text-[#005b96]" /> {/* Icône plus grande w-7 h-7 */}
      </div>
      <div className="text-left">
        <div className="font-bold text-[#011f4b] text-lg">100% Écologique</div>
        <div className="text-base text-[#6497b1]">Sans produits chimiques</div> {/* Texte légèrement plus grand */}
      </div>
    </div>
    
    {/* Bloc Garanti & Assuré */}
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 bg-[#2596be]/10 rounded-full flex items-center justify-center">
        <Shield className="w-7 h-7 text-[#005b96]" /> {/* Icône plus grande w-7 h-7 */}
      </div>
      <div className="text-left">
        <div className="font-bold text-[#011f4b] text-lg">Garanti & Assuré</div>
        <div className="text-base text-[#6497b1]">Résultats garantis</div> {/* Texte légèrement plus grand */}
      </div>
    </div>
    
  </div>
</motion.div>
      </div>
    </section>
  );
}

// Styles pour les animations
const animationStyles = `
  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }
  
  .animation-delay-1000 {
    animation-delay: 1s;
  }
`;

// Injecter les styles si nécessaire
if (typeof document !== 'undefined' && !document.getElementById('feature-animations')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'feature-animations';
  styleSheet.textContent = animationStyles;
  document.head.appendChild(styleSheet);
}