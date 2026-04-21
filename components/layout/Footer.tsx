import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">NOIR</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Minimal luxury streetwear crafted for the modern individual. 
              Quality materials, timeless design.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="/products" className="hover:text-neutral-50 transition-colors">All Products</Link></li>
              <li><Link href="/collections" className="hover:text-neutral-50 transition-colors">Collections</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-neutral-50 transition-colors">New Arrivals</Link></li>
              <li><Link href="/sale" className="hover:text-neutral-50 transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="/contact" className="hover:text-neutral-50 transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-neutral-50 transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-neutral-50 transition-colors">Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-neutral-50 transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© 2024 NOIR. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-neutral-50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-neutral-50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
