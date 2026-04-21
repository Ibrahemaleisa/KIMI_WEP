"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Upload, Trash2, Edit } from "lucide-react";
import { Product } from "@/types";
import { generateSlug } from "@/lib/utils";
import toast from "react-hot-toast";

// Demo admin products
const demoProducts: Product[] = [
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
];

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(demoProducts);
  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    collection: "",
    sizes: "",
    tags: "",
    featured: false,
    bestseller: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: editingProduct?.id || Math.random().toString(36).substr(2, 9),
      name: formData.name,
      slug: generateSlug(formData.name),
      description: formData.description,
      price: Number(formData.price),
      images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop"],
      category: formData.category,
      collection: formData.collection,
      sizes: formData.sizes.split(",").map((s) => s.trim()),
      tags: formData.tags.split(",").map((t) => t.trim()),
      inStock: true,
      featured: formData.featured,
      bestseller: formData.bestseller,
      createdAt: editingProduct?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? newProduct : p)));
      toast.success("Product updated");
    } else {
      setProducts([...products, newProduct]);
      toast.success("Product added");
    }

    setIsAdding(false);
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      collection: "",
      sizes: "",
      tags: "",
      featured: false,
      bestseller: false,
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      collection: product.collection,
      sizes: product.sizes.join(", "),
      tags: product.tags.join(", "),
      featured: product.featured,
      bestseller: product.bestseller,
    });
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Product deleted");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-neutral-400 mt-1">Manage your products</p>
          </div>
          <button
            onClick={() => {
              setIsAdding(!isAdding);
              setEditingProduct(null);
              setFormData({
                name: "",
                description: "",
                price: "",
                category: "",
                collection: "",
                sizes: "",
                tags: "",
                featured: false,
                bestseller: false,
              });
            }}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-all"
          >
            <Plus className="w-4 h-4" />
            {isAdding ? "Cancel" : "Add Product"}
          </button>
        </div>

        {/* Add/Edit Form */}
        <AnimatePresence>
          {isAdding && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleSubmit}
              className="mb-8 p-6 bg-neutral-900 rounded-xl space-y-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                  required
                />
              </div>

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Collection"
                  value={formData.collection}
                  onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Sizes (comma separated)"
                  value={formData.sizes}
                  onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-500"
                  required
                />
              </div>

              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded border-neutral-700 bg-neutral-800"
                  />
                  <span className="text-sm">Featured</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.bestseller}
                    onChange={(e) => setFormData({ ...formData, bestseller: e.target.checked })}
                    className="w-4 h-4 rounded border-neutral-700 bg-neutral-800"
                  />
                  <span className="text-sm">Bestseller</span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-3 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Upload Images
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-neutral-50 text-neutral-950 font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Products Table */}
        <div className="bg-neutral-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left px-6 py-4 text-sm font-medium text-neutral-400">Product</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-neutral-400">Price</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-neutral-400">Category</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-neutral-400">Status</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-neutral-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-neutral-800 last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-neutral-800 overflow-hidden">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-neutral-500">{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4 capitalize">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${product.inStock ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
