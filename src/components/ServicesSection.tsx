import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scissors, 
  Palette, 
  Shield, 
  Truck, 
  Settings, 
  CheckCircle,
  Globe,
  Clock
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Cut & Sew Manufacturing",
      description: "Complete garment manufacturing from cutting to finished products with precision and quality control.",
      features: ["Pattern Making", "Cutting Services", "Assembly Line Production", "Quality Control"]
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "Creative design solutions and technical development for fashion-forward European markets.",
      features: ["Fashion Design", "Technical Sketching", "Sample Development", "Color Consultation"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring European standards and compliance.",
      features: ["EU Standards", "Quality Testing", "Compliance Certification", "Final Inspection"]
    },
    {
      icon: Truck,
      title: "Export & Logistics",
      description: "Comprehensive export services with reliable logistics for timely global deliveries.",
      features: ["Global Shipping", "Custom Clearance", "Documentation", "Supply Chain"]
    },
    {
      icon: Settings,
      title: "Private Labeling",
      description: "Complete private label solutions for brands looking to manufacture in India.",
      features: ["Brand Development", "Label Production", "Packaging Design", "Market Strategy"]
    },
    {
      icon: Globe,
      title: "Sustainable Production",
      description: "Eco-friendly manufacturing processes aligned with global sustainability goals.",
      features: ["Organic Materials", "Eco-Friendly Dyes", "Waste Management", "Green Certification"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold-vibrant/10 text-gold-vibrant rounded-full px-4 py-2 mb-4">
            <Settings className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Comprehensive Manufacturing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery, we provide end-to-end garment manufacturing services 
            tailored for European quality standards and market demands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 shadow-medium">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-navy-deep" />
                  </div>
                  <CardTitle className="text-xl text-navy-deep group-hover:text-gold-vibrant transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-gold-vibrant mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <Clock className="h-12 w-12 text-gold-vibrant mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Manufacturing Project?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a detailed quote for your garment manufacturing requirements. 
            Our team will respond within 24 hours with a comprehensive proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-vibrant text-navy-deep font-semibold px-8 py-3 rounded-lg hover:bg-gold-muted transition-smooth hover:scale-105">
              Request Quote
            </button>
            <button className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-smooth">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;