import React, { useState, useContext } from 'react'
import { DeckListContext } from "../../contexts/DeckListContext"
import { Chip } from '../index';
import './Deck.css'

function Deck() {
    const [deckName, setDeckName] = useState('')
    const { deckList } = useContext(DeckListContext)
    const onChange = (event) =>{
        setDeckName(event.target.value)
    }
    const chips = deckList.map(card=><Chip card={card} key={card.name}/>)

    return(
    <div className='deck-list'>
        <div className="deck-name-container">
            <input type="text" name="deck-name" className="deck-name" placeholder="Deck Name" onChange={onChange}/>
        </div>
        <div className="chip-container">
            {chips}
        </div>
    </div>)
}

export default Deck;