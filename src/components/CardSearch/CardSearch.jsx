import React, { useState } from 'react';
import './CardSearch.scss'
import DARK from '../../attributes/DARK.png'
import LIGHT from '../../attributes/LIGHT.png'
import WATER from '../../attributes/WATER.png'
import EARTH from '../../attributes/EARTH.png'
import FIRE from '../../attributes/FIRE.png'
import WIND from '../../attributes/WIND.png'
import TRAP from '../../attributes/TRAP.png'
import SPELL from '../../attributes/SPELL.png'

function CardSearch({ filterCards }) {

    const onChange = (event) => {
        filterCards(event.target.value)
    }

    return(
        <div className="search-container">
            <input type="text" id="search-input" placeholder="Search..." onChange={onChange}/>
            <img className={`attribute-filter`} src={DARK} alt="dark" />
            <img className={`attribute-filter`} src={FIRE} alt="FIRE" />
            <img className={`attribute-filter`} src={WIND} alt="WIND" />
            <img className={`attribute-filter`} src={EARTH} alt="EARTH" />
            <img className={`attribute-filter`} src={LIGHT} alt="LIGHT" />
            <img className={`attribute-filter`} src={WATER} alt="WATER" />
            <img className={`attribute-filter`} src={TRAP} alt="TRAP" />
            <img className={`attribute-filter`} src={SPELL} alt="SPELL" />
        </div>
    )
}

export default CardSearch