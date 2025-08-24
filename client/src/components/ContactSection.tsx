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
  Building,
  Sparkles,
  Calendar,
  FileText,
  Video
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Innovation Hub",
      details: [
        "Trendy Incorp Manufacturing",
        "Smart Industrial Complex",
        "Tirupur, Tamil Nadu - 641602"
      ],
      color: "blue"
    },
    {
      icon: Phone,
      title: "Connect Instantly", 
      details: [
        "+91 9876543210",
        "WhatsApp Business",
        "24/7 Support Available"
      ],
      color: "green"
    },
    {
      icon: Mail,
      title: "Digital Communication",
      details: [
        "hello@trendyincorp.com",
        "partnerships@trendyincorp.com",
        "support@trendyincorp.com"
      ],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Global Hours",
      details: [
        "Monday - Saturday",
        "9:00 AM - 6:00 PM IST",
        "European timezone support"
      ],
      color: "orange"
    }
  ];

  const quickActions = [
    { name: "Innovation Brief", icon: Sparkles, action: "brief", color: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200" },
    { name: "Quality Certificates", icon: FileText, action: "certificates", color: "bg-green-50 text-green-600 hover:bg-green-100 border-green-200" },
    { name: "Virtual Factory Tour", icon: Video, action: "tour", color: "bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-200" },
    { name: "Partnership Meeting", icon: Calendar, action: "meeting", color: "bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-200" }
  ];

  const getContactColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-100",
      green: "bg-green-50 border-green-100", 
      purple: "bg-purple-50 border-purple-100",
      orange: "bg-orange-50 border-orange-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your Innovation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your garment manufacturing? Connect with our innovation team 
            for personalized solutions and cutting-edge partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClass = getContactColor(info.color);
                return (
                  <Card key={index} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${colorClass} border rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-gray-700" />
                        </div>
                        <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm font-medium">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-soft">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-blue-500" />
                  Quick Start Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <Button 
                        key={index} 
                        variant="minimal" 
                        className={`justify-start h-14 ${action.color} border transition-all hover:scale-105 hover:shadow-md`}
                      >
                        <IconComponent className="h-5 w-5 mr-3" />
                        {action.name}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form / CTA */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-primary text-white overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-12 -translate-x-12"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-200" />
                  Partnership Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-blue-100 mb-6">
                  Join the future of garment manufacturing. Get your comprehensive partnership proposal within 24 hours.
                </p>
                <div className="space-y-4">
                  <Button variant="light" size="lg" className="w-full shadow-lg">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Start Partnership
                  </Button>
                  <Button 
                    variant="minimal" 
                    size="lg" 
                    className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Book Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  Visit Our Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-soft rounded-2xl mb-4 flex items-center justify-center border border-gray-100">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <p className="text-sm font-medium text-gray-700">Smart Manufacturing Hub</p>
                    <p className="text-xs text-gray-500">Tirupur Innovation District</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-900">Trendy Incorp Manufacturing</p>
                  <p>Smart Industrial Complex</p>
                  <p>Tirupur, Tamil Nadu - 641602, India</p>
                </div>
                <Button variant="light" className="w-full mt-4" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Factory Visit
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Follow Our Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
                    <span>Li</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
                    <span>Fb</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
                    <span>Yt</span>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
                    <span>In</span>
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