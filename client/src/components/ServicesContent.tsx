import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
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
    image: "/services/residential-cleaning.jpeg", // Ajoutez vos images
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
    image: "/services/mattress-cleaning.jpg",
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
    image: "/services/sofa-cleaning.jpg",
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
    image: "/services/car-interior-cleaning.jpg",
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
    image: "/services/pest-control.jpeg",
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
    image: "/services/action.jpg",
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
    image: "/services/office-cleaning.png",
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
    image: "/services/restaurant-cleaning.png",
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
    image: "/services/industrial-cleaning.png",
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
    image: "/services/warehouse-cleaning.jpg",
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
    image: "/services/construction-cleaning.jpg",
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
    image: "/services/medical-cleaning.png",
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
            Contactez-nous pour obtenir un devis gratuit adapté à vos besoins spécifiques. 
            Notre équipe vous répondra dans les plus brefs délais.
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