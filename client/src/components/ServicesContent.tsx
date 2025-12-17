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
  Shield,
  Store,
  Star,
  LayoutGrid,
  
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
  icon: Building2, // ou Sparkles, Building2
  title: "Nettoyage Complet de Maison",
  description: "Service complet de nettoyage en profondeur avec une équipe de femmes de ménage professionnelles",
  image: "/services/menage 4.jpg", // Ajustez selon votre image
  features: [
    "Équipe professionnelle qualifiée",
    "Cuisine, salles de bain, vitres, sols",
    "Meubles, électroménagers, terrasses",
    "Idéal pour déménagements et rénovations",
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
    image: "/services/car-interior-cleaning.png",
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
    icon: Shield,
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

  {
    icon: Sparkles,
    title: "Nettoyage des Vitres",
    description: "Nettoyage professionnel des surfaces vitrées",
    image: "/services/vitre1.jpg",
    features: [
     "Vitres, fenêtres, baies vitrées",
    "Miroirs et surfaces réfléchissantes",
    "Résultat brillant sans traces",
    "Produits professionnels",
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
  icon: Star, // ou Building, Star
  title: "Services Spéciaux pour Hôtels",
  description: "Solution complète pour l'hôtellerie",
  image: "/services/hoeeeeeeeee.png",
  features: [
    "Nettoyage de tapis, moquettes et chaises",
    "Chambres et espaces communs",
    "Désinfection vapeur des cuisines et sanitaires",
    "Interventions rapides avec séchage immédiat",
    "Service discret conforme aux standards d'hygiène",
  ],
  category: "entreprise"
},

{
  icon: Store, 
  title: "Nettoyage de Vitrines Commerciales",
  description: "Nettoyage pour grands magasins",
  image: "/services/vitre2.jpg",
  features: [
    "Magasins de meubles et automobiles",
    "Vitrines et baies vitrées grand format",
    "Équipements et showrooms",
    "Résultat brillant sans traces",
  ],
},

  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    description: "Nettoyage et désinfection professionnelle",
    image: "/services/armchairs.png",
    features: [
      "Chaises et banquettes",
      "Canapés et fauteuils",
      "Désinfection des surfaces",
      "Salles de restauration",
    ],
  },
 {
    icon: Sofa, // ou Armchair si disponible dans lucide-react
    title: "Espaces d'Accueil",
    description: "Nettoyage de canapés et réception",
    image: "/services/IMG-20251208-WA0051.jpg",
    features: [
      "Canapés et fauteuils",
      "Halls d'accueil",
      "Salles d'attente",
      "Mobilier de réception",
    ],
  },
  {
    icon: Bug, // ou Shield pour désinsectisation
    title: "Désinfection & Désinsectisation",
    description: "Protection complète intérieur/extérieur",
    image: "/services/restaurant-cleaning.png",
    features: [
      "Acariens et punaises de lit",
      "Cafards et fourmis",
      "Insectes d'intérieur et extérieur",
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