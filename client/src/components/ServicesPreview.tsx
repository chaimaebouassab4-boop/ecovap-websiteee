import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Home, Building2, Check, ArrowRight, Sparkles, Droplets, Wind, Zap } from "lucide-react";

const serviceCategories = [
  {
    icon: Home,
    title: "Services à Domicile",
    description: "Nettoyage, désinfection et traitement anti-nuisibles pour votre maison",
    gradient: "from-[#005b96] to-[#2596be]",
    bgPattern: "radial-gradient(circle at 20% 80%, #2596be 0%, transparent 50%)",
    services: [
      "Nettoyage de canapés à la vapeur sèche (désinfection, anti-acariens, séchage rapide)",
      "Nettoyage et désinfection des matelas (bactéries, odeurs, acariens)",
      "Nettoyage en profondeur des tapis et moquettes",
      "Nettoyage intérieur des sièges de voiture (tissu et cuir)",
      "Traitement anti-acariens, anti-bactéries et anti-virus",
      "Nettoyage professionnel des vitres et surfaces vitrées",
    ],
  },
  {
    icon: Building2,
    title: "Services Spéciaux Hôtels & Restaurants",
    description: "Prestations adaptées au secteur CHR",
    gradient: "from-[#03396c] to-[#005b96]",
    bgPattern: "radial-gradient(circle at 80% 20%, #005b96 0%, transparent 50%)",
    services: [
      "Nettoyage et désinfection de canapés, fauteuils et banquettes",
      "Nettoyage de tapis, moquettes et chaises",
      "Nettoyage des fenêtres, baies vitrées et façades vitrées",
      "Nettoyage des chambres et espaces communs",
      "Désinfection vapeur des cuisines, salles de réception et sanitaires",
      "Interventions rapides avec séchage immédiat",
      "Service fiable, discret et conforme aux standards d'hygiène",
    ],
  },
];

// Composant Logo 3D animé spectaculaire
function AnimatedLogo({ side = "left" }: { side?: "left" | "right" }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            scale: 0, 
            rotateY: side === "left" ? -180 : 180, 
            opacity: 0,
            filter: "blur(20px)"
          }}
          animate={{ 
            scale: [0, 3, 1.5, 1], 
            rotateY: side === "left" ? [180, 360, 540, 720] : [-180, -360, -540, -720],
            opacity: [0, 0.8, 0.6, 0.15],
            x: side === "left" ? [-300, 0, -50, -100] : [300, 0, 50, 100],
            y: [0, -100, -50, 0],
            filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(0px)"]
          }}
          transition={{ 
            duration: 4,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut"
          }}
          className={`absolute ${side === "left" ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 pointer-events-none`}
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Couches multiples pour effet 3D */}
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${side === "left" ? '#2596be' : '#005b96'} 0%, transparent 70%)`
              }}
            />
            
            {/* Logo principal */}
            <motion.img 
              src="/attached_assets/EcoVapLoGo.png" 
              alt="EcoVap"
              className={`w-[500px] h-[500px] object-contain ${side === "right" ? 'scale-x-[-1]' : ''}`}
              animate={{ 
                rotateZ: [0, 360],
                filter: [
                  "drop-shadow(0 0 30px #2596be) brightness(1.2)",
                  "drop-shadow(0 0 60px #005b96) brightness(1.5)",
                  "drop-shadow(0 0 30px #2596be) brightness(1.2)"
                ]
              }}
              transition={{ 
                rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
                filter: { duration: 3, repeat: Infinity }
              }}
            />
            
            {/* Particules orbitales */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#2596be] rounded-full"
                style={{ transformOrigin: "0 0" }}
                animate={{ 
                  rotate: 360,
                  x: [0, 150 * Math.cos(i * 120 * Math.PI / 180)],
                  y: [0, 150 * Math.sin(i * 120 * Math.PI / 180)]
                }}
                transition={{ 
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Composant de carte de service ultra-créative
function ServiceCard({ category, index }: { category: typeof serviceCategories[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Effet de halo animé */}
      <motion.div
        className={`absolute -inset-4 bg-gradient-to-r ${category.gradient} opacity-0 blur-2xl`}
        animate={{ 
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Logo flottant au survol */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 0.3, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            className="absolute -top-20 right-0 pointer-events-none z-50"
          >
            <img src="/attached_assets/EcoVapLoGo.png" alt="" className="w-32 h-32 object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="relative overflow-hidden h-full bg-white/90 backdrop-blur-md border-[#6497b1]/30 shadow-2xl">
        {/* Pattern de fond animé */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ background: category.bgPattern }}
        />

        {/* Particules de vapeur */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isHovered && [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-[#2596be]/10 rounded-full blur-xl"
              initial={{ 
                x: Math.random() * 400 - 200,
                y: 400,
                scale: 0
              }}
              animate={{ 
                y: -100,
                scale: [0, 1, 0],
                x: Math.random() * 400 - 200,
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <CardHeader className="pb-6 relative z-10">
          <motion.div 
            className="flex items-center gap-4"
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icône 3D */}
            <motion.div 
              className="relative"
              animate={{ 
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.6 }}
              style={{ perspective: "100px" }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-xl flex items-center justify-center`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              {/* Emoji flottant */}
              <motion.span
                className="absolute -top-2 -right-2 text-2xl"
                animate={{ 
                  y: isHovered ? [-2, 2, -2] : 0,
                  rotate: isHovered ? [-5, 5, -5] : 0
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {category.emoji}
              </motion.span>
            </motion.div>

            <div className="flex-1">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
                {category.title}
              </CardTitle>
              <p className="text-sm text-[#6497b1] mt-1 font-medium">{category.description}</p>
            </div>
          </motion.div>

          {/* Indicateurs animés */}
          <div className="flex gap-2 mt-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 bg-[#2596be]/10 px-3 py-1 rounded-full"
            >
              <Sparkles className="w-3 h-3 text-[#005b96]" />
              <span className="text-xs text-[#03396c] font-semibold">Écologique</span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="flex items-center gap-1 bg-[#005b96]/10 px-3 py-1 rounded-full"
            >
              <Zap className="w-3 h-3 text-[#2596be]" />
              <span className="text-xs text-[#03396c] font-semibold">Rapide</span>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 relative z-10">
          <ul className="space-y-4 mb-8">
            {category.services.map((service, serviceIndex) => {
              const isSelected = selectedServices.includes(serviceIndex);
              return (
                <motion.li
                  key={serviceIndex}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: serviceIndex * 0.08 }}
                  onClick={() => {
                    setSelectedServices(prev => 
                      isSelected 
                        ? prev.filter(i => i !== serviceIndex)
                        : [...prev, serviceIndex]
                    );
                  }}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <motion.div
                    className="relative mt-0.5"
                    animate={{ 
                      scale: isSelected ? 1.3 : 1,
                      rotate: isSelected ? 360 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className={`w-5 h-5 ${isSelected ? 'text-[#005b96]' : 'text-[#2596be]'} transition-colors`} />
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-[#2596be] rounded-full"
                      />
                    )}
                  </motion.div>
                  <span className={`text-sm transition-all duration-300 ${
                    isSelected 
                      ? 'text-[#011f4b] font-semibold translate-x-1' 
                      : 'text-[#03396c] group-hover:text-[#011f4b]'
                  }`}>
                    {service}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          <Link href="/services">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                className={`w-full group relative overflow-hidden bg-gradient-to-r ${category.gradient} text-white border-none shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  Découvrir tous les services
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#6497b1]/5 to-white">
      {/* Fond animé complexe */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 0% 0%, #2596be10 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #005b9610 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #2596be10 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Logo animé géant à gauche */}
      <AnimatedLogo side="left" />

      {/* Logo animé géant à droite (miroir) */}
      <AnimatedLogo side="right" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre ultra-créatif */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl sm:text-7xl font-bold mb-6">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block text-[#011f4b]"
            >
              Nos
            </motion.span>{" "}
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="inline-block relative"
            >
              <span 
                className="bg-gradient-to-r from-[#005b96] via-[#2596be] to-[#005b96] bg-clip-text text-transparent"
                style={{ 
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradient-shift 3s linear infinite"
                }}
              >
                Services
              </span>
            </motion.span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#2596be] to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-[#6497b1] max-w-3xl mx-auto font-medium"
          >
            Des solutions de nettoyage et désinfection adaptées à vos besoins, 
            que vous soyez particulier ou professionnel.
          </motion.p>

          {/* Badges flottants */}
          <motion.div className="flex justify-center gap-4 mt-8">
            {["Vapeur Sèche", "100% Écologique", "Certifié AFNOR"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-gradient-to-r from-[#2596be]/20 to-[#005b96]/20 px-4 py-2 rounded-full backdrop-blur-sm border border-[#6497b1]/30"
              >
                <span className="text-sm font-semibold text-[#03396c]">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Styles CSS pour l'animation du gradient */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}