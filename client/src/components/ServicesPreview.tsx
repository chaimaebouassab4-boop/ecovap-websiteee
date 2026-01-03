import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Check, ArrowRight, Sparkles, Zap } from "lucide-react";

const serviceCategories = [
  {
    icon: Home,
    title: "Services à Domicile",
    description: "Nettoyage, désinfection et traitement anti-nuisibles pour votre maison",
    gradient: "from-[#005b96] to-[#2596be]",
    bgPattern: "radial-gradient(circle at 20% 80%, #2596be 0%, transparent 55%)",
    services: [
      "Nettoyage de canapés à la vapeur sèche (désinfection, anti-acariens, séchage rapide)",
      "Nettoyage et désinfection des matelas (bactéries, odeurs, acariens)",
      "Nettoyage en profondeur des tapis et moquettes",
      "Nettoyage intérieur des sièges de voiture (tissu et cuir)",
      "Traitement anti-acariens, anti-bactéries et anti-virus",
      "Nettoyage professionnel des vitres et surfaces vitrées",
    ],
    target: "/services#home-services-heading",
  },
  {
    icon: Building2,
    title: "Services Spéciaux Hôtels & Restaurants",
    description: "Prestations adaptées au secteur CHR",
    gradient: "from-[#03396c] to-[#005b96]",
    bgPattern: "radial-gradient(circle at 80% 20%, #005b96 0%, transparent 55%)",
    services: [
      "Nettoyage et désinfection de canapés, fauteuils et banquettes",
      "Nettoyage de tapis, moquettes et chaises",
      "Nettoyage des fenêtres, baies vitrées et façades vitrées",
      "Nettoyage des chambres et espaces communs",
      "Désinfection vapeur des cuisines, salles de réception et sanitaires",
      "Interventions rapides avec séchage immédiat",
      "Service fiable, discret et conforme aux standards d'hygiène",
    ],
    target: "/services#business-services-heading",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#6497b1]/30 bg-white/60 px-4 py-2 text-sm font-semibold text-[#03396c] backdrop-blur-sm">
      {children}
    </span>
  );
}

function ServiceCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[number];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <Card className="relative overflow-hidden border border-[#6497b1]/20 bg-white/80 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
      {/* fond léger (pattern) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: category.bgPattern }}
        aria-hidden="true"
      />

      <CardHeader className="relative z-10">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} shadow-md`}
            aria-hidden="true"
          >
            <Icon className="h-7 w-7 text-white" />
          </div>

          <div className="flex-1">
            <CardTitle className="text-2xl font-bold text-[#011f4b]">
              {category.title}
            </CardTitle>
            <p className="mt-1 text-sm font-medium text-[#6497b1]">{category.description}</p>

            {/* indicateurs simples (statique) */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2596be]/10 px-3 py-1 text-xs font-semibold text-[#03396c]">
                <Sparkles className="h-3 w-3" />
                Écologique
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#005b96]/10 px-3 py-1 text-xs font-semibold text-[#03396c]">
                <Zap className="h-3 w-3" />
                Rapide
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <ul className="space-y-3 pb-6">
          {category.services.map((service, serviceIndex) => (
            <li key={serviceIndex} className="flex gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#2596be]/15">
                <Check className="h-3.5 w-3.5 text-[#005b96]" />
              </span>
              <span className="text-sm text-slate-700">{service}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">
            {index === 0 ? "Particuliers" : "Professionnels"} • Devis sur demande
          </p>

          <Link href={category.target}>
            <Button className="bg-[#005b96] hover:bg-[#03396c]">
              Découvrir tous les services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* fond doux (pas d’animation) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(37,150,190,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(0,91,150,0.10), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#011f4b]">
            Nos Services
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Nettoyage vapeur sèche : une solution efficace, sans produits chimiques, pour particuliers et professionnels.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge>Vapeur Sèche</Badge>
            <Badge>100% Écologique</Badge>
            <Badge>Certifié AFNOR</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
