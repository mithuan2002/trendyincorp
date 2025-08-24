import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Palette, 
  Shield, 
  Truck, 
  Settings, 
  CheckCircle,
  Globe,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Smart Manufacturing",
      description: "AI-powered cut & sew operations with precision and real-time quality monitoring.",
      features: ["Automated Cutting", "Digital Workflows", "Quality Control", "Lean Production"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "Creative Development",
      description: "Innovative design solutions and rapid prototyping for modern European markets.",
      features: ["Trend Forecasting", "3D Prototyping", "Color Innovation", "Design Consultation"],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Advanced testing and compliance systems ensuring premium European standards.",
      features: ["EU Certification", "Automated Testing", "Sustainability Standards", "Traceability"],
      color: "green"
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Smart supply chain solutions with real-time tracking and optimized delivery.",
      features: ["Express Shipping", "Real-time Tracking", "Digital Documentation", "Carbon Neutral"],
      color: "orange"
    },
    {
      icon: Settings,
      title: "Brand Partnership",
      description: "Complete white-label solutions and brand development for modern retailers.",
      features: ["Brand Strategy", "Custom Labeling", "Digital Assets", "Market Intelligence"],
      color: "pink"
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Next-generation eco-friendly processes aligned with climate goals.",
      features: ["Circular Economy", "Zero Waste", "Clean Energy", "Social Impact"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", icon: "text-blue-600" },
      purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600", icon: "text-purple-600" },
      green: { bg: "bg-green-50", border: "border-green-100", text: "text-green-600", icon: "text-green-600" },
      orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-600", icon: "text-orange-600" },
      pink: { bg: "bg-pink-50", border: "border-pink-100", text: "text-pink-600", icon: "text-pink-600" },
      teal: { bg: "bg-teal-50", border: "border-teal-100", text: "text-teal-600", icon: "text-teal-600" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-25">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 border border-purple-200 text-purple-700 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Innovation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Next-Gen Manufacturing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets traditional craftsmanship to deliver exceptional 
            results for forward-thinking European brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-7 w-7 ${colors.icon}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
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
                        <div className={`w-4 h-4 ${colors.bg} ${colors.border} border rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <CheckCircle className={`h-2.5 w-2.5 ${colors.icon}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;