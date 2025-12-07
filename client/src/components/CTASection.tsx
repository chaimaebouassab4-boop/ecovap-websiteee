import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Prêt pour un Environnement Plus Sain ?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Contactez BioNVap dès aujourd'hui pour un devis gratuit. 
          Notre équipe est à votre écoute pour répondre à tous vos besoins de nettoyage et désinfection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="group" data-testid="button-cta-contact">
              Contactez-nous
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="tel:+212600000000">
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground" data-testid="button-cta-phone">
              <Phone className="w-4 h-4 mr-2" />
              +212 6 00 00 00 00
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
