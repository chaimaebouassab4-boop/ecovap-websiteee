import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
  Shield,
  Store,
  Star,
  LayoutGrid,
  
} from "lucide-react";

const homeServices = [
  {
    icon: Home,
    title: "Nettoyage Résidentiel à Tanger",
    description:
      "Nettoyage vapeur des maisons, villas et appartements à Tanger pour un intérieur sain et désinfecté",
    image: "/services/residential-cleaning.jpeg",
    features: [
      "Nettoyage en profondeur de toutes les surfaces",
      "Désinfection vapeur des zones sensibles",
      "Traitement des sols et moquettes",
      "Nettoyage des vitres et miroirs",
    ],
  },

  {
    icon: BedDouble,
    title: "Nettoyage de Matelas & Literie à Tanger",
    description:
      "Désinfection vapeur des matelas et literies pour éliminer acariens et allergènes",
    image: "/services/mattress-cleaning.jpg",
    features: [
      "Élimination des acariens",
      "Neutralisation des allergènes",
      "Suppression des mauvaises odeurs",
      "Séchage rapide (environ 40 minutes)",
    ],
  },

  {
    icon: Building2,
    title: "Nettoyage Complet de Maison à Tanger",
    description:
      "Service de nettoyage en profondeur à Tanger avec une équipe professionnelle qualifiée",
    image: "/services/menage 4.jpg",
    features: [
      "Équipe professionnelle expérimentée",
      "Cuisine, salles de bain, vitres et sols",
      "Meubles, électroménagers et terrasses",
      "Idéal après déménagement ou rénovation",
    ],
  },

  {
    icon: Sofa,
    title: "Nettoyage de Canapés & Textiles à Tanger",
    description:
      "Nettoyage vapeur des canapés, fauteuils et textiles pour un résultat propre et sans odeurs",
    image: "/services/sofa-cleaning.jpg",
    features: [
      "Nettoyage vapeur sans mouiller",
      "Élimination des taches",
      "Désodorisation complète",
      "Traitement anti-acariens naturel",
    ],
  },

  {
    icon: Car,
    title: "Nettoyage Intérieur de Véhicules à Tanger",
    description:
      "Nettoyage vapeur et désinfection de l’intérieur des voitures à Tanger",
    image: "/services/car-interior-cleaning.png",
    features: [
      "Nettoyage des sièges et moquettes",
      "Tableau de bord et plastiques",
      "Climatisation et aération",
      "Élimination des mauvaises odeurs",
    ],
  },

  {
    icon: Bug,
    title: "Désinsectisation Écologique à Tanger",
    description:
      "Traitement anti-parasites à Tanger contre cafards, punaises de lit et insectes",
    image: "/services/pest-control.jpeg",
    features: [
      "Punaises de lit",
      "Cafards et blattes",
      "Puces et tiques",
      "Méthode écologique et efficace",
    ],
  },

  {
    icon: Shield,
    title: "Traitement Anti-Acariens à Tanger",
    description:
      "Solution naturelle contre les acariens pour améliorer la qualité de l’air intérieur",
    image: "/services/action.jpg",
    features: [
      "Élimination des acariens",
      "Traitement préventif durable",
      "Idéal pour les personnes allergiques",
      "Résultats visibles et durables",
    ],
  },

  {
    icon: Sparkles,
    title: "Nettoyage Professionnel des Vitres à Tanger",
    description:
      "Nettoyage des vitres, fenêtres et surfaces vitrées pour un rendu impeccable",
    image: "/services/vitre1.jpg",
    features: [
      "Vitres, fenêtres et baies vitrées",
      "Miroirs et surfaces réfléchissantes",
      "Résultat brillant sans traces",
      "Produits et méthodes professionnelles",
    ],
  },
];


const businessServices = [
  {
    icon: Building2,
    title: "Nettoyage de Bureaux & Showrooms à Tanger",
    description:
      "Nettoyage professionnel des espaces de travail pour un environnement sain",
    image: "/services/office-cleaning.png",
    features: [
      "Postes de travail et écrans",
      "Salles de réunion",
      "Espaces d'accueil",
      "Mobilier de bureau",
    ],
  },

  {
    icon: Star,
    title: "Services Spéciaux pour Hôtels à Tanger",
    description:
      "Solutions complètes de nettoyage vapeur pour hôtels et établissements touristiques",
    image: "/services/hoeeeeeeeee.png",
    features: [
      "Nettoyage de tapis, moquettes et chaises",
      "Chambres et espaces communs",
      "Désinfection vapeur cuisines et sanitaires",
      "Interventions rapides avec séchage immédiat",
      "Service discret conforme aux normes d’hygiène",
    ],
    category: "entreprise",
  },

  {
    icon: Store,
    title: "Nettoyage de Vitrines Commerciales à Tanger",
    description:
      "Nettoyage professionnel des vitrines et surfaces vitrées de magasins",
    image: "/services/vitre2.jpg",
    features: [
      "Magasins de meubles et automobiles",
      "Vitrines grand format",
      "Showrooms et espaces commerciaux",
      "Résultat brillant sans traces",
    ],
  },

  {
    icon: Utensils,
    title: "Nettoyage de Restaurants & Cafés à Tanger",
    description:
      "Nettoyage et désinfection vapeur des espaces de restauration",
    image: "/services/armchairs.png",
    features: [
      "Chaises et banquettes",
      "Canapés et fauteuils",
      "Désinfection des surfaces",
      "Salles de restauration",
    ],
  },

  {
    icon: Sofa,
    title: "Nettoyage des Espaces d’Accueil à Tanger",
    description:
      "Nettoyage vapeur des canapés et fauteuils dans les halls et réceptions",
    image: "/services/IMG-20251208-WA0051.jpg",
    features: [
      "Canapés et fauteuils",
      "Halls d'accueil",
      "Salles d'attente",
      "Mobilier de réception",
    ],
  },

  {
    icon: Bug,
    title: "Désinfection & Désinsectisation à Tanger",
    description:
      "Protection complète contre insectes, bactéries et moisissures",
    image: "/services/restaurant-cleaning.png",
    features: [
      "Acariens et punaises de lit",
      "Cafards et fourmis",
      "Insectes intérieurs et extérieurs",
      "Bactéries et moisissures",
    ],
  },
];


interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

function ServiceCard({ icon: Icon, title, description, image, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover-elevate transition-all duration-300 h-full overflow-hidden group" data-testid={`card-service-${index}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2596be] to-[#005b96] shrink-0 shadow-md">
              <Icon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-lg text-[#011f4b]">{title}</CardTitle>
              <p className="text-sm text-[#6497b1]">{description}</p>
            </div>
          </div>
        </CardHeader>
        
        {/* Section Image */}
        <div className="relative h-48 mx-4 mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={`${title} - Service de nettoyage professionnel`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011f4b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm font-semibold">Service professionnel</p>
          </div>
        </div>
        
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2 group/item">
                <Check className="w-4 h-4 text-[#2596be] shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" aria-hidden="true" />
                <span className="text-sm text-[#03396c] group-hover/item:text-[#011f4b] transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ServicesContent() {
  const [, location] = useLocation();

  // Scroll automatique si l'URL contient un hash (ex: /services#business-services-heading)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Petit délai pour laisser l'animation / rendu se produire, puis scroll avec offset
    setTimeout(() => {
      const headerOffset = 80; // ajuster si vous avez un header fixe plus grand/petit
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }, 120);
  }, [location]);

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* Section Services à Domicile */}
      <section aria-labelledby="home-services-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2596be]/20 to-[#005b96]/20">
              <Home className="w-6 h-6 text-[#005b96]" aria-hidden="true" />
            </div>
            <h2 id="home-services-heading" className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
              Services à Domicile
            </h2>
          </div>
          <p className="text-[#6497b1] max-w-2xl mx-auto text-lg">
            Des solutions de nettoyage et désinfection adaptées à votre maison. 
            Profitez d'un intérieur sain et hygiénique pour toute la famille.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Section Services pour Entreprises */}
      <section aria-labelledby="business-services-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2596be]/20 to-[#005b96]/20">
              <Building2 className="w-6 h-6 text-[#005b96]" aria-hidden="true" />
            </div>
            <h2 id="business-services-heading" className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
              Services pour Entreprises
            </h2>
          </div>
          <p className="text-[#6497b1] max-w-2xl mx-auto text-lg">
            Des solutions professionnelles pour tous types d'entreprises. 
            Garantissez un environnement de travail sain pour vos employés et clients.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index + homeServices.length} />
          ))}
        </div>
      </section>

      {/* Section CTA améliorée */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-[#011f4b] to-[#03396c] rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2596be]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#005b96]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <Sparkles className="w-12 h-12 text-[#2596be] mx-auto mb-6" />
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Besoin d'un Devis Personnalisé ?
          </h2>
          <p className="text-[#6497b1] max-w-2xl mx-auto mb-8 text-lg">
           Contactez EcoVap Tanger pour obtenir un devis gratuit et personnalisé selon vos besoins en nettoyage et désinfection à la vapeur.
Notre équipe vous répond rapidement et vous accompagne pour une solution efficace, écologique et adaptée à votre situation..
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="group bg-[#2596be] hover:bg-[#005b96] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
              data-testid="button-get-quote"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-[#6497b1] mt-6 text-sm">
            ✓ Réponse sous 24h • ✓ Sans engagement • ✓ Devis personnalisé
          </p>
        </div>
      </motion.section>
    </div>
  );
}