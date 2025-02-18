"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/brands",
    label: "Brands",
  },
  {
    href: "/products",
    label: "All Products",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/sale",
    label: "Sale",
    className: "text-red-500 hover:text-red-600",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href ? "text-primary" : "text-muted-foreground",
            route.className
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
