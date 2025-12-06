import { 
  Droplets, 
  FlaskConical, 
  Truck, 
  Award, 
  Users, 
  Package 
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "100% Pure & Unrefined",
    description: "No additives, no bleaching, no preservatives. Just pure palm oil the way nature intended.",
  },
  {
    icon: FlaskConical,
    title: "Lab-Tested Quality",
    description: "Every batch is tested for purity and safety. Safe for cooking, infants, and meets export-grade standards.",
  },
  {
    icon: Truck,
    title: "Farm-to-Table Fresh",
    description: "Direct sourcing from trusted Nigerian farms ensures freshness and supports local communities.",
  },
  {
    icon: Award,
    title: "Authentic Nigerian Taste",
    description: "Rich, aromatic, and full of the nutrients that make Nigerian cuisine unforgettable.",
  },
  {
    icon: Package,
    title: "Modern Packaging",
    description: "Clean, attractive, and export-ready. Our bottles are designed for convenience and preservation.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We empower local farmers and rural communities, creating a sustainable supply chain.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The TGDE <span className="text-primary">Promise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just sell palm oil. We deliver trust, health, and a connection 
            to the rich agricultural heritage of Nigeria.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Promise */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Promise to You
          </h3>
          <p className="text-primary-foreground/90 text-xl md:text-2xl font-medium">
            "Purity you can trust — every bottle, every time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
