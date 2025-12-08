import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
       <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
  <img 
    src="/EcoVapLoGo.png" 
    alt="EcoVap Logo" 
    className="w-64 h-64 object-contain"

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
