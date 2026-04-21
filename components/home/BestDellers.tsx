"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types";

// Demo data - replace with Firebase fetch
const bestSellers: Product[] = [
  {
    id: "1",
    name: "Oversized Hoodie",
    slug: "oversized-hoodie",
    description: "Premium cotton oversized hoodie with minimal branding",
    price: 189,
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop"],
    category: "tops",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["bestseller", "hoodie"],
    inStock: true,
    featured: true,
    bestseller: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Cargo Pants",
    slug: "cargo-pants",
    description: "Relaxed fit cargo pants with multiple pockets",
    price: 159,
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop"],
    category: "bottoms",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["bestseller", "pants"],
    inStock: true,
    featured: true,
    bestseller: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Boxy T-Shirt",
    slug: "boxy-t-shirt",
    description: "Heavyweight cotton boxy fit t-shirt",
    price: 89,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop"],
    category: "tops",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["bestseller", "t-shirt"],
    inStock: true,
    featured: true,
    bestseller: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Zip-Up Jacket",
    slug: "zip-up-jacket",
    description: "Technical zip-up jacket with water-resistant finish",
    price: 249,
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2536&auto=format&fit=crop"],
    category: "outerwear",
    collection: "athleisure",
    sizes: ["S", "M", "L", "XL"],
    tags: ["bestseller", "jacket"],
    inStock: true,
    featured: true,
    bestseller: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function BestSellers() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Best Sellers
            </h2>
            <p className="text-neutral-400">Our most popular pieces this season</p>
          </div>
          <a
            href="/products"
            className="hidden sm:inline-flex text-sm font-medium link-underline"
          >
            View All
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
