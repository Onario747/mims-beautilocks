import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import BestSellersSection from "./components/sections/BestSellersSection";
import BeautyTipsSection from "./components/sections/BeautyTipsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import SpecialOffersSection from "./components/sections/SpecialOffersSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="flex flex-col">
        {/* <section className="bg-background py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <FeaturesSection />
          </div>
        </section> */}
        <section className="bg-background py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <CategoriesSection />
          </div>
        </section>
        <BestSellersSection />
        <BeautyTipsSection />
        <TestimonialsSection />
        <SpecialOffersSection />
      </div>
    </main>
  );
}
