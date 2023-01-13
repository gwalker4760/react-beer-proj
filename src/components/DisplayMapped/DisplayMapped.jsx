import BeerTiles from "../BeerTiles/BeerTiles";
import "./DisplayMapped.scss";

const DisplayMapped = (props) => {
  const {
    beersArr,
    filteredSearch,
    searchTerm,
    checkHighABV,
    checkClassic,
    checkAcidic,
  } = props;

  const mappedResults = beersArr.map((beer, i) => {
    return <BeerTiles beerInfo={beer} key={i} />;
  });

  const mappedFiltersBeers = filteredSearch.map((beer, i) => {
    return <BeerTiles beerInfo={beer} key={i} />;
  });

  return (
    <div className="tile__layout">
      {(searchTerm || checkHighABV || checkClassic || checkAcidic) ? mappedFiltersBeers : mappedResults}
    </div>
  );
};

export default DisplayMapped;
