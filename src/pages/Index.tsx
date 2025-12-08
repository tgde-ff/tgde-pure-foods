import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
