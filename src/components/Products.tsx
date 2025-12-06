import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import productFamily from "@/assets/product-family.jpg";
import productShelf from "@/assets/product-shelf.jpg";

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
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Purity You Can <span className="text-primary">Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every bottle is lab-tested, carefully filtered, and sealed under strict quality 
            control to ensure your family gets nothing but the best.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent-foreground" />
                  ))}
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="flex gap-2 mb-6">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <Button className="w-full group">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            More products coming soon: Palm Kernel Oil, Dried Fish, Powdered Grains
          </p>
          <Button variant="outline">Get Notified</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
