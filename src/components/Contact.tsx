import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Lagos, Nigeria",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 XXX XXX XXXX",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@tgdefoods.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Have questions about our products? Want to place a bulk order? 
              We'd love to hear from you. Reach out and let's bring purity to your table.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wholesale CTA */}
            <div className="mt-10 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <h3 className="font-semibold text-foreground mb-2">
                Wholesale Inquiries?
              </h3>
              <p className="text-sm text-muted-foreground">
                We supply to restaurants, supermarkets, and distributors. Contact us for 
                competitive bulk pricing and partnership opportunities.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background p-8 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
