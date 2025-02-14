import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const beautyTips = [
  {
    id: 1,
    title: "Perfect Skincare Routine",
    description: "Learn the essential steps for a glowing complexion",
    image: "/tutorials/skincare-routine.jpg",
    duration: "5:30",
  },
  {
    id: 2,
    title: "Smokey Eye Tutorial",
    description: "Master the classic smokey eye look",
    image: "/tutorials/smokey-eye.jpg",
    duration: "8:45",
  },
  {
    id: 3,
    title: "Hair Care Secrets",
    description: "Professional tips for healthy, shiny hair",
    image: "/tutorials/hair-care.jpg",
    duration: "6:15",
  },
];

export default function BeautyTipsSection() {
  return (
    <section className="bg-muted/50">
      <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
        <div className="max-w-[1400px] mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Beauty Tips & Tutorials
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Expert advice and step-by-step tutorials for your beauty routine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {beautyTips.map((tip) => (
              <Card
                key={tip.id}
                className="group overflow-hidden w-full max-w-sm md:max-w-[360px]"
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs md:text-sm z-20">
                    {tip.duration}
                  </div>
                </div>
                <div className="p-4 md:p-6 space-y-2">
                  <h3 className="font-semibold text-base md:text-lg">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {tip.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center pt-4 md:pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/tutorials">View All Tutorials</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
