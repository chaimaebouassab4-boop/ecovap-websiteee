import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Leaf, Sparkles } from "lucide-react";
import { useState } from "react";

const heroImage = "/attached_assets/generated_images/office_steam_cleaning_scene.png";

export default function Hero() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Créer plusieurs particules
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));
    
    setParticles((prev) => [...prev, ...newParticles]);
    
    // Supprimer les particules après l'animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1000);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center" aria-label="Section héro">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#082025]/90 via-[#082025]/70 to-[#082025]/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
              <Leaf className="w-4 h-4" />
              100% Écologique
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
              <Shield className="w-4 h-4" />
              Conforme AFNOR
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nettoyage & Désinfection à la{" "}
            <span className="text-[#53b2c9]">Vapeur Sèche</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-4">
            Sans Produits Chimiques
          </p>

          <p className="text-base text-gray-300 mb-8 max-w-xl">
           EcoVap Tanger est spécialisée dans le nettoyage à la vapeur sèche à Tanger.
Grâce à notre technologie de vapeur haute température, nous éliminons bactéries,
acariens et mauvaises odeurs sans produits chimiques.
EcoVap intervient auprès des particuliers et des professionnels pour un nettoyage
écologique, efficace et durable à Tanger.

          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button size="lg" data-testid="button-hero-learn-more">
                Lire Plus
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm" data-testid="button-hero-contact">
                Contactez-nous
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                onClick={handleClick}
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-amber-500/90 via-yellow-400/90 to-orange-500/90
                  hover:from-amber-400 hover:via-yellow-300 hover:to-orange-400
                  border-2 border-white/50 hover:border-white/80
                  text-white font-bold
                  backdrop-blur-md
                  shadow-[0_0_25px_rgba(251,191,36,0.6)]
                  hover:shadow-[0_0_40px_rgba(251,191,36,0.9)]
                  transition-all duration-300
                  transform hover:scale-105
                  group
                "
                data-testid="button-hero-devis"
              >
                {/* Effet de brillance au hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Particules animées au clic */}
                {particles.map((particle) => (
                  <span
                    key={particle.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: particle.x,
                      top: particle.y,
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: ['#fff', '#ffd700', '#ff69b4', '#00ffff', '#ff6b6b', '#98fb98', '#ffa500', '#e6e6fa', '#ffff00', '#40e0d0', '#ff1493', '#7fff00'][i],
                          boxShadow: `0 0 8px ${['#fff', '#ffd700', '#ff69b4', '#00ffff', '#ff6b6b', '#98fb98', '#ffa500', '#e6e6fa', '#ffff00', '#40e0d0', '#ff1493', '#7fff00'][i]}`,
                          animation: `sparkle-burst-${i} 0.8s ease-out forwards`,
                        }}
                      />
                    ))}
                  </span>
                ))}
                
                {/* Étoiles flottantes permanentes */}
                <span className="absolute top-1 left-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-90" />
                <span className="absolute top-2 right-5 w-1 h-1 bg-yellow-100 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <span className="absolute bottom-2 left-8 w-1 h-1 bg-orange-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="absolute bottom-1 right-10 w-1.5 h-1.5 bg-amber-100 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
                <span className="absolute top-1/2 left-1 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="absolute top-1 right-16 w-1 h-1 bg-yellow-200 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                
                {/* Texte avec icône */}
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Obtenir votre devis Gratuit
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Styles pour les animations des particules */}
      <style>{`
        @keyframes sparkle-burst-0 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(0, -50px) scale(0); }
        }
        @keyframes sparkle-burst-1 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(25px, -43px) scale(0); }
        }
        @keyframes sparkle-burst-2 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(43px, -25px) scale(0); }
        }
        @keyframes sparkle-burst-3 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(50px, 0) scale(0); }
        }
        @keyframes sparkle-burst-4 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(43px, 25px) scale(0); }
        }
        @keyframes sparkle-burst-5 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(25px, 43px) scale(0); }
        }
        @keyframes sparkle-burst-6 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(0, 50px) scale(0); }
        }
        @keyframes sparkle-burst-7 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(-25px, 43px) scale(0); }
        }
        @keyframes sparkle-burst-8 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(-43px, 25px) scale(0); }
        }
        @keyframes sparkle-burst-9 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(-50px, 0) scale(0); }
        }
        @keyframes sparkle-burst-10 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(-43px, -25px) scale(0); }
        }
        @keyframes sparkle-burst-11 {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(-25px, -43px) scale(0); }
        }
      `}</style>
    </section>
  );
}
