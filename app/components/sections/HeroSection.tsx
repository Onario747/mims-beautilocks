import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[600px] flex items-center justify-center bg-[url('https://i.ibb.co/x8g6n3KS/mimshero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Your ultimate hair care products for all African women.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Search our curated collection of ultimate hair care products and
              unleash your confidence.
            </p>
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
