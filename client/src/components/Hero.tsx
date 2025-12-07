import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Leaf } from "lucide-react";
import heroImage from "@assets/generated_images/office_steam_cleaning_scene.png";

export default function Hero() {
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
            BioNVap, votre partenaire de confiance pour un nettoyage professionnel 
            et une désinfection innovante à Tanger. Élimine 100% des bactéries, 
            acariens et parasites, y compris le COVID-19.
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
          </div>
        </div>
      </div>
    </section>
  );
}
