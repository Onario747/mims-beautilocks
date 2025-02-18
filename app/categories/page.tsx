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
    description: "Effective solutions for dandruff and scalp care",
    image: "https://i.ibb.co/jvpcstt7/bt5.jpg",
  },
  {
    name: "Lice Removal set",
    slug: "lice-removal-set",
    description: "Safe and effective lice treatment products",
    image: "https://i.ibb.co/k2CdgZjh/bt6.jpg",
  },
  {
    name: "Hair growth set",
    slug: "hair-growth-set",
    description: "Products designed to promote healthy hair growth",
    image: "https://i.ibb.co/hxtZH8KW/bt7.jpg",
  },
  {
    name: "Hair Breakage set",
    slug: "hair-breakage-set",
    description: "Solutions for strengthening and repairing damaged hair",
    image: "https://i.ibb.co/YBd8KhBg/bt8.jpg",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Product Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our specialized hair care sets designed to address specific
            hair and scalp concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white text-center px-4">
                      {category.name}
                    </h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
