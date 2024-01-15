import React from "react";

const Gender = () => {
  return (
    <div className="genderFilter">
      <h4>Gender</h4>
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
      >
        <option value="" disabled hidden>
          Genders
        </option>
        <option value="Male">Male </option>
        <option value="Female">Female </option>
        <option value="Other">Other </option>
      </select>
    </div>
  );
};

export default Gender;
