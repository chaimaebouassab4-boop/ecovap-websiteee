// app/(site)/AboutContent.tsx
"use client";

import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Heart,
  Award,
  Leaf,
  Shield,
  Users,
  CheckCircle,
  Play,
  Sparkles,
  Bug,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SiYoutube } from "react-icons/si";

/* ============================= HERO (strip columns) ============================= */
// Remplace ces chemins par tes vraies images (WebP/JPG/AVIF optimisés)
const HERO_IMAGES = [
  "/testimonials/IMG-20251208-WA0033.jpg",
  "/testimonials/IMG-20251208-WA0038.jpg",
  "/testimonials/IMG-20251208-WA0054.jpg",
  "/testimonials/IMG-20251208-WA0029.jpg",
  "/services/IMG-20251208-WA0059.jpg",
  "/testimonials/IMG-20251208-WA0037.jpg",
  "/testimonials/IMG-20251208-WA0008.jpg",
];

const certifications = [
  { icon: Award, label: "Conforme AFNOR" },
  { icon: Shield, label: "Certification HACCP" },
  { icon: Leaf, label: "100% Écologique" },
  { icon: CheckCircle, label: "Qualité Garantie" },
];

/* ============================= RESSOURCES IMAGES ============================= */
const steamImage =
  "/attached_assets/generated_images/steam_cleaning_technology_closeup.png";
const residentialImage =
  "/attached_assets/generated_images/residential_cleaning_service.png";

/* ============================= DONNÉES CONTENU ============================= */
const values = [
  {
    icon: Leaf,
    title: "Écologique",
    description: "Nous utilisons uniquement des solutions de nettoyage respectueuses de l'environnement.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Un service professionnel et ponctuel sur lequel vous pouvez compter.",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Des résultats impeccables grâce à notre technologie de pointe.",
    gradient: "from-purple-500 to-pink-600"
  }
];

const stats = [
  {
    value: "100%",
    label: "Bactéries éliminées",
    icon: ShieldCheck,
    color: "text-green-500",
  },
  { value: "0", label: "Produits chimiques", icon: Leaf, color: "text-emerald-500" },
  { value: "40min", label: "Séchage textiles", icon: Clock, color: "text-blue-500" },
  { value: "Expertise", label: "Professionnelle", icon: Award, color: "text-amber-500" },
];

// Services pour la section YouTube
const servicesYoutube = [
  {
    icon: Sparkles,
    title: "Nettoyage",
    description:
      "Canapés, Matelas, Chaises, Tapis, Moquettes, Rideaux et plus encore.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    title: "Désinfection",
    description:
      "Élimination des acariens, punaises de lit, bactéries, puces et moisissures.",
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Bug,
    title: "Désinsectisation",
    description:
      "Traitement intérieur et extérieur contre cafards, fourmis et autres insectes.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

// Configuration YouTube
const youtubeVideoId = "EeAYlscJ3lk";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-16 lg:space-y-24"
    >
    <div className="space-y-16 lg:space-y-24">
      {/* ============================= HERO (mosaïque colonnes) ============================= */}
      <section
        className="relative overflow-hidden rounded-3xl bg-[#f0f8ff] -mx-4 sm:-mx-6 lg:-mx-8
                   px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
        aria-labelledby="hero-title"
      >
        <div className="relative h-[500px] sm:h-[580px] lg:h-[620px] rounded-3xl overflow-hidden">
          {/* Bande d'images en colonnes */}
          <div className="absolute inset-0 flex gap-3 sm:gap-4 px-3 sm:px-4 items-stretch">
            {HERO_IMAGES.map((src, i) => (
              <div 
                key={`${src}-${i}`}
              className={[
  "relative h-full overflow-hidden rounded-[22px] border border-[#2596be]/20 shadow-sm",
  i % 7 === 0
    ? "w-[14%] sm:w-[12%]"
    : i % 5 === 0
    ? "w-[26%] sm:w-[22%]"
    : i % 3 === 0
    ? "w-[18%] sm:w-[16%]"
    : "w-[16%] sm:w-[14%]",
].join(" ")}

              >
                <img
                  src={src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay bleu clair plus léger pour mieux voir les images */}
                <div className="absolute inset-0 bg-[#2596be]/8 mix-blend-multiply" />
                <div className="absolute inset-0 ring-1 ring-white/40" />
              </div>
            ))}
          </div>

          {/* Dégradés latéraux (fondu propre) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#f0f8ff] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#f0f8ff] to-transparent" />

          {/* Overlay gradient subtil pour meilleure lisibilité du texte */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

          {/* Texte au centre */}
          <div className="absolute inset-0 flex items-start justify-center pt-12 sm:pt-16 lg:pt-20">
            <div className="text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3"
              >
               
              </motion.h1>

         

              {/* Badges */}
              
            </div>
          </div>
        </div>

        {/* Liseré doux en bas */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#2596be]/30 to-transparent" />
      </section>

      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center items-center"
              >
                  <a
                  href="#contact"
                  className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2596be] to-[#005b96] hover:from-[#005b96] hover:to-[#011f4b] text-white text-base font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Obtenir votre devis
                </a>
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#2596be]/40 text-[#03396c] text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <cert.icon className="w-4 h-4 text-[#005b96]" />
                    <span>{cert.label}</span>
                   
                  </motion.div>
                  
                ))}
              </motion.div>


      {/* ============================= Qui Sommes-Nous ============================= */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        aria-labelledby="mission-heading"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2
            id="mission-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
          >
            Qui Sommes-Nous ?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            EcoVap est une entreprise spécialisée dans le nettoyage, la désinfection
            et la désinsectisation à Tanger. Nous sommes pionniers dans
            l&apos;utilisation de la technologie de vapeur sèche au Maroc.
          </p>
          <p className="text-muted-foreground mb-6">
            Notre approche innovante permet d&apos;éliminer efficacement les bactéries,
            virus, acariens et parasites sans utiliser de produits chimiques nocifs.
            Cette méthode respectueuse de l&apos;environnement garantit des résultats
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

      {/* ============================= YouTube + Services ============================= */}
      <section className="py-6" aria-labelledby="demo-heading">
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
          {/* Left - YouTube */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* FIX: <a> complet */}
            <a
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="aspect-video relative bg-gradient-to-br from-[#011f4b] to-[#2596be]">
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Démonstration EcoVap - Nettoyage à la vapeur sèche"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </motion.div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                  <SiYoutube className="w-6 h-6 text-red-600" />
                  <span className="text-sm font-medium text-gray-800">
                    Voir la démo
                  </span>
                </div>
              </div>
            </a>

            <motion.a
              href="https://www.youtube.com/@EcoVapTanger"
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

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#011f4b] mb-6">
              Ce que nous faisons
            </h3>

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
                    <h4 className="font-semibold text-[#011f4b] mb-1 text-lg">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

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
                  <strong>100% Écologique</strong> — Tous nos services utilisent la
                  technologie de vapeur sèche, sans aucun produit chimique. Résultats
                  garantis et conformes aux normes AFNOR.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================= Stats ============================= */}
      <section
        className="bg-gradient-to-r from-[#011f4b]/5 to-[#2596be]/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 rounded-xl border border-[#2596be]/10"
        aria-labelledby="stats-heading"
      >
        <h2 id="stats-heading" className="sr-only">
          Nos chiffres clés
        </h2>
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

      {/* ============================= Valeurs ============================= */}
    <section aria-labelledby="values-heading" className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#005b96] rounded-full blur-xl"
              />
              <img
                src="/attached_assets/EcoVapLoGo.png"
                alt="EcoVap Logo"
                className="w-20 h-20 object-contain relative z-10"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="values-heading"
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent"
          >
            Nos Valeurs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Les principes qui guident notre travail au quotidien.
          </motion.p>
        </div>

        {/* Cartes des valeurs - Design moderne avec backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Carte avec background dégradé */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Background dégradé animé */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-90`}>
                    <motion.div
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                      style={{ backgroundSize: "200% 200%" }}
                    />
                  </div>

                  {/* Motif décoratif */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icône */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="mb-6"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Texte */}
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">
                      {value.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed drop-shadow-sm flex-1">
                      {value.description}
                    </p>

                    {/* Indicateur décoratif */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                      className="mt-6 h-1 bg-white rounded-full shadow-md"
                    />
                  </div>

                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>

      {/* ============================= Technologie Vapeur Sèche ============================= */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        aria-labelledby="tech-heading"
      >
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
            La vapeur sèche est une technologie de nettoyage innovante qui utilise une vapeur à
            haute température (jusqu&apos;à 180&nbsp;°C) avec un taux d&apos;humidité très faible
            (moins de 5&nbsp;%), garantissant une désinfection efficace sans mouiller les surfaces.
          </p>
          <p className="text-muted-foreground mb-6">Cette méthode permet de :</p>

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

      {/* ============================= Équipe ============================= */}
     <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative text-center -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-xl border border-[#2596be]/20 overflow-hidden"
  aria-labelledby="team-heading"
  style={{
backgroundImage: `url('https://bds-proprete.com/wp-content/uploads/2025/03/worker-vapor-cleaning-a-matress1.jpg')`, // ← Image n°15    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay semi-transparent pour améliorer la lisibilité du texte */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#011f4b]/70 to-[#2596be]/70" />

  {/* Contenu centré avec z-index */}
  <div className="relative z-10">
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#005b96] to-[#2596be] mb-6 mx-auto"
    >
      <Users className="w-8 h-8 text-white" />
    </motion.div>

    <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
      Une Équipe Professionnelle
    </h2>

    <p className="text-lg text-white/90 max-w-2xl mx-auto">
      Notre équipe de techniciens qualifiés à Tanger est formée aux dernières techniques de nettoyage
      à la vapeur sèche. Nous garantissons un service professionnel, ponctuel et respectueux de vos espaces,
      pour un résultat propre, sain et durable.
    </p>
  </div>
</motion.section>
    </div>
    </motion.div>
  );
}
