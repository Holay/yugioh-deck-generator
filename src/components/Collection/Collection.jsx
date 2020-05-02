import React, { useState } from 'react';
import { CardSearch, Showcase } from "../index"
import debounce from 'lodash.debounce'
import './Collection.scss'

function Collection({cards}) {
    const [filteredCards, setFilteredCards] = useState([])

    const filterCards = (searchString, attributes) => {
        const filteredCards = searchString.length>=3? cards.filter(card => {
            let attributeMatch = true;
            if (attributes.length>0){
                if(card.type.toLowerCase().includes('monster')){
                    attributeMatch = attributes.includes(card.attribute) 
                } else {
                    attributeMatch = attributes.includes(card.type.split(' ')[0].toUpperCase())
                }
            }

            
            
            return card.name.toLowerCase().includes(searchString.toLowerCase()) && attributeMatch
        
        }):[];
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