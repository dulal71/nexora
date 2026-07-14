

'use client';
import { useState, useRef, useEffect } from "react";


type SortOption = "featured" | "price-low" | "price-high" | "newest";

const ALL_CATEGORIES = ["Men", "Women"] as const;
type Category = typeof ALL_CATEGORIES[number];

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-low": "Price: Low to High",
  "price-high": "Price: High to Low",
  newest: "Newest Arrivals",
};

interface ProductToolbarProps {
  className?: string;
}

const ProductToolbar = ({ className = "" }: ProductToolbarProps) => {

  const [search, setSearch] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [newArrivalOnly, setNewArrivalOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("featured");

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // ফিল্টার ড্রপডাউনের বাইরে ক্লিক করলে বন্ধ হয়ে যাবে
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) setFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCategory = (cat: Category) => {
    setCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const resetFilters = () => {
    setCategories([]);
    setPriceRange({ min: 0, max: 1000 });
    setNewArrivalOnly(false);
  };

  const activeFilterCount = categories.length + (newArrivalOnly ? 1 : 0);

  return (
    <div className={`flex flex-wrap items-center gap-3 w-full ${className}`}>
      {/* Search Input */}
      <div className="relative flex-1 min-w-[220px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products…"
          className="w-full rounded-lg border border-neutral-300 bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
        />
      </div>

      {/* Filter Button */}
      <div className="relative" ref={filterRef}>
        <button
          onClick={() => setFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium"
        >
          Filter {activeFilterCount > 0 && <span className="bg-neutral-900 text-white rounded-full px-2 text-xs">{activeFilterCount}</span>}
        </button>
        {isFilterOpen && (
          <div className="absolute right-0 z-20 mt-2 w-72 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
            {(Object.keys(SORT_LABELS) as SortOption[]).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setSort(opt);
                  setSortOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-50 ${
                  sort === opt ? "font-semibold text-neutral-900" : "text-neutral-700"
                }`}
              >
                {SORT_LABELS[opt]}
                {sort === opt && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
            <button onClick={resetFilters} className="text-xs text-neutral-500 underline">Reset All</button>
          </div>
        )}
      </div>

      {/* Sort Button */}
      <div className="relative" ref={sortRef}>
        <button
          onClick={() => setSortOpen(!isSortOpen)}
          className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium"
        >
          {SORT_LABELS[sort]}
        </button>
        {isSortOpen && (
          <div className="absolute right-0 z-20 mt-2 w-56 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg">
            {(Object.keys(SORT_LABELS) as SortOption[]).map((opt) => (
              <button key={opt} onClick={() => { setSort(opt); setSortOpen(false); }} className="block w-full p-2 text-sm hover:bg-neutral-50">
                {SORT_LABELS[opt]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductToolbar;


