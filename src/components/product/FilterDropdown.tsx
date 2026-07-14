import {Label, ListBox, Select} from "@heroui/react";

const FilterDropdown = () => {
    return (
        <Select className="w-full md:w-[300px]" placeholder="Select one">
      <Label>Filter</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item >
            Washington
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
    );
};

export default FilterDropdown;