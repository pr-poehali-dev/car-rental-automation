import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-automotive-midnight">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturedCars />
      <Footer />
    </div>
  );
};

export default Index;
