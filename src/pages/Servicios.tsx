import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <CTASection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
