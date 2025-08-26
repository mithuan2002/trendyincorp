import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add error boundary for testing
  try {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Index component:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl">Loading Trendy Incorp...</h1>
      </div>
    );
  }
};

export default Index;
