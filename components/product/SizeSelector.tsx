"use client";

import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">Size</label>
        <button className="text-xs text-neutral-400 hover:text-neutral-50 transition-colors underline">
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={cn(
              "w-12 h-12 rounded-lg border text-sm font-medium transition-all duration-200",
              selected === size
                ? "bg-neutral-50 text-neutral-950 border-neutral-50"
                : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-neutral-200"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
