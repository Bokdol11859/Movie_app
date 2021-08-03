import React from 'react';
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    ) 
}

export default Navigation;