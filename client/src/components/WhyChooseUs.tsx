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
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden" aria-labelledby="why-heading">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />

    

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section texte */}
          <div className="relative z-20">
            <h2 
              id="why-heading" 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              La Puissance de la Vapeur Sèche
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Notre technologie de nettoyage à la vapeur sèche offre une solution 
              révolutionnaire pour une hygiène parfaite. Sans eau stagnante, sans 
              produits chimiques, juste de la vapeur pure à haute température.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <Card 
                    className="border-0 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg" 
                    data-testid={`card-benefit-${index}`}
                  >
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
                </div>
              ))}
            </div>
          </div>

          {/* Section image */}
          <div className="relative z-20">
            {/* Cercles décoratifs */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/10 rounded-full" />

            {/* Particules décoratives */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}

            <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
              <img
                src={steamImage}
                alt="Technologie de nettoyage à vapeur sèche EcoVap"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>

            {/* Badge "100% Bactéries éliminées" */}
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