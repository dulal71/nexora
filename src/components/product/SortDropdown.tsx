import { Label, ListBox, Select } from "@heroui/react";

export type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "newest"
  | "popular";


const SORT_OPTIONS = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "newest",
    label: "Newest Arrivals",
  },
  {
    value: "popular",
    label: "Most Popular",
  },
] satisfies {
  value: SortOption;
  label: string;
}[];

type SortDropdownProps = {
  sort: SortOption;
  setSort: (value: SortOption) => void;
};

const SortDropdown = ({ sort, setSort }: SortDropdownProps) => {
  return (
    <Select
      className="w-full md:w-[300px]"
      placeholder="Select one"
      selectedKey={sort}
      onSelectionChange={(key) => setSort(key as SortOption)}
    >
      <Label>Sort Product</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
         <ListBox items={SORT_OPTIONS}>
        {
           SORT_OPTIONS.map(item=>
            <ListBox.Item key={item.value} id={item.value}>
              {item.label}
                <ListBox.ItemIndicator />
                  </ListBox.Item>
                      )}
                      </ListBox>
        </Select.Popover>
    </Select>
  );
};

export default SortDropdown;