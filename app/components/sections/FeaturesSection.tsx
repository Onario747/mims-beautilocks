import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, TrendingUp, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Carefully curated selection of luxury beauty products",
  },
  {
    icon: TrendingUp,
    title: "Latest Trends",
    description: "Stay ahead with the newest beauty innovations",
  },
  {
    icon: Award,
    title: "Expert Advice",
    description: "Professional beauty tips and product recommendations",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Safe and reliable shopping experience",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full mx-auto">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose Glam Haven
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Experience beauty shopping reimagined with premium products and
            expert guidance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-background/60 backdrop-blur hover:bg-background/80 transition-colors"
            >
              <CardHeader className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-center">
                  <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <CardTitle className="text-center text-lg md:text-xl">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center text-sm md:text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
