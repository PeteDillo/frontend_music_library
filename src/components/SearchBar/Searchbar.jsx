import React, { useState } from "react";

const SearchBar = (props) => {
  const { songs, setSongs, getSongs } = props;
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    getSongs();

      let results = songs.filter((song) => {
        if (song.includes(searchTerm)) {
          return song;
        }
      });
      setSongs(results);
    //set returned songs into table
  }
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          name="searchTerm"
          title="searchTerm"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
