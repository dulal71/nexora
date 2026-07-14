

'use client';
import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import { Description, Label, ListBox, SearchField,Select } from "@heroui/react";
import SortDropdown from "./SortDropdown";


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
    <div className="container mx-auto flex flex-wrap  items-center md:gap-5 lg:gap-10 p-2 md:p-5 my-4">
      {/* Search Input */}
      <div className="w-full md:flex-1 flex flex-col gap-4">
      <SearchField name="search">
        <Label>Search products</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search products..." />
          <SearchField.ClearButton />
        </SearchField.Group>
       
      </SearchField>
      
    </div>
      {/* Filter Button */}
      <FilterDropdown></FilterDropdown>
 {/* Sort Button */}

        <SortDropdown></SortDropdown>
   
    </div>
  );
};

export default ProductToolbar;


