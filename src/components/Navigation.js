import React from 'react';
import {Link} from 'react-router-dom'
import './Navigation.css';

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>&nbsp;
            <Link to={{pathname: '/about', state: {id: 'id'}, }}>About</Link>
        </div>
    );
}

export default Navigation;