import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Heart } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import palmOilPour from "@/assets/palm-oil-pour.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFarm}
          alt="Nigerian palm farm at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-secondary/20">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">100% Pure & Natural</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              Pure From Nature.
              <span className="block text-primary mt-1 sm:mt-2">Pure For You.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              In every drop of our palm oil lives the warmth of Nigerian homes,
              the care of generations, and the promise of purity your family deserves.
              We bring you food the way nature intended — <strong className="text-foreground">unrefined, unadulterated, and unforgettable.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button size="lg" className="group text-base sm:text-lg px-6 sm:px-8">
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8">
                Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-foreground/80">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="text-xs sm:text-sm font-medium">Lab Tested Quality</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-foreground/80">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Family Safe</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-foreground/80">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="text-xs sm:text-sm font-medium">No Additives</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <img
              src={palmOilPour}
              alt="Pure palm oil being poured"
              className="relative z-10 max-w-md w-full drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
