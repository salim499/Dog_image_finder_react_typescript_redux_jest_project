import React from "react";

interface DropdownProps {
  items: string[];
  selectedItem: string | number | null;
  defaultText: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Index: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  defaultText,
  handleChange,
}) => {
  return (
    <select
      className="form-control form-control-sm bg-light m-3 w-75 text-center fs-4"
      value={selectedItem ? selectedItem : defaultText}
      onChange={handleChange}
    >
      <option>{defaultText}</option>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Index;
