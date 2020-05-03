import React, { useContext } from 'react';
import { DeckListContext } from '../../contexts/DeckListContext'
import './Card.scss'

function Card({card, addCard}){
    const { reducedDeckList, reducedExtraDeckList } = useContext(DeckListContext)
    const deckCard = reducedDeckList.find(deckCard => deckCard.name === card.name) || reducedExtraDeckList.find(deckCard => deckCard.name === card.name);
    let maxed = false;
    if(deckCard){
        maxed = deckCard.count === 3;
    }
    return(
        <div className="card" onClick={()=>addCard(card)}>
            <img className={`${maxed?'maxed':''}`} src={card.card_images[0].image_url} alt={card.name}/>
            <p>
                {card.name}
            </p>
        </div>
    )
}

export default Card;