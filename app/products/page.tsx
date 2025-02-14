import { Suspense } from "react";
import ProductGrid from "./components/ProductGrid";
import ProductFilters from "./components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luxury Face Cream",
    price: 49.99,
    image: "https://i.ibb.co/BVV4B1LN/bt1.jpg",
    category: "Skincare",
    rating: 4.8,
    reviews: 128,
    inStock: true,
  },
  {
    id: 2,
    name: "Volumizing Mascara",
    price: 24.99,
    image: "https://i.ibb.co/20PYCfhZ/bt2.jpg",
    category: "Makeup",
    rating: 4.6,
    reviews: 95,
    inStock: true,
  },
  {
    id: 3,
    name: "Hair Treatment Oil",
    price: 34.99,
    image: "https://i.ibb.co/5X1hR994/bt3.jpg",
    category: "Hair Care",
    rating: 4.9,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Rose Gold Brush Set",
    price: 79.99,
    image: "https://i.ibb.co/dw8YRyjL/bt4.jpg",
    category: "Accessories",
    rating: 4.7,
    reviews: 84,
    inStock: false,
  },
  {
    id: 5,
    name: "Hydrating Serum",
    price: 54.99,
    image: "https://i.ibb.co/jvpcstt7/bt5.jpg",
    category: "Skincare",
    rating: 4.8,
    reviews: 112,
    inStock: true,
  },
  {
    id: 6,
    name: "Matte Lipstick Collection",
    price: 45.99,
    image: "https://i.ibb.co/k2CdgZjh/bt6.jpg",
    category: "Makeup",
    rating: 4.5,
    reviews: 76,
    inStock: true,
  },
  {
    id: 7,
    name: "Curl Defining Cream",
    price: 29.99,
    image: "https://i.ibb.co/hxtZH8KW/bt7.jpg",
    category: "Hair Care",
    rating: 4.6,
    reviews: 92,
    inStock: true,
  },
  {
    id: 8,
    name: "Makeup Mirror with Lights",
    price: 89.99,
    image: "https://i.ibb.co/YBd8KhBg/bt8.jpg",
    category: "Accessories",
    rating: 4.7,
    reviews: 64,
    inStock: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                All Products
              </h1>
              <p className="text-muted-foreground">
                Browse our collection of beauty products
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <aside className="lg:w-[240px] flex-shrink-0">
              <ProductFilters />
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <Suspense fallback={<div>Loading products...</div>}>
                <ProductGrid products={products} />
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
