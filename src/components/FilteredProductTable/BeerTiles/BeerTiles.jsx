import React from 'react'
import "./BeerTiles.scss";


const BeerTiles = (props) => {

  const { beerInfo } = props;
  console.log(beerInfo);

  return (
    <div className='tiles'>
      <img src={beerInfo.image_url} alt="Beer Images" />
      <p className='tiles__name'>{beerInfo.name}</p>
      <p className='tiles__info'>{beerInfo.description}</p>
    </div>
  )
}

export default BeerTiles