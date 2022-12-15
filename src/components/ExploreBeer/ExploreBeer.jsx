import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";


const ExploreBeer = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (e) => {
        // this line of code captures the users input
        const cleanInput = e.target.value.toLowerCase();

        setSearchTerm(cleanInput);
    }

    // make a function here for the search to match input

  return (
    <div className='navBox'>
    <SearchBox label={"Beer"} searchTerm={searchTerm} handleInput={handleInput}/>
    </div>
  )
}

export default ExploreBeer