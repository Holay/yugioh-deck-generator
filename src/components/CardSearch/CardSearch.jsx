import React, { useState, useEffect } from 'react';
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
    const [attributeFilters, setAttributeFilters] = useState([]);
    const [searchString, setSearchString] = useState('');
    const onChange = (event) => {
        setSearchString(event.target.value)
        filterCards(event.target.value, attributeFilters)
    }
    const onFilterClick = (e) => {
        const index = attributeFilters.indexOf(e.target.name)
        if(index>=0){
            attributeFilters.splice(index, 1);
        }else{
            attributeFilters.push(e.target.name)
        }
        setAttributeFilters([...attributeFilters])
    }
    useEffect(()=>{
        filterCards(searchString,attributeFilters)
    },[attributeFilters])

    return(
        <div className="search-container">
            <input type="text" id="search-input" placeholder="Search..." onChange={onChange} autoComplete="off"/>
            <img className={`attribute-filter ${attributeFilters.includes('DARK')?'active-filter':''}`} name="DARK" src={DARK} alt="dark" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('FIRE')?'active-filter':''}`} name="FIRE" src={FIRE} alt="FIRE" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('WIND')?'active-filter':''}`} name="WIND" src={WIND} alt="WIND" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('EARTH')?'active-filter':''}`} name="EARTH" src={EARTH} alt="EARTH" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('LIGHT')?'active-filter':''}`} name="LIGHT" src={LIGHT} alt="LIGHT" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('WATER')?'active-filter':''}`} name="WATER" src={WATER} alt="WATER" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('TRAP')?'active-filter':''}`} name="TRAP" src={TRAP} alt="TRAP" onClick={onFilterClick}/>
            <img className={`attribute-filter ${attributeFilters.includes('SPELL')?'active-filter':''}`} name="SPELL" src={SPELL} alt="SPELL" onClick={onFilterClick}/>
        </div>
    )
}

export default CardSearch