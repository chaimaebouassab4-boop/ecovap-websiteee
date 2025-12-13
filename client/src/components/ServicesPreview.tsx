import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Check, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    icon: Home,
title: "Services à Domicile",
description: "Nettoyage, désinfection et traitement anti-nuisibles pour votre maison",
services: [
  "Nettoyage de canapés à la vapeur sèche (désinfection, anti-acariens, séchage rapide)",
  "Nettoyage et désinfection des matelas (bactéries, odeurs, acariens)",
  "Nettoyage en profondeur des tapis et moquettes",
  "Nettoyage intérieur des sièges de voiture (tissu et cuir)",
  "Traitement anti-acariens, anti-bactéries et anti-virus",
  "Nettoyage professionnel des vitres et surfaces vitrées",
],

  },
  {
    icon: Building2,
   title: "Services Spéciaux Hôtels & Restaurants",
description: "Prestations adaptées au secteur CHR",
services: [
  "Nettoyage et désinfection de canapés, fauteuils et banquettes",
  "Nettoyage de tapis, moquettes et chaises",
    "Nettoyage des fenêtres, baies vitrées et façades vitrées",
  "Nettoyage des chambres et espaces communs",
  "Désinfection vapeur des cuisines, salles de réception et sanitaires",
  "Interventions rapides avec séchage immédiat",
  "Service fiable, discret et conforme aux standards d’hygiène",
],

  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions de nettoyage et désinfection adaptées à vos besoins, 
            que vous soyez particulier ou professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-category-${index}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <Button variant="outline" className="w-full group" data-testid={`button-view-services-${index}`}>
                    Voir tous les services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
