import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="https://i.ibb.co/jvpcstt7/bt5.jpg"
          alt="About Mims Beautilocks"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 p-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Mims Beautilocks
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Your trusted partner in hair care and beauty solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                At Mims Beautilocks, we are dedicated to providing high-quality
                hair care solutions that address common scalp and hair concerns.
                Our mission is to help our clients achieve healthy, beautiful
                hair through effective, natural-based products and expert
                guidance.
              </p>
              <Button asChild size="lg">
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://i.ibb.co/k2CdgZjh/bt6.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients and maintain strict
                quality control in all our products.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously research and develop new solutions to meet
                evolving hair care needs.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
              <p className="text-muted-foreground">
                We prioritize customer satisfaction and provide personalized
                support for all hair care concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Have questions about our products or services? We&apos;re here to
            help you find the perfect solution for your hair care needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
