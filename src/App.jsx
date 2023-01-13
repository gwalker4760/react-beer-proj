//import { useState } from "react";
import "./App.scss";
import FilterCheckBoxes from "./components/FilterCheckBoxes/FilterCheckBoxes";
import SearchBox from "./components/SearchBox/SearchBox";
//import beersArr from "./data/beers";
import DisplayMapped from "./components/DisplayMapped/DisplayMapped";
import React, { useState, useEffect } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkHighABV, setCheckHighABV] = useState(false);
  const [checkClassic, setCheckClassic] = useState(false);
  const [checkAcidic, setCheckAcidic] = useState(false);

  const [beersArr, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://api.punkapi.com/v2/beers')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, [])

  const handleInput = (e) => {
    // this line of code captures the users input
    const cleanInput = e.target.value.toLowerCase();

    setSearchTerm(cleanInput);
  };

  //These are for filtering data with the checkboxes
  const toggleHighABV = () => {
    setCheckHighABV(!checkHighABV);
  };
  const toggleClassic = () => {
    setCheckClassic(!checkClassic);
  }; 
  const toggleCheckAcidic = () => {
    setCheckAcidic(!checkAcidic);
  }; 

  // make a function here for the search to match input
  const filteredSearch = beersArr.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase();
    if(checkHighABV && beer.abv < 6){
       return false;
    };
    if(checkAcidic && beer.ph > 4){
      return false;
    }
    if(checkClassic){
      const monthIndex = parseInt(beer.first_brewed.substring(0,beer.first_brewed.indexOf("/"))) - 1;
      const year = beer.first_brewed.substring(beer.first_brewed.indexOf("/")+1);
      const firstBrewedDate = new Date(year,monthIndex)
      if(firstBrewedDate > Date.parse("01/01/2010"))
        return false;
    }
    if (searchTerm !=="" && !beerTitleLower.includes(searchTerm)){
      return false;
    }
    return true;
  });

  // make a function that on click displays a search filter

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <div className="container">
        <div className="navBox">
          <SearchBox label={"Beer"} handleInput={handleInput} />
          <FilterCheckBoxes
            label1={"High ABV (>6.0%)"}
            label2={"Classic Range"}
            label3={"Acidic (ph <4)"}
            toggleHighABV = {toggleHighABV}
            toggleClassic = {toggleClassic}
            toggleCheckAcidic = {toggleCheckAcidic}
          />
        </div>
        <DisplayMapped
          beersArr={beersArr}
          filteredSearch={filteredSearch}
          searchTerm={searchTerm}
          checkHighABV={checkHighABV}
          checkClassic={checkClassic}
          checkAcidic={checkAcidic}
        />
      </div>
    </div>
  );
}

export default App;
