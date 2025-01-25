import React from "react";

function Index({ items, selectedItem, defaultText, handleChange }) {
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
}

export default Index;
