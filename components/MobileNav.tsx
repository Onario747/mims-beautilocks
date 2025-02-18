import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Heart, Search, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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

interface MobileNavProps {
  isAuthenticated: boolean;
  userEmail?: string;
  onLogout: () => void;
}

export function MobileNav({
  isAuthenticated,
  userEmail,
  onLogout,
}: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="flex flex-col h-full">
          <div className="px-2 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
              />
            </div>

            <nav className="space-y-2">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-base",
                    pathname === route.href ? "bg-muted" : "",
                    route.className
                  )}
                  asChild
                >
                  <Link href={route.href}>{route.label}</Link>
                </Button>
              ))}
            </nav>
          </div>

          <Separator />

          <div className="flex-1 px-2 py-4">
            <div className="space-y-2">
              {isAuthenticated ? (
                <>
                  <p className="px-4 text-sm text-muted-foreground">
                    {userEmail}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/account">
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/wishlist">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/orders">Orders</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
                    onClick={onLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className="w-full" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/signup">Create Account</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
