import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Sparkles, Droplets } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour ajouter un effet au header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer le clic sur le bouton transformations
  const handleTransformationsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location === '/services') {
      const element = document.getElementById('transformations');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      setLocation('/services');
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
    
    if (location === '/') {
      setTimeout(() => {
        const element = document.getElementById('temoignages');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      setLocation('/');
      const scrollToTestimonials = () => {
        const element = document.getElementById('temoignages');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true;
        }
        return false;
      };
      
      setTimeout(() => {
        if (!scrollToTestimonials()) {
          setTimeout(() => {
            if (!scrollToTestimonials()) {
              setTimeout(scrollToTestimonials, 1000);
            }
          }, 500);
        }
      }, 200);
    }
  };

  // Gérer le scroll si on arrive sur la page avec un hash dans l'URL
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2596be] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img 
                src="/EcoVapLoGo.png" 
                alt="EcoVap Logo" 
                className="w-12 h-12 object-contain relative z-10"
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#011f4b] to-[#005b96] bg-clip-text text-transparent">
                EcoVap
              </span>
              <p className="text-xs text-[#6497b1] -mt-1">Nettoyage Écologique</p>
            </div>
          </Link>

          {/* Navigation principale */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`
                    relative px-4 py-2 font-medium transition-all duration-300
                    ${location === item.href 
                      ? 'text-[#011f4b]' 
                      : 'text-[#03396c] hover:text-[#011f4b]'
                    }
                  `}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#005b96] to-[#2596be] rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Boutons d'action */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Bouton Témoignages */}
            <a 
              href="/#temoignages"
              onClick={handleTestimonialsClick}
            >
              <Button 
                variant="outline"
                className="
                  group relative overflow-hidden border-2 border-[#2596be] bg-transparent
                  hover:bg-[#2596be] text-[#03396c] hover:text-white 
                  transition-all duration-300 flex items-center gap-2 px-5 py-2.5
                  rounded-full font-semibold
                "
                data-testid="button-header-temoignages"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Témoignages</span>
                <div className="absolute inset-0 bg-[#2596be] opacity-0 group-hover:opacity-10 transition-opacity" />
              </Button>
            </a>
            
            {/* Bouton Transformations */}
            <a 
              href="/services#transformations"
              onClick={handleTransformationsClick}
            >
              <Button 
                variant="outline"
                className="
                  group relative overflow-hidden bg-gradient-to-r from-[#005b96] to-[#2596be]
                  hover:from-[#03396c] hover:to-[#005b96] text-white 
                  border-none transition-all duration-300 flex items-center gap-2 px-5 py-2.5
                  rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105
                "
                data-testid="button-header-transformations"
              >
                <Sparkles className="w-4 h-4" />
                <span>Voir les Transformations</span>
              </Button>
            </a>
              
            {/* Bouton Contact principal */}
            <Link href="/contact">
              <Button 
                className="
                  group relative overflow-hidden bg-[#011f4b] hover:bg-[#03396c] 
                  text-white px-6 py-2.5 rounded-full font-bold
                  transition-all duration-300 shadow-lg hover:shadow-xl
                  transform hover:scale-105 flex items-center gap-2
                "
                data-testid="button-header-contact"
              >
                <Droplets className="w-4 h-4" />
                <span>Contactez-nous</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Button>
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#03396c]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[#6497b1]/20" aria-label="Navigation mobile">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-[#03396c] hover:text-[#011f4b] hover:bg-[#6497b1]/10"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              <div className="pt-3 border-t border-[#6497b1]/20 space-y-3">
                <a 
                  href="/#temoignages"
                  onClick={(e) => {
                    handleTestimonialsClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="block"
                >
                  <Button 
                    className="w-full border-2 border-[#2596be] bg-transparent hover:bg-[#2596be] text-[#03396c] hover:text-white flex items-center justify-center gap-2" 
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
                  className="block"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-[#005b96] to-[#2596be] hover:from-[#03396c] hover:to-[#005b96] text-white flex items-center justify-center gap-2" 
                    data-testid="button-mobile-transformations"
                  >
                    <Sparkles className="w-4 h-4" />
                    Voir les Transformations
                  </Button>
                </a>
                
                <Link href="/contact" className="block">
                  <Button 
                    className="w-full bg-[#011f4b] hover:bg-[#03396c] text-white flex items-center justify-center gap-2" 
                    onClick={() => setIsMenuOpen(false)} 
                    data-testid="button-mobile-contact"
                  >
                    <Droplets className="w-4 h-4" />
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}