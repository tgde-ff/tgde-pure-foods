import { Heart, Users, Sparkles } from "lucide-react";
import palmFruits from "@/assets/palm-fruits.png";

const Story = () => {
  return (
    <section id="story" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
            <img
              src={palmFruits}
              alt="Fresh palm fruits"
              className="relative z-10 rounded-2xl shadow-xl max-w-lg mx-auto"
            />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Restoring Trust in
              <span className="text-primary"> Nigerian Food</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Purity</h3>
                <p className="text-sm text-muted-foreground">No additives, no shortcuts</p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Community</h3>
                <p className="text-sm text-muted-foreground">Empowering local farmers</p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Heritage</h3>
                <p className="text-sm text-muted-foreground">Celebrating tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
