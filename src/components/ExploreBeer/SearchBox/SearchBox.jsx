import FilterCheckBoxes from "./FilterCheckBoxes";
import "./SearchBox.scss"

const SearchBox = (props) => {
    const { label, searchTerm, handleInput } = props;
  return (
    <div className="nav-box">
    <form className="search-box">
        <label htmlFor={label} className="search-box__label">{label}</label>
        <input type="text" name={label} className="search-box__input" value={searchTerm} onInput={handleInput}/>
    <FilterCheckBoxes label1={"High ABV (>6.0%)"} label2={"Classic Range"} label3={"Acidic (ph <4)"} />
    </form>
    </div>
  )
}

export default SearchBox