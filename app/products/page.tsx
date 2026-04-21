"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types";

// Demo data - replace with Firebase fetch
const allProducts: Product[] = [
  {
    id: "1",
    name: "Oversized Hoodie",
    slug: "oversized-hoodie",
    description: "Premium cotton oversized hoodie",
    price: 189,
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop"],
    category: "tops",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["hoodie", "oversized"],
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
    description: "Relaxed fit cargo pants",
    price: 159,
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop"],
    category: "bottoms",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["pants", "cargo"],
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
    description: "Heavyweight cotton boxy fit",
    price: 89,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop"],
    category: "tops",
    collection: "essentials",
    sizes: ["S", "M", "L", "XL"],
    tags: ["t-shirt", "boxy"],
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
    description: "Technical zip-up jacket",
    price: 249,
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2536&auto=format&fit=crop"],
    category: "outerwear",
    collection: "athleisure",
    sizes: ["S", "M", "L", "XL"],
    tags: ["jacket", "zip-up"],
    inStock: true,
    featured: true,
    bestseller: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const categories = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl font-bold mb-4">All Products</h1>
          <p className="text-neutral-400">Discover our complete collection</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-neutral-50 text-neutral-950"
                  : "bg-neutral-900 text-neutral-400 hover:text-neutral-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
