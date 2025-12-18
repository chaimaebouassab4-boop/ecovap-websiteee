import { Link } from "wouter";
import { Droplets, Phone, MapPin, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp,SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: SiFacebook, href: "https://web.facebook.com/profile.php?id=61564083751443&_rdc=1&_rdr#", label: "Facebook" },
  { icon: SiInstagram, href: "https://www.instagram.com/ecovap.tanger/", label: "Instagram" },
  { icon: SiWhatsapp, href: "https://wa.me/212657387660", label: "WhatsApp" },
  { icon: SiYoutube, href: "https://www.youtube.com/@EcoVapTanger/featured", label: "YouTube" },

];

export default function Footer() {
  return (
    <footer className="bg-[#082025] text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                  <Droplets className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-white">EcoVap</span>
              </Link>
              <p className="text-sm text-gray-400 mb-4">
                Société de Nettoyage, Désinfection et Désinsectisation à Tanger. 
                Nettoyage à la vapeur sèche sans produits chimiques.
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                  <a href="tel:+212600000000" className="text-sm text-gray-400 hover:text-primary transition-colors" data-testid="link-phone">
                    +212 657 38 76 60
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                  <a href="mailto:contact@ecovap.ma" className="text-sm text-gray-400 hover:text-primary transition-colors" data-testid="link-email">
                  Eco.vap.tng.info@gmail.com

                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-400">Tanger, Maroc</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Horaires</h3>
         <ul className="space-y-2 text-sm text-gray-400">
  <li className="flex justify-between gap-2">
    <span>Lundi – Vendredi :</span>
    <span>9h00 – 22h00</span>
  </li>
  <li className="flex justify-between gap-2 ">
    <span>Week-end :</span>
    <span>Samedi & Dimanche </span>
        <span>8h00 – 22h00</span>

  </li>
</ul>

            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} EcoVap. Tous droits réservés.</p>
         <div className="flex items-center gap-4">
  <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors" data-testid="link-privacy">
    Politique de confidentialité
  </Link>
  <Link href="/mentions-legales" className="hover:text-primary transition-colors" data-testid="link-terms">
    Mentions légales
  </Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
