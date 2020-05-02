import React from 'react';
import './Card.scss'

function Card({card, addCard}){

    return(
        <div className="card" onClick={()=>addCard(card)}>
            <img src={card.card_images[0].image_url} alt={card.name}/>
            <p>
                {card.name}
            </p>
        </div>
    )
}

export default Card;