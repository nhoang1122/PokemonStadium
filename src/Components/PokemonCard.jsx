import React from 'react'

import './PokemonCard.css'

const PokemonCard = ({id, name, image, type}) => {

    const style = type + " thumb-container"

    return (
    <div className={style}>
        <div className="number">
            <h3>ID : {id}</h3>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
            <h3>{name.toUpperCase()}</h3>
            <h3>TYPE : {type.toUpperCase()}</h3>
        </div>
    </div>
  )
}

export default PokemonCard