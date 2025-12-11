import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  // Fonction pour gérer le clic sur le bouton transformations
  const handleTransformationsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Si on est déjà sur la page services
    if (location === '/services') {
      // Scroll direct vers la section transformations
      const element = document.getElementById('transformations');
      if (element) {
        const yOffset = -80; // Compensation pour le header fixe
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // Naviguer d'abord vers /services
      setLocation('/services');
      // Puis attendre que la page se charge avant de scroller
      setTimeout(() => {
        const element = document.getElementById('transformations');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Fonction pour gérer le clic sur le bouton témoignages
  const handleTestimonialsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Si on est sur la page d'accueil
    if (location === '/') {
      // Scroll direct vers la section témoignages
      const element = document.getElementById('temoignages');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // Naviguer vers l'accueil puis scroll
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById('temoignages');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Gérer le scroll si on arrive sur la page avec #transformations dans l'URL
  useEffect(() => {
    if (location === '/services' && window.location.hash === '#transformations') {
      setTimeout(() => {
        const element = document.getElementById('transformations');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else if (location === '/' && window.location.hash === '#temoignages') {
      setTimeout(() => {
        const element = document.getElementById('temoignages');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img 
              src="/EcoVapLoGo.png" 
              alt="EcoVap Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground">EcoVap</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a 
              href="/#temoignages"
              onClick={handleTestimonialsClick}
            >
              <Button 
                variant="outline"
                className="bg-gradient-to-r from-blue-500 to-green-600 text-white border-none hover:from-blue-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2"
                data-testid="button-header-temoignages"
              >
                <MessageCircle className="w-4 h-4" />
                Témoignages
              </Button>
            </a>
            
            <a 
              href="/services#transformations"
              onClick={handleTransformationsClick}
            >
              <Button 
                variant="outline"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-none hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                data-testid="button-header-transformations"
              >
                Voir les Transformations
              </Button>
            </a>
              
            <Link href="/contact">
              <Button data-testid="button-header-contact">
                Contactez-nous
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" aria-label="Navigation mobile">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              <a 
                href="/#temoignages"
                onClick={(e) => {
                  handleTestimonialsClick(e);
                  setIsMenuOpen(false);
                }}
              >
                <Button 
                  className="w-full mt-2 bg-gradient-to-r from-blue-500 to-green-600 text-white hover:from-blue-600 hover:to-green-700 flex items-center gap-2" 
                  data-testid="button-mobile-temoignages"
                >
                  <MessageCircle className="w-4 h-4" />
                  Témoignages
                </Button>
              </a>
              
              <a 
                href="/services#transformations"
                onClick={(e) => {
                  handleTransformationsClick(e);
                  setIsMenuOpen(false);
                }}
              >
                <Button 
                  className="w-full mt-2 bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700" 
                  data-testid="button-mobile-transformations"
                >
                  Voir les Transformations
                </Button>
              </a>
              
              <Link href="/contact">
                <Button className="w-full mt-2" onClick={() => setIsMenuOpen(false)} data-testid="button-mobile-contact">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}