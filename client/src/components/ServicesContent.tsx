import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Home,
  Building2,
  Sofa,
  BedDouble,
  Car,
  Utensils,
  Factory,
  Warehouse,
  HardHat,
  Sparkles,
  Bug,
  Wind,
  ArrowRight,
  Check,
} from "lucide-react";

const homeServices = [
  {
    icon: Home,
    title: "Nettoyage Résidentiel",
    description: "Maisons, villas et appartements",
    features: [
      "Nettoyage complet de toutes les surfaces",
      "Désinfection des zones à risque",
      "Traitement des sols et moquettes",
      "Nettoyage des vitres et miroirs",
    ],
  },
  {
    icon: BedDouble,
    title: "Matelas & Literie",
    description: "Désinfection et traitement anti-acariens",
    features: [
      "Élimination des acariens à 100%",
      "Neutralisation des allergènes",
      "Suppression des mauvaises odeurs",
      "Séchage rapide (40 minutes)",
    ],
  },
  {
    icon: Sofa,
    title: "Canapés & Textiles",
    description: "Nettoyage en profondeur des tissus",
    features: [
      "Nettoyage sans mouiller",
      "Élimination des taches",
      "Désodorisation complète",
      "Traitement anti-acariens",
    ],
  },
  {
    icon: Car,
    title: "Intérieur Véhicules",
    description: "Désinfection automobile",
    features: [
      "Sièges et moquettes",
      "Tableau de bord et plastiques",
      "Climatisation et aération",
      "Élimination des odeurs",
    ],
  },
  {
    icon: Bug,
    title: "Désinsectisation",
    description: "Traitement anti-parasites",
    features: [
      "Punaises de lit",
      "Cafards et blattes",
      "Puces et tiques",
      "Méthode écologique",
    ],
  },
  {
    icon: Wind,
    title: "Traitement Anti-Acariens",
    description: "Solution contre les allergies",
    features: [
      "Élimination totale des acariens",
      "Traitement préventif",
      "Idéal pour les allergiques",
      "Résultat durable",
    ],
  },
];

const businessServices = [
  {
    icon: Building2,
    title: "Bureaux & Showrooms",
    description: "Environnement professionnel sain",
    features: [
      "Postes de travail et écrans",
      "Salles de réunion",
      "Espaces d'accueil",
      "Mobilier de bureau",
    ],
  },
  {
    icon: Utensils,
    title: "Restaurants & Cuisines",
    description: "Conformité HACCP",
    features: [
      "Désinfection des surfaces alimentaires",
      "Équipements de cuisine",
      "Salles de restauration",
      "Certification HACCP",
    ],
  },
  {
    icon: Factory,
    title: "Usines & Ateliers",
    description: "Nettoyage industriel",
    features: [
      "Machines et équipements",
      "Sols industriels",
      "Zones de production",
      "Vestiaires et sanitaires",
    ],
  },
  {
    icon: Warehouse,
    title: "Dépôts & Entrepôts",
    description: "Grands espaces de stockage",
    features: [
      "Rayonnages et étagères",
      "Sols de grande surface",
      "Zones de chargement",
      "Traitement anti-nuisibles",
    ],
  },
  {
    icon: HardHat,
    title: "Chantiers",
    description: "Nettoyage fin de chantier",
    features: [
      "Nettoyage post-travaux",
      "Élimination des poussières",
      "Préparation à la livraison",
      "Désinfection complète",
    ],
  },
  {
    icon: Sparkles,
    title: "Milieux Médicaux",
    description: "Normes AFNOR respectées",
    features: [
      "Cabinets médicaux",
      "Cliniques et laboratoires",
      "Salles d'attente",
      "Désinfection niveau hospitalier",
    ],
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  index: number;
}

function ServiceCard({ icon: Icon, title, description, features, index }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`card-service-${index}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ServicesContent() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <section aria-labelledby="home-services-heading">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <Home className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h2 id="home-services-heading" className="text-2xl sm:text-3xl font-bold text-foreground">
              Services à Domicile
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Des solutions de nettoyage et désinfection adaptées à votre maison. 
            Profitez d'un intérieur sain et hygiénique pour toute la famille.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="business-services-heading">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h2 id="business-services-heading" className="text-2xl sm:text-3xl font-bold text-foreground">
              Services pour Entreprises
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Des solutions professionnelles pour tous types d'entreprises. 
            Garantissez un environnement de travail sain pour vos employés et clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index + homeServices.length} />
          ))}
        </div>
      </section>

      <section className="bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Besoin d'un Devis Personnalisé ?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Contactez-nous pour obtenir un devis gratuit adapté à vos besoins spécifiques. 
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <Link href="/contact">
          <Button size="lg" className="group" data-testid="button-get-quote">
            Demander un devis
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
