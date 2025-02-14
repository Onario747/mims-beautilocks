import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bestSellers = [
  {
    id: 1,
    name: "Luxury Face Cream",
    price: "$49.99",
    image: "https://i.ibb.co/BVV4B1LN/bt1.jpg",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Volumizing Mascara",
    price: "$24.99",
    image: "https://i.ibb.co/20PYCfhZ/bt2.jpg",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Hair Treatment Oil",
    price: "$34.99",
    image: "https://i.ibb.co/5X1hR994/bt3.jpg",
    category: "Hair Care",
  },
  {
    id: 4,
    name: "Rose Gold Brush Set",
    price: "$79.99",
    image: "https://i.ibb.co/dw8YRyjL/bt4.jpg",
    category: "Accessories",
  },
];

export default function BestSellersSection() {
  return (
    <section className="bg-muted/30">
      <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
        <div className="max-w-[1400px] mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Best Sellers
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Our most loved products by our customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {bestSellers.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden w-full max-w-sm sm:max-w-[320px]"
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                  <h3 className="font-medium text-base md:text-lg">
                    {product.name}
                  </h3>
                  <p className="font-semibold text-base md:text-lg">
                    {product.price}
                  </p>
                  <Button className="w-full mt-2" variant="secondary">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center pt-4 md:pt-8">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
