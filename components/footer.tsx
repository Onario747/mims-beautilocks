import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 mx-auto w-full">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Mims Beautilocks</h3>
          <p className="text-sm text-muted-foreground">
            Your premier destination for premium hair care products. Discover the
            latest in skincare, hair care, and more.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-foreground"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="text-muted-foreground hover:text-foreground"
              >
                Shipping Info
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/returns"
                className="text-muted-foreground hover:text-foreground"
              >
                Returns Policy
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/track-order"
                className="text-muted-foreground hover:text-foreground"
              >
                Track Order
              </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Subscribe to our newsletter for</p>
            <p>exclusive offers and updates!</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mims Beautilocks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
