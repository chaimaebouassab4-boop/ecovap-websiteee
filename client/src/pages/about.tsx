"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// ─── Gallery data ────────────────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { src: "/gallery/vitrerie-1.jpg",   tag: "Vitrerie",    caption: "Nettoyage façades — Centre-ville" },
  { src: "/gallery/avant-apres.jpg",  tag: "Avant / Après", caption: "Résultat vapeur haute pression" },
  { src: "/gallery/ecologique.jpg",   tag: "Écologique",  caption: "Zéro produit chimique" },
  { src: "/gallery/commercial.jpg",   tag: "Commercial",  caption: "Devantures de magasins" },
  { src: "/gallery/residentiel.jpg",  tag: "Résidentiel", caption: "Terrasses et allées" },
  { src: "/gallery/industrie.jpg",    tag: "Industrie",   caption: "Maintenance industrielle" },
  { src: "/gallery/toiture.jpg",      tag: "Toiture",     caption: "Démoussage toitures" },
  { src: "/gallery/certif.jpg",       tag: "Certification", caption: "Qualité EcoVap garantie" },
];

// ─── Slide widths alternate for visual rhythm ─────────────────────────────────
const WIDTHS = [300, 380, 260, 340, 300, 360, 280, 350];

// ─── GallerySlider component ─────────────────────────────────────────────────
function GallerySlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const n = GALLERY_IMAGES.length;

  // drag state
  const dragStart = useRef({ x: 0, scroll: 0 });
  const isDragging = useRef(false);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.querySelectorAll<HTMLElement>(".gs-slide"));
    const slide = slides[index];
    if (!slide) return;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const offset =
      slideRect.left - trackRect.left - (trackRect.width - slideRect.width) / 2;
    track.scrollBy({ left: offset, behavior: "smooth" });
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(n - 1, i));
      setCurrent(clamped);
      scrollToSlide(clamped);
    },
    [n, scrollToSlide]
  );

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, scroll: trackRef.current!.scrollLeft };
    trackRef.current!.style.cursor = "grabbing";
  };
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !trackRef.current) return;
      trackRef.current.scrollLeft =
        dragStart.current.scroll - (e.clientX - dragStart.current.x);
    };
    const onUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (trackRef.current) trackRef.current.style.cursor = "grab";
      const dx = e.clientX - dragStart.current.x;
      if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [current, goTo]);

  // Touch swipe
  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  };

  return (
    <div className="select-none">
      {/* label */}
      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-6 px-4 sm:px-8 lg:px-16">
        Nos Réalisations · {n} photos
      </p>

      {/* track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="gs-track flex items-center gap-4 overflow-x-auto scrollbar-hide py-6 px-4 sm:px-8 lg:px-16"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {GALLERY_IMAGES.map((img, i) => {
          const diff = i - current;
          const isActive = diff === 0;
          const isAdjacent = Math.abs(diff) === 1;
          const scale = isActive ? 1 : isAdjacent ? 0.88 : 0.78;
          const opacity = isActive ? 1 : isAdjacent ? 0.6 : 0.35;
          const brightness = isActive ? 1 : isAdjacent ? 0.85 : 0.7;

          return (
            <motion.div
              key={i}
              className="gs-slide flex-none overflow-hidden relative"
              style={{
                width: WIDTHS[i],
                height: 220,
                scrollSnapAlign: "center",
                borderRadius: 16,
                border: "0.5px solid rgba(0,0,0,0.08)",
              }}
              animate={{
                scale,
                opacity,
                filter: `brightness(${brightness})`,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => goTo(i)}
            >
              {/* image */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />

              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                }}
              />

              {/* tag pill */}
              <span
                className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 20,
                  border: "0.5px solid rgba(255,255,255,0.3)",
                }}
              >
                {img.tag}
              </span>

              {/* caption */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-white text-sm font-medium leading-snug">
                      {img.caption}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
          })}
        </div>
      </div>

      {/* nav row */}
      <div className="flex items-center justify-between mt-5 px-4 sm:px-8 lg:px-16">
        {/* dots */}
        <div className="flex items-center gap-1.5">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                background:
                  i === current
                    ? "var(--color-primary, #16a34a)"
                    : "rgba(0,0,0,0.2)",
              }}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>

        {/* counter */}
        <span className="text-sm text-gray-400 font-medium tabular-nums">
          {current + 1} / {n}
        </span>

        {/* arrows */}
        <div className="flex gap-2">
          {[
            { label: "←", dir: -1 },
            { label: "→", dir: 1 },
          ].map(({ label, dir }) => (
            <button
              key={dir}
              onClick={() => goTo(current + dir)}
              disabled={
                (dir === -1 && current === 0) ||
                (dir === 1 && current === n - 1)
              }
              className="w-9 h-9 rounded-full border flex items-center justify-center text-sm
                         transition-all duration-150 disabled:opacity-30
                         hover:bg-gray-100 active:scale-95"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
              aria-label={dir === -1 ? "Précédent" : "Suivant"}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About page ───────────────────────────────────────────────────────────────
export default function About() {
  const backgroundImage = "/testimonials/vitre2.jpg";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1"
      >
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PageHeader
            title="À Propos de EcoVap"
            description="Découvrez notre mission, notre technologie innovante et notre engagement pour un nettoyage écologique."
            backgroundImage={backgroundImage}
          />
        </motion.div>

        {/* About content */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AboutContent />
          </div>
        </motion.section>

        {/* ── Gallery section ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 lg:py-24 overflow-hidden"
        >
          {/* section heading */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Nos Réalisations
            </h2>
            <p className="text-gray-500 max-w-xl">
              Découvrez quelques-uns de nos chantiers — un aperçu concret de la
              qualité et de l'efficacité du nettoyage à la vapeur EcoVap.
            </p>
          </div>

          {/* gallery — full-bleed, no max-width cap */}
          <GallerySlider />
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTASection />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
}
