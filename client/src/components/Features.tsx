import { motion } from "framer-motion";
import { Wrench, Clock, Target, Award, CheckCircle, Zap, Shield, Leaf } from "lucide-react";
import { useState } from "react";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2596be]/10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#005b96]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#011f4b]">100% Écologique</div>
                <div className="text-sm text-[#6497b1]">Sans produits chimiques</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2596be]/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#005b96]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#011f4b]">Garanti & Assuré</div>
                <div className="text-sm text-[#6497b1]">Résultats garantis</div>
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