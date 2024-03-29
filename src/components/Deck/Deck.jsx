import React, { useState, useContext } from 'react'
import { DeckListContext } from "../../contexts/DeckListContext"
import { Chip } from '../index';
import './Deck.scss'

function Deck() {
    const [deckName, setDeckName] = useState()
    const [tab, setTab] = useState('deck');
    const { deckList, extraDeckList, reducedDeckList, reducedExtraDeckList, removeCard, downloadDecks } = useContext(DeckListContext)
    const onChange = (event) => {
        setDeckName(event.target.value)
    }
    const chips = tab === 'deck' ? reducedDeckList.map(card => <Chip removeCard={removeCard} card={card} key={card.name} type="deck" />) : reducedExtraDeckList.map(card => <Chip removeCard={removeCard} type="extraDeck" card={card} key={card.name} />);
    const ready = deckList.length >= 40;
    return (
        <div className='deck-list'>
            <div className="deck-name-container">
                <input type="text" name="deck-name" className="deck-name" placeholder="Deck Name" onChange={onChange} />
                <button onClick={() => { downloadDecks(deckName) }} disabled={!ready} className={`btn draw-border ${ready ? 'ready' : ''}`} id="export-button"><i class="fas fa-download"></i></button>

            </div>
            <div className="tabs">
                <button className={`${tab === 'deck' ? 'active' : ''}`} onClick={() => setTab('deck')}>Deck {deckList.length}/60</button>
                <button className={`${tab === 'extraDeck' ? 'active' : ''}`} onClick={() => setTab('extraDeck')}>Extra Deck {extraDeckList.length}/15</button>
            </div>
            <div className="chip-container">
                {chips}
            </div>

        </div>)
}



export default Deck;