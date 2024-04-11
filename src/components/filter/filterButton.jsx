import React, { useState } from "react";
import "./filterButton.css"
import { useFont } from "../fonts/fontContext";
import FilterForm from "../filterForm/filterForm";
function FilterButton() {
  const fontStyles = useFont();
  const [filterVisibleRight,setFilterVisibleRight]=useState(false);
  return (
    <div>
      <button style={fontStyles} className="filterBtn" onClick={() => setFilterVisibleRight(true)}>
        <img src="/assets/filterIcon.png"></img>Filter
      </button>
      <FilterForm filterVisibleRight={filterVisibleRight} setFilterVisibleRight={setFilterVisibleRight}></FilterForm>
    </div>
  );
}

export default FilterButton;
