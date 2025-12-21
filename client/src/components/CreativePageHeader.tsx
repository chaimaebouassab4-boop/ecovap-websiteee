import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, ArrowRight } from "lucide-react";

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
  ctaHref = "/services",
  ctaLabel = "Voir nos services",
}: CreativePageHeaderProps) {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#011f4b] to-[#03396c]">
      {/* Background image avec parallax effect */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(1,31,75,0.85) 0%, rgba(3,57,108,0.75) 50%, rgba(1,31,75,0.9) 100%), url('${backgroundImage}')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
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
          ease: "easeInOut"
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
          delay: 1
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
            delay: i * 0.2
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  ease: "easeInOut"
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
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                      }}
                    />
                    <img 
                      src="/attached_assets/EcoVapLoGo.png" 
                      alt="EcoVap" 
                      className="w-16 h-16 object-contain relative z-10" 
                    />
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
                      <Link href={ctaHref}>
                        <Button 
                          className="group bg-gradient-to-r from-[#2596be] to-[#005b96] hover:from-[#005b96] hover:to-[#011f4b] text-white px-8 py-6 rounded-full shadow-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                          {ctaLabel}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

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
                    ease: "easeInOut"
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