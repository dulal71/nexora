'use client';
import { Label, ListBox, Select } from "@heroui/react";





export type CategoryOption = "All" | "Men" | "Women" ;

const ALL_CATEGORY: Record<CategoryOption, string> = {
  All: "All",
  Men: "Men",
  Women: "Women",
};

type FilterDropdownProps = {
 category:CategoryOption;
 setCategory: (value: CategoryOption) => void;
};

const FilterDropdown = ({ category, setCategory }: FilterDropdownProps) => {
  return (
   <Select
         className="w-full md:w-[300px]"
         placeholder="Select one"
         selectedKey={category}
         onSelectionChange={(key) => setCategory(key as CategoryOption)}
       >
         <Label>Sort Product</Label>
         <Select.Trigger>
           <Select.Value />
           <Select.Indicator />
         </Select.Trigger>
         <Select.Popover>
           <ListBox items={Object.entries(ALL_CATEGORY)}>
             {([key, label]) => (
               <ListBox.Item key={key} id={key}>
                 {label}
                 <ListBox.ItemIndicator />
               </ListBox.Item>
             )}
           </ListBox>
         </Select.Popover>
       </Select>
  );
};

export default FilterDropdown;