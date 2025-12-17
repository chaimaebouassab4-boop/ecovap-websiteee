import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales | EcoVap</title>
        <meta
          name="description"
          content="Mentions légales d'EcoVap - Nettoyage et désinfection à la vapeur sèche à Tanger"
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
              Mentions Légales
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
                1. Informations sur l'Entreprise
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Raison sociale :</strong> EcoVap<br />
                  <strong>Activité :</strong> Nettoyage et désinfection à la vapeur sèche<br />
                  <strong>Siège social :</strong> Tanger, Maroc<br />
                  <strong>Téléphone :</strong> +212 657 387 660<br />
                  <strong>WhatsApp :</strong> +212 657 387 660
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Directeur de la Publication
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le directeur de la publication du site www.ecovap.ma est le représentant 
                légal de la société EcoVap.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Hébergement du Site
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Hébergeur :</strong> [Nom de l'hébergeur]<br />
                  <strong>Adresse :</strong> [Adresse de l'hébergeur]<br />
                  <strong>Site web :</strong> [URL de l'hébergeur]
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 italic">
                * À compléter avec les informations de votre hébergeur
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Propriété Intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes, 
                icônes, etc.) est la propriété exclusive d'EcoVap ou de ses partenaires et 
                est protégé par les lois relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de 
                tout ou partie des éléments du site, quel que soit le moyen ou le procédé 
                utilisé, est interdite sans l'autorisation écrite préalable d'EcoVap.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Toute exploitation non autorisée du site ou de son contenu sera considérée 
                comme constitutive d'une contrefaçon et poursuivie conformément aux 
                dispositions légales en vigueur.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Limitation de Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EcoVap s'efforce d'assurer l'exactitude et la mise à jour des informations 
                diffusées sur ce site. Cependant, EcoVap ne peut garantir l'exactitude, la 
                précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En conséquence, EcoVap décline toute responsabilité :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Pour toute imprécision, inexactitude ou omission portant sur des 
                    informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers 
                    ayant entraîné une modification des informations mises à disposition 
                    sur le site</li>
                <li>Pour tous dommages, directs ou indirects, quelles qu'en soient les 
                    causes, origines, natures ou conséquences</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Liens Hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site EcoVap peut contenir des liens hypertextes vers d'autres sites. 
                EcoVap n'exerce aucun contrôle sur ces sites et décline toute responsabilité 
                quant à leur contenu ou aux pratiques de confidentialité de ces sites tiers.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                La création de liens hypertextes vers le site EcoVap est soumise à 
                l'autorisation préalable et écrite d'EcoVap.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site EcoVap peut utiliser des cookies pour améliorer l'expérience 
                utilisateur. Pour plus d'informations sur l'utilisation des cookies, 
                veuillez consulter notre{" "}
                <Link href="/politique-de-confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Protection des Données Personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément à la législation en vigueur relative à la protection des données 
                personnelles, vous disposez d'un droit d'accès, de rectification, de 
                suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour plus d'informations sur le traitement de vos données personnelles, 
                veuillez consulter notre{" "}
                <Link href="/politique-de-confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Droit Applicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit marocain. En cas de 
                litige, et après tentative de recherche d'une solution amiable, les tribunaux 
                marocains seront seuls compétents.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Nos Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EcoVap propose des services de nettoyage et désinfection à la vapeur sèche, 
                notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nettoyage de matelas et literie</li>
                <li>Nettoyage de canapés et fauteuils</li>
                <li>Désinfection de locaux professionnels</li>
                <li>Nettoyage automobile intérieur</li>
                <li>Élimination des acariens et allergènes</li>
                <li>Désinfection anti-COVID-19</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nos services sont 100% écologiques, sans produits chimiques, et conformes 
                aux normes AFNOR.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>EcoVap</strong><br />
                  Tanger, Maroc<br />
                  Téléphone : +212 657 387 660<br />
                  WhatsApp : +212 657 387 660
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contactez-nous
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
