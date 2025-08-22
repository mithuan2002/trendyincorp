import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Globe,
  Building
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: [
        "Trendy Incorp Manufacturing",
        "Industrial Area, Tirupur",
        "Tamil Nadu - 641602, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers", 
      details: [
        "+91 9876543210",
        "+91 4212345678",
        "Whatsapp Available"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@trendyincorp.com",
        "exports@trendyincorp.com",
        "sales@trendyincorp.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday",
        "9:00 AM - 6:00 PM IST",
        "Emergency: 24/7"
      ]
    }
  ];

  const quickLinks = [
    { name: "Request Quote", action: "quote" },
    { name: "Quality Certificates", action: "certificates" },
    { name: "Company Brochure", action: "brochure" },
    { name: "Factory Tour", action: "tour" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold-vibrant/10 text-gold-vibrant rounded-full px-4 py-2 mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact our expert team for detailed consultations, quotes, and 
            comprehensive manufacturing solutions for your garment requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-navy-deep" />
                        </div>
                        <CardTitle className="text-lg text-navy-deep">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-navy-deep flex items-center">
                  <Send className="h-5 w-5 mr-2 text-gold-vibrant" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="justify-start h-12 hover:bg-gold-vibrant/5 hover:border-gold-vibrant hover:text-gold-vibrant transition-all"
                    >
                      {link.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form / CTA */}
          <div className="space-y-6">
            <Card className="border-0 shadow-medium bg-gradient-hero text-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gold-vibrant" />
                  Export Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-6">
                  Fill out our export inquiry form and get a detailed quote within 24 hours.
                </p>
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Start Export Inquiry
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    Schedule Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-navy-deep flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gold-vibrant" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Tirupur, Tamil Nadu</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-navy-deep">Trendy Incorp Manufacturing</p>
                  <p>Industrial Area, Tirupur</p>
                  <p>Tamil Nadu - 641602, India</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-navy-deep">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 transition-transform">
                    Ln
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 transition-transform">
                    Fb
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 transition-transform">
                    Yt
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;