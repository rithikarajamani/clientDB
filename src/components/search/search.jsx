import React from "react";
import { useState } from "react";
import { useFont } from "../fonts/fontContext";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

function Search() {
  const fontStyles = useFont();
  const [filters, setFilters] = useState({
    global: {
      value: "",
      matchMode: FilterMatchMode.CONTAINS,
    },
  });
  return (
    <div styles={fontStyles}>
      <span className="p-input-icon-left">
        <i className="fa fa-search"></i>
        <InputText
          placeholder="Search"
          value={filters.global.value}
          onChange={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </span>
    </div>
  );
}

export default Search;
