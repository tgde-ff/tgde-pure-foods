import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homemaker, Lagos",
    content: "Finally, palm oil that reminds me of my grandmother's cooking! The aroma, the color, the taste — it's like going back home. My jollof rice has never been better.",
    rating: 5,
  },
  {
    name: "Chef Emmanuel Bassey",
    role: "Restaurant Owner, Abuja",
    content: "As a professional chef, quality ingredients are non-negotiable. TGDE's palm oil is consistent, pure, and my customers can taste the difference. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ngozi Ibe",
    role: "Nigerian in Diaspora, UK",
    content: "Living abroad, finding authentic Nigerian palm oil was always a struggle. TGDE changed that. It's the real thing — pure and exactly what I remember from Nigeria.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Loved by <span className="text-primary">Families</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers say about TGDE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border relative"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent-foreground" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
