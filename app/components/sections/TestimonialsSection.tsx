import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    image: "/testimonials/sarah.jpg",
    content:
      "The products from Glam Haven have completely transformed my skincare routine. My skin has never looked better!",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Makeup Artist",
    image: "/testimonials/emily.jpg",
    content:
      "As a professional makeup artist, I'm very particular about the products I use. Glam Haven never disappoints with their quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Beauty Blogger",
    image: "/testimonials/maria.jpg",
    content:
      "I love how Glam Haven curates their collection. They have all the best brands and their customer service is exceptional!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-primary/5">
      <div className="container py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read reviews from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
