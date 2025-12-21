import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";

interface CreativePageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function CreativePageHeader({
  title,
  description,
  backgroundImage = "/testimonials/serrrrrrrr.jpg",
  ctaHref = "https://wa.me/212657387660",
  ctaLabel = "Commander via WhatsApp",
}: CreativePageHeaderProps) {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Background image avec parallax effect */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(1,31,75,0.70) 0%, rgba(3,57,108,0.60) 50%, rgba(1,31,75,0.75) 100%), url('${backgroundImage}')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Animated decorative shapes */}
      <motion.div
        className="absolute -left-20 -top-20 w-96 h-96 bg-[#2596be]/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-20 -bottom-24 w-80 h-80 bg-[#005b96]/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-32 pb-16 md:pt-40 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Main card with glassmorphism */}
            <div className="relative">
              {/* Glow effect behind card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2596be]/30 to-[#005b96]/30 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2596be]/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  {/* Logo with animation */}
                  <motion.div
                    className="flex-shrink-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#005b96] to-[#2596be] flex items-center justify-center shadow-2xl relative overflow-hidden"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Shimmer container */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white/20"
                    >
                      {/* Effet de balayage lumineux (Shimmer) sur le fond blanc */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent z-20"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 2,
                        }}
                      />

                      {/* Logo EcoVap bien centré */}
                      <img
                        src="/attached_assets/EcoVapLoGo.png"
                        alt="EcoVap"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 transition-transform duration-500 hover:scale-110"
                      />

                      {/* Halo de lumière interne pour l'élégance */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#2596be]/5 to-transparent pointer-events-none" />
                    </motion.div>
                  </motion.div>

                  <div className="flex-1 text-center lg:text-left">
                    {/* Title with gradient */}
                    <motion.h1
                      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#e6fbff] to-white bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {title}
                    </motion.h1>

                    {description && (
                      <motion.p
                        className="mt-4 text-lg sm:text-xl text-[#dff6ff] max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {description}
                      </motion.p>
                    )}

                    <motion.div
                      className="mt-8 flex flex-col sm:flex-row items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          className="group bg-gradient-to-r from-[#2596be] to-[#4ade80] hover:from-[#4ade80] hover:to-[#22c55e] text-white px-8 py-6 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] text-lg font-bold transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.5)] hover:scale-105 border-b-4 border-[#16a34a] active:border-b-0 active:translate-y-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="mr-2 w-6 h-6 group-hover:rotate-12 transition-transform"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          {ctaLabel}
                        </Button>
                      </a>

                      <a
                        href="#home-services-heading"
                        className="group inline-flex items-center gap-2 text-sm text-[#dff6ff] hover:text-white transition-colors"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span className="border-b border-transparent group-hover:border-white transition-all">
                          Découvrir nos services à domicile
                        </span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge with animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-full px-6 py-3 shadow-xl"
              >
                <motion.div
                  className="flex items-center gap-3"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#2596be]" />
                  <span className="text-sm text-white font-semibold tracking-wide">
                    Nettoyage vapeur • 100% Écologique • Ultra Rapide
                  </span>
                  <Sparkles className="w-4 h-4 text-[#2596be]" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced wave SVG */}
      <div className="relative -mt-2">
        <motion.svg
          viewBox="0 0 1440 120"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.path
            d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,80 C360,100 1080,20 1440,80 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </header>
  );
}