import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    name: "Dandruff Set",
    slug: "dandruff-set",
    description: "",
    image: "https://i.ibb.co/jvpcstt7/bt5.jpg",
  },
  {
    name: "Lice Removal set",
    slug: "lice-removal-set",
    description: "",
    image: "https://i.ibb.co/k2CdgZjh/bt6.jpg",
  },
  {
    name: "Hair growth set",
    slug: "hair-growth-set",
    description: "",
    image: "https://i.ibb.co/hxtZH8KW/bt7.jpg",
  },
  {
    name: "Hair Breakage set",
    slug: "hair-breakage-set",
    description: "",
    image: "https://i.ibb.co/YBd8KhBg/bt8.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Explore our wide range of products across various categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.slug}`}>
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="px-6 py-4 md:px-8 md:py-6">
                  <CardTitle className="text-lg md:text-xl">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
