import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
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
