import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logoDark from "@/assets/logo-dark-bg.svg";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    { label: "Pure Palm Oil", href: "#products" },
    { label: "Palm Kernel Oil", href: "#products" },
    { label: "Dried Fish", href: "#products" },
    { label: "Powdered Grains", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1Wwt6nMvgS/", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/tgde.ff", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/tgde.ff", label: "Twitter" },
    { icon: Linkedin, href: "https://www.tiktok.com/@tgde.ff", label: "TikTok" },
  ];

  return (
    <footer className="bg-foreground text-background pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logoDark} alt="TGDE Foods & Farms" className="h-12 sm:h-16 w-auto mb-3 sm:mb-4" />
            <p className="text-background/70 text-sm sm:text-base mb-4 sm:mb-6">
              Pure from nature, pure for you. Nigeria's trusted source of authentic, 
              unadulterated food products.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-background/70 text-sm sm:text-base mb-3 sm:mb-4">
              Subscribe for updates on new products and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-background/60 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} TGDE Foods & Farms LTD. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
