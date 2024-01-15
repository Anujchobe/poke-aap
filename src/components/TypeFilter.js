import React from "react";

const TypeFilter = ({ searchType, handleSearch }) => {
  return (
    <div className="typeFilter">
      <h4>Type</h4>
      <select
        style={{
          width: "194px",
          height: "57px",
          borderRadius: "8px",
          background: "#C9DDE2",
          border: "none",
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
        defaultValue=""
        value={searchType}
        onChange={(e) => handleSearch(e)}
      >
        <option value="" disabled hidden>
          {searchType || "   Types"}
        </option>
        <option value="Normal">Normal </option>
        <option value="Fighting">Fighting </option>
        <option value="Flying">Flying </option>
        <option value="Poison">Poison </option>
        <option value="Ground">Ground </option>
        <option value="Rock">Rock </option>
      </select>
    </div>
  );
};

export default TypeFilter;
