import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";

const categories = [
  { id: "skincare", label: "Skincare" },
  { id: "makeup", label: "Makeup" },
  { id: "haircare", label: "Hair Care" },
  { id: "accessories", label: "Accessories" },
];

const ratings = [5, 4, 3, 2, 1];

export default function ProductFilters() {
  return (
    <div className="space-y-4">
      <div className="font-medium">Filters</div>
      <Accordion type="single" collapsible className="w-full">
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} />
                  <label
                    htmlFor={category.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              <Slider
                defaultValue={[0, 100]}
                max={200}
                step={1}
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">$0</span>
                <span className="text-sm">$200</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Ratings */}
        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <div className="flex items-center">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                      {[...Array(5 - rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-muted text-muted"
                        />
                      ))}
                      <span className="ml-2">& Up</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <label
                  htmlFor="in-stock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
