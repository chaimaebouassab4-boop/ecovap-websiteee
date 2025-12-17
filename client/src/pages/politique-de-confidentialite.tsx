import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | EcoVap</title>
        <meta
          name="description"
          content="Politique de confidentialité d'EcoVap - Nettoyage et désinfection à la vapeur sèche à Tanger"
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Politique de Confidentialité
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EcoVap, spécialisée dans le nettoyage et la désinfection à la vapeur sèche à Tanger, 
                s'engage à protéger la vie privée de ses clients et visiteurs. Cette politique de 
                confidentialité explique comment nous collectons, utilisons et protégeons vos 
                informations personnelles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Données Collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous pouvons collecter les informations suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (pour les interventions)</li>
                <li>Informations relatives à vos demandes de service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Utilisation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Répondre à vos demandes de devis et d'information</li>
                <li>Planifier et réaliser nos interventions de nettoyage</li>
                <li>Vous contacter concernant nos services</li>
                <li>Améliorer notre qualité de service</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Protection des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos 
                informations personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction. Vos données sont stockées de manière sécurisée 
                et ne sont accessibles qu'aux personnes autorisées.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Partage des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EcoVap ne vend, ne loue ni ne partage vos informations personnelles avec des 
                tiers à des fins commerciales. Nous pouvons partager vos données uniquement 
                dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Pour protéger nos droits légaux</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site web peut utiliser des cookies pour améliorer votre expérience de 
                navigation. Les cookies sont de petits fichiers stockés sur votre appareil. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela 
                pourrait affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Vos Droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la législation en vigueur, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Conservation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
                aux finalités pour lesquelles elles ont été collectées, ou conformément aux 
                exigences légales applicables.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour 
                exercer vos droits, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>EcoVap</strong><br />
                  Tanger, Maroc<br />
                  Téléphone : +212 657 387 660<br />
                  WhatsApp : +212 657 387 660
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EcoVap se réserve le droit de modifier cette politique de confidentialité à 
                tout moment. Les modifications prendront effet dès leur publication sur cette 
                page. Nous vous encourageons à consulter régulièrement cette page pour rester 
                informé de nos pratiques en matière de confidentialité.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
