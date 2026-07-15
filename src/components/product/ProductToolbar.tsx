'use client';
import { useState } from "react";
import FilterDropdown, { CategoryOption } from "./FilterDropdown";
import { Label, SearchField } from "@heroui/react";
import SortDropdown, { SortOption } from "./SortDropdown";
import { useRouter } from "next/navigation";



const ProductToolbar = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<CategoryOption>('All');
 const [sort, setSort] = useState<SortOption>("featured");
const router = useRouter();
const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (sort) params.set('sort', sort);
    if(category !== 'All')params.set('category',category)

    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch('');
    setCategory('')
    setSort('featured');
router.push('/shop')
  };

  return (
   <div className="container mx-auto flex flex-wrap items-end gap-5 p-2 md:p-5 my-4">
  {/* Search Field */}
  <div className="w-full md:w-[400px]">
    <SearchField value={search} onChange={setSearch} name="search">
      <Label>Search products</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="py-4 text-[18px]" placeholder="Search products..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  </div>

  {/* Dropdowns */}
  <FilterDropdown category={category} setCategory={setCategory} />
  <SortDropdown sort={sort} setSort={setSort} />

 
  <div className="flex items-center gap-3">
    <button
      onClick={handleSearch}
      className="bg-red-800 hover:bg-red-700 text-white font-bold px-8  rounded-xl transition-all shadow-lg py-2 cursor-pointer"
    >
      Search
    </button>
    <button
      onClick={handleClear}
      className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold px-8 py-2 rounded-xl transition-all shadow-lg  cursor-pointer"
    >
      Clear
    </button>
  </div>
</div>
  );
};

export default ProductToolbar;