import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Gift, Mail, ArrowRight } from "lucide-react";

export default function SpecialOffersSection() {
  return (
    <section className="bg-gradient-to-b from-background to-primary/5">
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Get Exclusive Offers
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter and receive special offers, early
              access to new products, and beauty tips straight to your inbox.
            </p>
            <Card className="p-6 bg-background/80 backdrop-blur">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
                <Button className="whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center sm:text-left">
                <Gift className="inline h-4 w-4 mr-1" />
                Get 10% off your first order when you subscribe!
              </p>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-primary/10">
              <h3 className="font-semibold mb-2">Summer Sale</h3>
              <p className="text-2xl font-bold text-primary mb-2">30% OFF</p>
              <p className="text-sm text-muted-foreground">
                On all summer essentials
              </p>
            </Card>
            <Card className="p-6 bg-primary/10">
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-2xl font-bold text-primary mb-2">$50+</p>
              <p className="text-sm text-muted-foreground">
                On orders over $50
              </p>
            </Card>
            <Card className="p-6 bg-primary/10">
              <h3 className="font-semibold mb-2">Loyalty Points</h3>
              <p className="text-2xl font-bold text-primary mb-2">2X</p>
              <p className="text-sm text-muted-foreground">
                Double points this week
              </p>
            </Card>
            <Card className="p-6 bg-primary/10">
              <h3 className="font-semibold mb-2">Bundle Deal</h3>
              <p className="text-2xl font-bold text-primary mb-2">25% OFF</p>
              <p className="text-sm text-muted-foreground">Buy any 3 items</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
