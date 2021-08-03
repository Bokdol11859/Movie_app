import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <ul className="navbar">
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to='/about'>About</Link></a></li>
        </ul>
    ) 
}

export default Navigation;