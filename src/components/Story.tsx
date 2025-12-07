import { Heart, Users, Sparkles } from "lucide-react";
import palmFruits from "@/assets/palm-fruits.png";

const Story = () => {
  return (
    <section id="story" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-2xl" />
            <img
              src={palmFruits}
              alt="Fresh palm fruits"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg mx-auto"
            />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Restoring Trust in
              <span className="text-primary"> Nigerian Food</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                TGDE Foods & Farms was born from a simple but powerful mission: to bring 
                <strong className="text-foreground"> pure, healthy, and truly Nigerian food products</strong> back 
                to the table — without compromise.
              </p>
              <p>
                From the sun-drenched palm groves of Southern Nigeria to your kitchen, 
                every bottle carries the care of local farmers, the wisdom of traditional 
                processing, and our unwavering commitment to your family's health.
              </p>
              <p>
                In a market flooded with adulterated oils and poorly processed foods, 
                we chose a different path. <strong className="text-foreground">We chose purity.</strong>
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10">
              <div className="text-center p-2 sm:p-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Purity</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">No additives, no shortcuts</p>
              </div>
              <div className="text-center p-2 sm:p-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Community</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Empowering local farmers</p>
              </div>
              <div className="text-center p-2 sm:p-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Heritage</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Celebrating tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
