import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";
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
    <section className="py-16 lg:py-24 bg-muted/30" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              La Puissance de la Vapeur Sèche
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre technologie de nettoyage à la vapeur sèche offre une solution 
              révolutionnaire pour une hygiène parfaite. Sans eau stagnante, sans 
              produits chimiques, juste de la vapeur pure à haute température.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 bg-card/50" data-testid={`card-benefit-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
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
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={steamImage}
                alt="Technologie de nettoyage à vapeur sèche EcoVap"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Bactéries éliminées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
