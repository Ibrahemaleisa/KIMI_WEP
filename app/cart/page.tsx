"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-neutral-600" />
          <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-400 mb-8">Discover our latest collection and add some items.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-all"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-6 p-6 bg-neutral-900 rounded-xl"
                >
                  <div className="relative w-24 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-800">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium mb-1">{item.product.name}</h3>
                          <p className="text-sm text-neutral-400">Size: {item.size}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 bg-neutral-800 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="hover:text-neutral-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="hover:text-neutral-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-neutral-900 rounded-xl space-y-6">
              <h2 className="font-display text-xl font-bold">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal())}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="h-px bg-neutral-800" />

              <div className="flex justify-between font-display text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(cartTotal())}</span>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-all duration-300"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="block w-full text-center text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
