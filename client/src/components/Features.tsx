import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Clock, Target, Award } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Sans Démontage",
    description: "Nettoyage sur place sans démonter ni déplacer vos équipements. Intervention rapide et efficace.",
  },
  {
    icon: Clock,
    title: "Rapide",
    description: "Espaces utilisables immédiatement après nettoyage. Seulement 40 minutes pour les textiles.",
  },
  {
    icon: Target,
    title: "Efficace",
    description: "Élimine 100% des bactéries, acariens, parasites, même le COVID-19. Résultats garantis.",
  },
  {
    icon: Award,
    title: "Conforme AFNOR",
    description: "Technologie vapeur sèche respectant la norme AFNOR pour milieux médicaux, collectifs et alimentaires (HACCP).",
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pourquoi Choisir BioNVap ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une technologie innovante de nettoyage à la vapeur sèche qui garantit 
            hygiène, sécurité et qualité premium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
