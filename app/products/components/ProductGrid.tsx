import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden">
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <p className="text-white font-medium px-4 py-2 bg-black/60 rounded-md">
                  Out of Stock
                </p>
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-base">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </div>
              <p className="font-semibold">${product.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                ({product.reviews})
              </p>
            </div>
            <Button
              className="w-full"
              variant={product.inStock ? "default" : "secondary"}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
