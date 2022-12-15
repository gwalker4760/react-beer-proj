import beersArr from "../../../data/beers";
import BeerTiles from "../BeerTiles/BeerTiles";

const Beer = () => {

    // console.log(beers);
    const mappedResults = beersArr.map((beer, i) => {
      return <BeerTiles beerInfo = {beer} key={i} />
    })
  
    return (
      <div >
      {mappedResults}
      </div>
    )
  }

export default Beer