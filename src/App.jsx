import { useState } from "react";
import "./App.scss";
import FilterCheckBoxes from "./components/FilterCheckBoxes/FilterCheckBoxes";
import BeerTiles from "./components/BeerTiles/BeerTiles";
import SearchBox from "./components/SearchBox/SearchBox";
import beersArr from "./data/beers";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [highABV, setHighABV] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acidic, setAcidic] = useState(false);

  const mappedResults = beersArr.map((beer, i) => {
    return <BeerTiles beerInfo={beer} key={i} />;
  });

  const handleInput = (e) => {
    // this line of code captures the users input
    const cleanInput = e.target.value.toLowerCase();

    setSearchTerm(cleanInput);
}

  // make a function here for the search to match input
  const filteredSearch = beersArr.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase()

    return beerTitleLower.includes(searchTerm) && beer.image_url;
  })

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <div className="container">
        <div className="navBox">
          <SearchBox
            label={"Beer"}
            filteredSearch={filteredSearch}
            handleInput={handleInput}
          />
          <FilterCheckBoxes
            label1={"High ABV (>6.0%)"}
            label2={"Classic Range"}
            label3={"Acidic (ph <4)"}
          />
        </div>
        <div className="tile__layout" >{mappedResults} </div>
      </div>
    </div>
  );
}

export default App;
