import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import "./keyword.css";

const KeyWord = () => {

  const [searchInput, setSearchInput] = useState("");

  const [selectedKeyword, setSelectedKeyword] = useState("");


  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("Search keyword:", searchInput);

    setSearchInput("");
  };


  const handleCancelSearch = () => {

    setSearchInput("");
  };


  const handleKeywordClick = (keyword) => {

    console.log("Selected keyword:", keyword);
    setSelectedKeyword(keyword);
    // Implement your action here
  };


  const keywords = [
    "children",
    "safety",
    "scam",
    "digital",
    "citizens",
    "test",
    "privacy",
    "data",
    "settings",
    "security",
    "gaming",
    "attacks",
    "device",
    "phishing",
    "virus",
  ];

  return (
    <div className="nameWrapper">

      <div className="searchKeywords">
        <div className="keyName">
          <p>Keywords</p>
        </div>
        <div className="searchName">
          <p>Search using keywords</p>
        </div>

        <form onSubmit={handleSearchSubmit}>
          <div className="totalIcon">

            <button type="submit" className="searchIcon">
              <LuSearch />
            </button>

            <input
              type="text"
              placeholder="Search keywords"
              className="inputHolder"
              value={searchInput}
              onChange={handleSearchChange}
            />
            {searchInput && (
              <button
                type="button"
                className="cancelIcon"
                onClick={handleCancelSearch}
              >
                <RxCross2 />
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="keyWrapper">
        <ul className="keyLists">
          {keywords.map((keyword, index) => (
            <li
              key={index}
              className={`keyList ${
                selectedKeyword === keyword ? "active" : ""
              }`}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyWord;
