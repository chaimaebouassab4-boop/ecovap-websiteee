import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart, Award, Leaf, Shield, Users, CheckCircle } from "lucide-react";
import steamImage from "@assets/generated_images/steam_cleaning_technology_closeup.png";
import residentialImage from "@assets/generated_images/residential_cleaning_service.png";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Offrir des solutions de nettoyage innovantes et écologiques qui garantissent une hygiène parfaite tout en préservant l'environnement et la santé de nos clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous utilisons la technologie de pointe de la vapeur sèche, une méthode révolutionnaire qui élimine 100% des germes sans produits chimiques.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Notre équipe est dédiée à fournir un service de qualité exceptionnelle, avec professionnalisme et respect de vos espaces.",
  },
];

const certifications = [
  { icon: Award, label: "Conforme AFNOR" },
  { icon: Shield, label: "Certification HACCP" },
  { icon: Leaf, label: "100% Écologique" },
  { icon: CheckCircle, label: "Qualité Garantie" },
];

const stats = [
  { value: "100%", label: "Bactéries éliminées" },
  { value: "0", label: "Produits chimiques" },
  { value: "40min", label: "Séchage textiles" },
  { value: "5+", label: "Années d'expérience" },
];

export default function AboutContent() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" aria-labelledby="mission-heading">
        <div>
          <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Qui Sommes-Nous ?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            EcoVap est une entreprise spécialisée dans le nettoyage, la désinfection 
            et la désinsectisation à Tanger. Nous sommes pionniers dans l'utilisation 
            de la technologie de vapeur sèche au Maroc.
          </p>
          <p className="text-muted-foreground mb-6">
            Notre approche innovante permet d'éliminer efficacement les bactéries, 
            virus, acariens et parasites sans utiliser de produits chimiques nocifs. 
            Cette méthode respectueuse de l'environnement garantit des résultats 
            exceptionnels tout en préservant la santé de nos clients.
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary"
                data-testid={`badge-cert-${index}`}
              >
                <cert.icon className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-medium">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={residentialImage}
              alt="Service de nettoyage résidentiel EcoVap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-heading">
        <div className="text-center mb-12">
          <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos Valeurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les principes qui guident notre travail au quotidien.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" aria-labelledby="tech-heading">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={steamImage}
              alt="Technologie de vapeur sèche EcoVap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            La Technologie Vapeur Sèche
          </h2>
          <p className="text-muted-foreground mb-4">
            La vapeur sèche est une technologie de nettoyage révolutionnaire qui 
            utilise de la vapeur à haute température (180°C) avec un taux d'humidité 
            très faible (moins de 5%).
          </p>
          <p className="text-muted-foreground mb-6">
            Cette méthode permet de :
          </p>
          <ul className="space-y-3">
            {[
              "Éliminer 100% des bactéries et virus",
              "Détruire les acariens et leurs allergènes",
              "Neutraliser les mauvaises odeurs",
              "Nettoyer sans mouiller les surfaces",
              "Préserver l'environnement sans produits chimiques",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-center bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl" aria-labelledby="team-heading">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Users className="w-8 h-8 text-primary" aria-hidden="true" />
        </div>
        <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Une Équipe Professionnelle
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Notre équipe de techniciens qualifiés est formée aux dernières techniques 
          de nettoyage à la vapeur sèche. Nous garantissons un service professionnel, 
          ponctuel et respectueux de vos espaces.
        </p>
      </section>
    </div>
  );
}
