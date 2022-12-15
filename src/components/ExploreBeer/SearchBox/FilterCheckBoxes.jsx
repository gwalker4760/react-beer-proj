import "./FilterCheckBoxes.scss";

const FilterCheckBoxes = (props) => {
  const { label1, label2, label3 } = props;

  return (
    <div>
      <div className="filterOptions">
        <label htmlFor={label1}>{label1}</label>
        <input type="checkbox" name="FilterCheckBoxes" />
      </div>

      <div className="filterOptions">
        <label htmlFor={label2}>{label2}</label>
        <input type="checkbox" name="FilterCheckBoxes" />
      </div>

      <div className="filterOptions">
        <label htmlFor={label3}>{label3}</label>
        <input type="checkbox" name="FilterCheckBoxes" />
      </div>
    </div>
  );
};

export default FilterCheckBoxes;