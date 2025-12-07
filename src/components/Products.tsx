import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import productFamily from "@/assets/product-family.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import pantryStaples from "@/assets/pantry-staples.jpg";
import grainsSpices from "@/assets/grains-spices.jpg";

const products = [
  {
    name: "Tropical Pure Palm Oil",
    tagline: "Nature's Gold, Pure & Bold",
    description: "100% pure, unrefined red palm oil. Rich in vitamins A & E. Perfect for jollof rice, stews, and traditional Nigerian dishes.",
    image: productFamily,
    sizes: ["1L", "2L", "5L"],
    badge: "Bestseller",
    rating: 5,
  },
  {
    name: "Tropical Pure Palm Oil - Family Pack",
    tagline: "Stock Up & Save",
    description: "Our premium palm oil in bulk packaging. Ideal for restaurants, caterers, and large families who value quality.",
    image: productShelf,
    sizes: ["5L", "10L", "25L"],
    badge: "Best Value",
    rating: 5,
  },
  {
    name: "Nigerian Pantry Essentials",
    tagline: "Complete Kitchen Ingredients",
    description: "Authentic Nigerian pantry staples including dried fish, crayfish, locust beans, spices, and more. Everything you need for traditional cooking.",
    image: pantryStaples,
    sizes: ["Small", "Medium", "Large"],
    badge: "New",
    rating: 5,
  },
  {
    name: "Premium Grains & Spices",
    tagline: "Farm Fresh Goodness",
    description: "Locally sourced beans, grains, and spices. Hand-selected for quality and freshness. Perfect for soups, stews, and everyday meals.",
    image: grainsSpices,
    sizes: ["1kg", "2kg", "5kg"],
    badge: "Popular",
    rating: 5,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Purity You Can <span className="text-primary">Trust</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Every bottle is lab-tested, carefully filtered, and sealed under strict quality 
            control to ensure your family gets nothing but the best.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground text-xs">
                  {product.badge}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-0.5 sm:gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent-foreground" />
                  ))}
                </div>

                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-medium text-xs sm:text-sm mb-2 sm:mb-3">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 bg-muted text-foreground rounded-full text-xs sm:text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <Button className="w-full group text-sm sm:text-base">
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-10 sm:mt-16">
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            More products coming soon: Palm Kernel Oil, Dried Fish, Powdered Grains
          </p>
          <Button variant="outline" className="text-sm sm:text-base">Get Notified</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
