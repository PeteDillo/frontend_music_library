import React, { useState } from "react";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
import SearchBar from "./SearchBar/Searchbar";

function App() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );
      console.log(response.data);

      setSongs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={getSongs}>Show Song</button>

      <MusicTable songs={songs} />
      <SearchBar setSongs={setSongs} getSongs={setSongs} songs={songs} />
    </div>
  );
}

export default App;
