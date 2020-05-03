import React, { useState, useContext } from 'react'
import { DeckListContext } from "../../contexts/DeckListContext"
import { Chip } from '../index';
import './Deck.css'

function Deck() {
    const [deckName, setDeckName] = useState('')
    const [tab, setTab] = useState('deck');
    const { deckList, extraDeckList } = useContext(DeckListContext)
    const onChange = (event) =>{
        setDeckName(event.target.value)
    }
    const chips = tab === 'deck' ? deckList.map(card => <Chip card={card} key={card.name} />) : extraDeckList.map(card => <Chip card={card} key={card.name} />);

    return(
    <div className='deck-list'>
        <div className="deck-name-container">
            <input type="text" name="deck-name" className="deck-name" placeholder="Deck Name" onChange={onChange}/>
        </div>
        <div className="tabs">
                <button className={`${tab==='deck'?'active':''}`} onClick={() => setTab('deck')}>Deck</button>
                <button className={`${tab === 'extraDeck' ? 'active' : ''}`} onClick={() => setTab('extraDeck')}>Extra Deck</button>
        </div>
        <div className="chip-container">
            {chips}
        </div>
    </div>)
}

export default Deck;