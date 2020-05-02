import React, { useContext } from 'react'
import { DeckListContext } from '../../contexts/DeckListContext'
import { Card } from '../index'
import './Showcase.scss'

function Showcase({ cards }) {
    const { addCard } = useContext(DeckListContext)
    const cardComponents = cards.length > 0 ? cards.map(card => <Card card={card} key={card.name} addCard={addCard} />) : []
    return (
        <div className="showcase-container">
            
            {cardComponents}

        </div>
    )

}

export default Showcase;