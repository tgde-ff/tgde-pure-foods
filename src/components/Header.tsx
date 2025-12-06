import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tgde-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="TGDE Foods & Farms" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="default">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" className="mt-2 w-full">
              Order Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
