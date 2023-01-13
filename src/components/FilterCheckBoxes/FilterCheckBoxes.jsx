import "./FilterCheckBoxes.scss";

const FilterCheckBoxes = (props) => {
  const { 
    label1, 
    label2, 
    label3, 
    toggleHighABV, 
    toggleClassic, 
    toggleCheckAcidic
  } = props;

  return (
    <div>
      <div className="filterOptions">
        <label htmlFor={label1}>{label1}</label>
        <input type="checkbox" name={label1} onClick = {toggleHighABV}/>
      </div>

      <div className="filterOptions">
        <label htmlFor={label2}>{label2}</label>
        <input type="checkbox" name={label2} onClick = {toggleClassic}/>
      </div>

      <div className="filterOptions">
        <label htmlFor={label3}>{label3}</label>
        <input type="checkbox" name={label3} onClick = {toggleCheckAcidic}/>
      </div>
    </div>
  );
};

export default FilterCheckBoxes;
