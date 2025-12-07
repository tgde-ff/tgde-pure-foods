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
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoDark} alt="TGDE Foods & Farms" className="h-16 w-auto mb-4" />
            <p className="text-background/70 mb-6">
              Pure from nature, pure for you. Nigeria's trusted source of authentic, 
              unadulterated food products.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-background/70 mb-4">
              Subscribe for updates on new products and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} TGDE Foods & Farms LTD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
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
