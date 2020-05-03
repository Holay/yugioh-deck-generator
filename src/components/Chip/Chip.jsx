import React, { useState, useEffect } from 'react';
import DARK from '../../attributes/DARK.png';
import LIGHT from '../../attributes/LIGHT.png';
import WATER from '../../attributes/WATER.png';
import EARTH from '../../attributes/EARTH.png';
import FIRE from '../../attributes/FIRE.png';
import WIND from '../../attributes/WIND.png';
import TRAP from '../../attributes/TRAP.png';
import SPELL from '../../attributes/SPELL.png';
import './Chip.scss'

const attributes = {
    DARK,
    LIGHT,
    WATER,
    FIRE,
    WIND,
    EARTH
}

function Chip({ card, removeCard, type}){
    const [ show, setShow ] = useState('')
    let color
    let attribute
    switch(card.type){
        case 'Effect Monster':
            color = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,97,50,1) 100%)';
            break;
        case 'Normal Monster':
            color = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(210,155,74,1) 100%)";
            break;
        case 'Trap Card':
            color = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(137,10,175,1) 100%)"
            break;
        case 'Spell Card':
            color = "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(3, 139, 117) 100%)"
            break;
        case 'Pendulum Effect Monster':
            color = "linear-gradient(0deg, rgb(3, 139, 117) 0%, rgb(193, 97, 50) 100%)"
            break;
        case 'Synchro Monster':
            color = "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(225, 221, 218) 100%)"
            break;
        case 'XYZ Monster':
            color = "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(40, 44, 47) 100%)"
            break;
        case 'Fusion Monster':
            color = "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(141, 77, 152) 100%)"
            break;
        case 'XYZ Pendulum Effect Monster':
            color = "linear-gradient(0deg, rgb(3, 139, 117) 0%, rgb(40, 44, 47) 100%)"
            break;
        case 'Pendulum Effect Fusion Monster':
            color = "linear-gradient(0deg, rgb(3, 139, 117) 0%, rgb(141, 77, 152) 100%)"
            break;
        case 'Pendulum Normal Monster':
            color = "linear-gradient(0deg, rgb(3, 139, 117) 0%, rgba(210,155,74,1) 100%)"
            break;
        case 'Synchro Pendulum Effect Monster':
            color = "linear-gradient(0deg, rgb(3, 139, 117) 0%, rgb(225, 221, 218) 100%)"
            break;
        default:
            color ="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,97,50,1) 100%)"
    }
    if(!card.attribute){
        attribute = card.type==="Spell Card"? SPELL:TRAP;
    } else{
        attribute = attributes[card.attribute]
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow('show');
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className={`chip ${show}`} style={{background: color}} onClick={()=>removeCard(card, type)}>
            <div className="chip-count">
                {card.count}
            </div>
            <div className="chip-name">{card.name}</div>
            <img className="chip-attribute" src={attribute} alt="attribute" />
        </div>
    )
}
export default Chip;