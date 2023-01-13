import React from 'react'
import "./BeerTiles.scss";


const BeerTiles = (props) => {

  const { beerInfo,  } = props;
  // console.log(beerInfo);
  // console.log(filteredSearch);

  return (
    <div className='tiles'>
      <img className='tiles__img' src={beerInfo.image_url} alt="Beer Images" />
      <h3 className='tiles__name'>{beerInfo.name}</h3>
      <p className='tiles__info'>{`ABV level ${beerInfo.abv}`}</p>
      <p className='tiles__info'>{`Year brewed ${beerInfo.first_brewed}`}</p>
      <p className='tiles__info'>{`PH level ${beerInfo.ph}`}</p>
      {/* <p className='tiles__info'>{beerInfo.description}</p> */}
    </div>
  )
}

export default BeerTiles