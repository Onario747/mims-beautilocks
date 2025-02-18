"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: {
    name: string;
  };
  inStock: boolean;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist");
        if (!response.ok) throw new Error("Failed to fetch wishlist");
        const data = await response.json();
        setWishlist(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load wishlist"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = async (productId: string) => {
    try {
      const response = await fetch(`/api/wishlist/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to remove from wishlist");

      setWishlist((current) => current.filter((item) => item.id !== productId));
      toast.success("Removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove from wishlist");
    }
  };

  const addToCart = async (productId: string) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
          quantity: 1,
        }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");

      toast.success("Added to cart");
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading wishlist...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-3xl font-bold text-destructive">Error</h1>
          <p className="text-muted-foreground">{error}</p>
          <Button asChild size="lg">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground">
            Save items you love to your wishlist and they&apos;ll be right here
            when you&apos;re ready to shop.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {product.category.name}
                </p>
                <h3 className="font-medium">{product.name}</h3>
                <p className="font-semibold">${product.price.toFixed(2)}</p>
                <Button
                  className="w-full"
                  variant={product.inStock ? "default" : "secondary"}
                  disabled={!product.inStock}
                  onClick={() => product.inStock && addToCart(product.id)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
