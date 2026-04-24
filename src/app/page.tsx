import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContact from "@/components/layout/StickyContact";
import Hero from "@/components/sections/Hero";
import Inspiration from "@/components/sections/Inspiration";
import CalculatorPreview from "@/components/sections/CalculatorPreview";
import WarrantyBanner from "@/components/sections/WarrantyBanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WorkVideos from "@/components/sections/WorkVideos";
import CustomerReviews from "@/components/sections/CustomerReviews";
import VirasatHomes from "@/components/sections/VirasatHomes";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 1. Hero Carousel */}
      <Hero />
      
      {/* 2. Get an Instant Estimate */}
      <CalculatorPreview />
      
      {/* 3. Inspiration for home interior designs */}
      <Inspiration />

      {/* 4. Lifetime Warranty Banner */}
      <WarrantyBanner />
      
      {/* 5. Why choose us */}
      <WhyChooseUs />

      {/* 6. Work Transformation Videos */}
      <WorkVideos />

      {/* 7. Customer Reviews */}
      <CustomerReviews />

      {/* 8. Get a glimpse of Virasat homes */}
      <VirasatHomes />
    </main>
  );
}
