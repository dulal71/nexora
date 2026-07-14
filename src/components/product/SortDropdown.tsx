import {Label, ListBox, Select} from "@heroui/react";

const SortDropdown = () => {
    return (
       <Select className="w-full md:w-[300px]" placeholder="Select one">
      <Label>Sort Product</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox >
          <ListBox.Item >
            Florida
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
    );
};

export default SortDropdown;