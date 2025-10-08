import React, { useEffect, useState } from "react";

const Search = ({ data, setSearchData,setLoading }) => {
  const [inputField, setInputField] = useState("");
  const handleOnChange = (e) => {
    setLoading(true)
    const searchElement = e.target.value.trim();
    const lowerCaseSearch = searchElement.toLowerCase();
    setInputField(lowerCaseSearch);
  };

  useEffect(() => {
    const filterSearch = data.filter((e) =>
      e.title.trim().toLowerCase().includes(inputField)
    );

    setSearchData([...filterSearch]);
    setLoading(false)
  }, [inputField, setSearchData, data]);

  return (
    <label className="input">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        name="search"
        defaultValue={inputField}
        onChange={handleOnChange}
        required
        placeholder="Search Apps"
      />
    </label>
  );
};

export default Search;
