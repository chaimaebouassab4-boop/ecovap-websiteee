import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart, Award, Leaf, Shield, Users, CheckCircle, Play, Sparkles, Bug } from "lucide-react";
import { motion } from "framer-motion";
import { SiYoutube } from "react-icons/si";

const steamImage = "/attached_assets/generated_images/steam_cleaning_technology_closeup.png";
const residentialImage = "/attached_assets/generated_images/residential_cleaning_service.png";
import { ShieldCheck, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Offrir des solutions de nettoyage innovantes et écologiques qui garantissent une hygiène parfaite tout en préservant l'environnement et la santé de nos clients.",
    image: "/services/mission.jpg",
    color: "from-[#011f4b] to-[#03396c]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous utilisons la technologie de pointe de la vapeur sèche, une méthode révolutionnaire qui élimine 100% des germes sans produits chimiques.",
    image: "/services/innovation.jpg",
    color: "from-[#005b96] to-[#2596be]"
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Notre équipe est dédiée à fournir un service de qualité exceptionnelle, avec professionnalisme et respect de vos espaces.",
    image: "/services/engagement.jpg",
    color: "from-[#2596be] to-[#6497b1]"
  },
];

const certifications = [
  { icon: Award, label: "Conforme AFNOR" },
  { icon: Shield, label: "Certification HACCP" },
  { icon: Leaf, label: "100% Écologique" },
  { icon: CheckCircle, label: "Qualité Garantie" },
];

const stats = [
  { value: "100%", label: "Bactéries éliminées", icon: ShieldCheck, color: "text-green-500" },
  { value: "0", label: "Produits chimiques", icon: Leaf, color: "text-emerald-500" },
  { value: "40min", label: "Séchage textiles", icon: Clock, color: "text-blue-500" },
{ value: "Expertise", label: "Professionnelle", icon: Award, color: "text-amber-500" },
];

// Services pour la section YouTube
const servicesYoutube = [
  {
    icon: Sparkles,
    title: "Nettoyage",
    description: "Canapés, Matelas, Chaises, Tapis, Moquettes, Rideaux et plus encore.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    title: "Désinfection",
    description: "Élimination des acariens, punaises de lit, bactéries, puces et moisissures.",
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Bug,
    title: "Désinsectisation",
    description: "Traitement intérieur et extérieur contre cafards, fourmis et autres insectes.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

// Configuration YouTube
const youtubeVideoId = "EeAYlscJ3lk";
const youtubeChannelUrl = "https://www.youtube.com/@VotreChaine";

export default function AboutContent() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Section Hero avec Logo Animé */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6497b1]/10 via-[#2596be]/5 to-transparent overflow-hidden rounded-2xl"
      >
        {/* Bulles décoratives animées */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-64 h-64 bg-[#2596be]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#005b96]/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo avec animations multiples */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 1 
            }}
            className="relative mb-8"
          >
            {/* Cercle lumineux pulsant */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#005b96] rounded-full blur-2xl"
            />
            
            {/* Logo qui flotte */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.img
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                src="/attached_assets/EcoVapLoGo.png"
                alt="EcoVap Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl"
              />
            </motion.div>

            {/* Anneaux rotatifs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-2 border-[#2596be]/30 rounded-full"
              style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-2 border-dashed border-[#005b96]/20 rounded-full"
              style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}
            />
          </motion.div>

          {/* Texte animé */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent"
          >
            EcoVap Tanger
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#03396c] mb-6"
          >
            L'Art du Nettoyage Écologique
          </motion.p>

          {/* Badges animés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-[#2596be]/20"
              >
                <cert.icon className="w-4 h-4 text-[#005b96]" />
                <span className="text-sm font-medium text-[#03396c]">{cert.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Qui Sommes-Nous */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" aria-labelledby="mission-heading">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Qui Sommes-Nous ?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            EcoVap est une entreprise spécialisée dans le nettoyage, la désinfection 
            et la désinsectisation à Tanger. Nous sommes pionniers dans l'utilisation 
            de la technologie de vapeur sèche au Maroc.
          </p>
          <p className="text-muted-foreground mb-6">
            Notre approche innovante permet d'éliminer efficacement les bactéries, 
            virus, acariens et parasites sans utiliser de produits chimiques nocifs. 
            Cette méthode respectueuse de l'environnement garantit des résultats 
            exceptionnels tout en préservant la santé de nos clients.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={residentialImage}
              alt="Service de nettoyage résidentiel EcoVap"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ==================== SECTION: YouTube + Services ==================== */}
      <section className="py-8" aria-labelledby="demo-heading">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="demo-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent"
          >
            Nos Services en Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez notre expertise à travers nos démonstrations vidéo
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* YouTube Video Thumbnail with Play Button */}
            <a
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative bg-gradient-to-br from-[#011f4b] to-[#2596be]">
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Démonstration EcoVap - Nettoyage à la vapeur sèche"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Play Button */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </motion.div>

                {/* YouTube Logo Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                  <SiYoutube className="w-6 h-6 text-red-600" />
                  <span className="text-sm font-medium text-gray-800">Voir la démo</span>
                </div>
              </div>
            </a>

            {/* Subscribe Button */}
            <motion.a
              href={"https://www.youtube.com/@EcoVapTanger"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-lg"
            >
              <SiYoutube className="w-5 h-5" />
              <span className="font-medium">Voir toutes nos démonstrations</span>
            </motion.a>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#011f4b] mb-6">
              Ce que nous faisons
            </h3>
            
            {/* Services Grid */}
            <div className="space-y-4">
              {servicesYoutube.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-start gap-4 p-5 rounded-xl ${service.bgColor} border ${service.borderColor} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#011f4b] mb-1 text-lg">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#011f4b]/5 to-[#2596be]/5 rounded-xl border border-[#2596be]/20"
            >
             <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex items-start gap-3"
>
  <motion.div
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <Leaf className="w-6 h-6 text-green-500 shrink-0 mt-1" />
  </motion.div>
  <p className="text-[#03396c] leading-relaxed">
    <strong>100% Écologique</strong> - Tous nos services utilisent la technologie 
    de vapeur sèche, sans aucun produit chimique. Résultats garantis et conformes 
    aux normes AFNOR.
  </p>
</motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ==================== FIN SECTION YouTube ==================== */}

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#011f4b]/5 to-[#2596be]/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl border border-[#2596be]/10" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <motion.p 
                whileHover={{ scale: 1.1 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#005b96] to-[#2596be] bg-clip-text text-transparent mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-[#03396c] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nos Valeurs - Version améliorée avec images */}
      <section aria-labelledby="values-heading">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#005b96] rounded-full blur-xl"
              />
              <img
                src="/attached_assets/EcoVapLoGo.png"
                alt="EcoVap Logo"
                className="w-16 h-16 object-contain relative z-10"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="values-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent"
          >
            Nos Valeurs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Les principes qui guident notre travail au quotidien.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image de fond avec overlay */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#6497b1]/20 to-[#2596be]/20">
                  <div className={`absolute inset-0 bg-gradient-to-t ${value.color} opacity-80`} />
                  
                  {/* Icône flottante */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 bg-white rounded-full blur-xl"
                      />
                      <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                        <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#011f4b] mb-3 group-hover:text-[#005b96] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Barre décorative animée en bas */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${value.color}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Logo animé en bas de la section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <img
              src="/attached_assets/EcoVapLoGo.png"
              alt="EcoVap"
              className="w-12 h-12 object-contain opacity-20 hover:opacity-40 transition-opacity"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Technologie Vapeur Sèche */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" aria-labelledby="tech-heading">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={steamImage}
              alt="Technologie de vapeur sèche EcoVap"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            La Technologie Vapeur Sèche
          </h2>
          <p className="text-muted-foreground mb-4">
            La vapeur sèche est une technologie de nettoyage révolutionnaire qui 
            utilise de la vapeur à haute température (180°C) avec un taux d'humidité 
            très faible (moins de 5%).
          </p>
          <p className="text-muted-foreground mb-6">
            Cette méthode permet de :
          </p>
          <ul className="space-y-3">
            {[
              "Éliminer 100% des bactéries et virus",
              "Détruire les acariens et leurs allergènes",
              "Neutraliser les mauvaises odeurs",
              "Nettoyer sans mouiller les surfaces",
              "Préserver l'environnement sans produits chimiques",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[#005b96] shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Équipe Professionnelle */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gradient-to-r from-[#011f4b]/5 to-[#2596be]/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl border border-[#2596be]/10"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#005b96] to-[#2596be] mb-6"
        >
          <Users className="w-8 h-8 text-white" />
        </motion.div>
        <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Une Équipe Professionnelle
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Notre équipe de techniciens qualifiés est formée aux dernières techniques 
          de nettoyage à la vapeur sèche. Nous garantissons un service professionnel, 
          ponctuel et respectueux de vos espaces.
        </p>
      </motion.section>
    </div>
  );
}