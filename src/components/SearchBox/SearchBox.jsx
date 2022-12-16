import "./SearchBox.scss"
// import { useState } from "react";

const SearchBox = (props) => {
  const { label, filteredSearch, handleInput } = props;
  
  console.log(filteredSearch)

  return (
    <div className="nav-box">
    <form className="search-box">
        <label htmlFor={label} className="search-box__label">{label}</label>
        <input type="text" name={label} className="search-box__input"  onInput={handleInput}/>
    </form>
    </div>
  )
}

export default SearchBox