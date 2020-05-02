import React from 'react';
import './Card.scss'

function Card({card}){
    return(
        <div className="card">
            <img src={card.card_images[0].image_url} alt={card.name}/>
            <p>
                {card.name}
            </p>
        </div>
    )
}

export default Card;