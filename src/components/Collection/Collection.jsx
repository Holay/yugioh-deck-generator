import React, { useState } from 'react';
import { CardSearch, Showcase } from "../index"
import debounce from 'lodash.debounce'
import './Collection.scss'

function Collection({cards}) {
    const [filteredCards, setFilteredCards] = useState([])

    const filterCards = (searchString, attributes) => {
        const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchString.toLowerCase())
        )
        console.log(filteredCards)
        setFilteredCards(filteredCards)
    }


    return (
        <div className="collection-container">

            <CardSearch filterCards={debounce(filterCards,300)}/>
            <Showcase cards={filteredCards} />
        </div>
    )
}

export default Collection