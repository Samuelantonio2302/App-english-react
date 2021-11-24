import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className="card" key={props.key}>
            <div className="card-content">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} className="btn-c"><FontAwesomeIcon icon={faAngleDoubleRight} /> Empezar</Link>
            </div>
        </div>
    )
}
export { Card }