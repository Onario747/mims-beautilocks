import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="container py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Stay Beautiful, Stay Updated
        </h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for exclusive offers, beauty tips, and new
          product alerts.
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
