"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Truck, RotateCcw, Shield } from "lucide-react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SizeSelector } from "@/components/product/SizeSelector";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import toast from "react-hot-toast";
import Link from "next/link";

// Demo data - replace with Firebase fetch by slug
const product: Product = {
  id: "1",
  name: "Oversized Hoodie",
  slug: "oversized-hoodie",
  description: "Crafted from 100% organic cotton, this oversized hoodie features a relaxed silhouette, dropped shoulders, and minimal tonal branding. The heavyweight fleece construction provides exceptional warmth and structure, while the garment-dyed finish ensures a unique, lived-in feel that improves with age.\n\nFeatures:\n- 100% Organic Cotton\n- 450 GSM Heavyweight Fleece\n- Garment Dyed\n- Oversized Fit\n- Dropped Shoulders\n- Kangaroo Pocket\n- Ribbed Cuffs and Hem",
  price: 189,
  compareAtPrice: 220,
  images: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2572&auto=format&fit=crop",
  ],
  category: "tops",
  collection: "essentials",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Black", "Heather Grey", "Sand"],
  tags: ["hoodie", "oversized", "organic"],
  inStock: true,
  featured: true,
  bestseller: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link href="/" className="hover:text-neutral-50 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-neutral-50 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-neutral-300">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-neutral-400 uppercase tracking-wider">{product.collection}</p>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                </button>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-lg text-neutral-500 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                    <span className="text-sm text-red-400">
                      Save {formatPrice(product.compareAtPrice - product.price)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="h-px bg-neutral-800" />

            {/* Size Selection */}
            <SizeSelector
              sizes={product.sizes}
              selected={selectedSize}
              onSelect={setSelectedSize}
            />

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-neutral-800">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-neutral-400" />
                <p className="text-xs text-neutral-400">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto mb-2 text-neutral-400" />
                <p className="text-xs text-neutral-400">Easy Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-neutral-400" />
                <p className="text-xs text-neutral-400">Secure Payment</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-medium">Description</h3>
              <div className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
