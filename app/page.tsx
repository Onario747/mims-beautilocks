import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import BestSellersSection from "./components/sections/BestSellersSection";
import BeautyTipsSection from "./components/sections/BeautyTipsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import SpecialOffersSection from "./components/sections/SpecialOffersSection";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col">
    //   <HeroSection />
    //   <div className="flex flex-col">
    //     {/* <section className="bg-background py-16 md:py-24">
    //       <div className="container px-4 md:px-6 mx-auto">
    //         <FeaturesSection />
    //       </div>
    //     </section> */}
    //     <section className="bg-background py-16 md:py-24">
    //       <div className="container px-4 md:px-6 mx-auto">
    //         <CategoriesSection />
    //       </div>
    //     </section>
    //     <BestSellersSection />
    //     <BeautyTipsSection />
    //     <TestimonialsSection />
    //     <SpecialOffersSection />
    //   </div>
    // </main>
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <p className="text-red-600 font-bold text-3xl">
        Client refused to complete payment.
      </p>
      <p className="text-white mt-4 text-sm">
        Contact the web developer for more details.
      </p>
      <p className="text-gray-300 mt-2">Whatsapp and Call Number: <span className="font-bold">08169742833</span></p>
    </main>
  );
}
