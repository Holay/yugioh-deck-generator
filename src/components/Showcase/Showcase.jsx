import React from 'react'
import { Card } from '../index'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Showcase.scss'

function Showcase({ cards }) {

    const cardComponents = cards.length > 0 ? cards.map(card => <Card card={card} key={card.name} />) : []

    return (
        <div className="showcase-container">
            
            {cardComponents}

        </div>
    )

}

export default Showcase;