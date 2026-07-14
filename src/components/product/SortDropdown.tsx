import { Label, ListBox, Select } from "@heroui/react";

export type SortOption = "featured" | "price-low" | "price-high" | "newest";

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-low": "Price: Low to High",
  "price-high": "Price: High to Low",
  newest: "Newest Arrivals",
};

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
        <ListBox items={Object.entries(SORT_LABELS)}>
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

export default SortDropdown;