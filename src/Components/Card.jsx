import React from 'react'

import './Card.css'

const Card = ({pokemon, loading}) => {
  return (
    <div>
        {
            loading ? <h1>LOADING...</h1> :
                pokemon.map((item) => {
                    console.log("ITEM: ",item)
                    return (
                        <div>
                            <div className="card">
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name.toUpperCase()}</h2>
                                <h2>{item.types[0].type.name.toUpperCase()}</h2>
                            </div>
                        </div>
                    )
                })
        }
    </div>
  )
}

export default Card