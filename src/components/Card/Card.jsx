import React, { useContext } from 'react';
import { DeckListContext } from '../../contexts/DeckListContext';
import Popup from "reactjs-popup";
import './Card.scss';

function Card({card, addCard}){
    const { reducedDeckList, reducedExtraDeckList } = useContext(DeckListContext)
    const deckCard = reducedDeckList.find(deckCard => deckCard.name === card.name) || reducedExtraDeckList.find(deckCard => deckCard.name === card.name);
    let maxed = false;
    if(deckCard){
        maxed = deckCard.count === 3;
    }
    return(
        <Popup trigger={<div className="card" onClick={() => addCard(card)}>
            <img className={`${maxed ? 'maxed' : ''}`} src={card.card_images[0].image_url} alt={card.name} />
            <p>
                {card.name}
            </p>
        </div>}
            on="hover"
            mouseEnterDelay={1000}
            arrow={false}
            contentStyle={{background: 'none', border: 'none'}}
            keepTooltipInside=".outlet"
        >

            <img src={card.card_images[0].image_url} alt={card.name} onClick={() => addCard(card)}/>
        </Popup>
    )
}

export default Card;

