import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import holayLogo from '../../Holay.png'

function header() {
    // eslint-disable-next-line
    let location = useLocation()
    return (
        <div className="header">
            <img className="holay-logo" src={holayLogo} alt="Holay"></img>
            <div className="nav-controls">

            <Link className="router-link" to="/">
                <div className={`link-container ${location.pathname.includes('structure') ? '' : 'active'}`}>
                    Card Search
            </div>
            </Link>
            <Link className="router-link" to="/structure">
                <div className={`link-container ${location.pathname.includes('structure') ? 'active' : ''}`}>
                    Structure Decks
            </div>
            </Link>
            </div>
        </div>
    )
}

export default header;