"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {product.compareAtPrice && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
            Sale
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="bg-neutral-50 text-neutral-950 text-sm font-medium py-3 rounded-full text-center">
            Quick View
          </div>
        </motion.div>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-sm group-hover:text-neutral-300 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-500 capitalize">{product.category}</p>
      </div>
    </Link>
  );
}
