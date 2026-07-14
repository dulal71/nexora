'use client';
import { Label, ListBox, Select } from "@heroui/react";





export type CategoryOption = "All" | "Men" | "Women"|'Kids'|'Accessories' ;

const CATEGORY_OPTIONS = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Men",
    label: "Men",
  },
  {
    value: "Women",
    label: "Women",
  },
  {
    value: "Kids",
    label: "Kids",
  },
  {
    value: "Accessories",
    label: "Accessories",
  },
] satisfies {
  value: CategoryOption;
  label: string;
}[];

type FilterDropdownProps = {
 category:CategoryOption;
 setCategory: (value: CategoryOption) => void;
};

const FilterDropdown = ({ category, setCategory }: FilterDropdownProps) => {
  return (
   <Select
         className="w-full md:w-[300px]"
         placeholder="Select Category"
         selectedKey={category}
         onSelectionChange={(key) => setCategory(key as CategoryOption)}
       >
         <Label>Filter By Category</Label>
         <Select.Trigger>
           <Select.Value />
           <Select.Indicator />
         </Select.Trigger>
         <Select.Popover>
           <ListBox items={CATEGORY_OPTIONS}>
            {
              CATEGORY_OPTIONS.map(item=>
                <ListBox.Item key={item.value} id={item.value}>
                 {item.label}
                 <ListBox.ItemIndicator />
               </ListBox.Item>
              )
              
            }
             
           </ListBox>
         </Select.Popover>
       </Select>
  );
};

export default FilterDropdown;