import React from "react";

/**
 * Here we create a search component (child component) that will manage the search state then we pass in some props which we receive from the parent component.
 *
 */

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
