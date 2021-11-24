import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <div className="menu">
            <Link to="/" className="global--bold return"><i className="fas fa-arrow-left"></i></Link>
            <h2>{props.text}</h2>
        </div>
    )
}

export { Menu }