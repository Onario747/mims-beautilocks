import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    name: "Mims Beautilocks",
    slug: "mims-beautilocks",
    description: "Our signature line of premium hair care products",
    logo: "https://i.ibb.co/JjsHcqcy/mimslogo-removebg-preview.png",
    image: "https://i.ibb.co/jvpcstt7/bt5.jpg",
  },
  // Add more brands as needed
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our curated selection of premium hair care brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <Link key={brand.slug} href={`/brands/${brand.slug}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className="relative h-16 mb-4">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-muted-foreground">{brand.description}</p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Products Section */}
        <section className="mt-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our most popular products from each brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add featured products here */}
          </div>
        </section>
      </div>
    </div>
  );
}
