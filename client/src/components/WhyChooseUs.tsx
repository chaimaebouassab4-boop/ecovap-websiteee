import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steamImage = "/attached_assets/generated_images/steam_cleaning_technology_closeup.png";

const benefits = [
  {
    icon: Leaf,
    title: "100% Écologique",
    description: "Nettoyage sans produits chimiques. Sûr pour votre famille, vos animaux et l'environnement.",
  },
  {
    icon: Sparkles,
    title: "Technologie Innovante",
    description: "Vapeur sèche à haute température qui élimine germes et allergènes sans résidus.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité Certifiée",
    description: "Conformité aux normes AFNOR et HACCP pour les environnements les plus exigeants.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden" aria-labelledby="why-heading">
      {/* Éléments décoratifs animés en arrière-plan */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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

      {/* Logo animé à GAUCHE */}
      <motion.div
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2"
        initial={{ x: -200, opacity: 0, rotate: -180 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      >
        <img 
          src="/attached_assets/EcoVapLoGo.png" 
          alt="EcoVap Logo" 
          className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Logo animé à DROITE */}
      <motion.div
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2"
        initial={{ x: 200, opacity: 0, rotate: 180 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      >
        <img 
          src="/attached_assets/EcoVapLoGo.png" 
          alt="EcoVap Logo" 
          className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain drop-shadow-2xl"
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section texte avec animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <motion.h2 
              id="why-heading" 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              La Puissance de la Vapeur Sèche
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Notre technologie de nettoyage à la vapeur sèche offre une solution 
              révolutionnaire pour une hygiène parfaite. Sans eau stagnante, sans 
              produits chimiques, juste de la vapeur pure à haute température.
            </motion.p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card 
                    className="border-0 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg" 
                    data-testid={`card-benefit-${index}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <benefit.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section image avec animations créatives */}
          <motion.div 
            className="relative z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Cercles décoratifs animés autour de l'image */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/10 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            />

            {/* Particules flottantes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}

            <motion.div 
              className="aspect-[4/3] rounded-xl overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={steamImage}
                alt="Technologie de nettoyage à vapeur sèche EcoVap"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Overlay avec effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%", y: "-100%" }}
                whileHover={{ x: "100%", y: "100%" }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>

            {/* Badge animé "100% Bactéries éliminées" */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.p 
                className="text-2xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                100%
              </motion.p>
              <p className="text-sm">Bactéries éliminées</p>
              
              {/* Effet de pulsation */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-primary-foreground"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}