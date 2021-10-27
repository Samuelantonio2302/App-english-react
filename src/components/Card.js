import React from 'react'

function Card(props) {
    return (
        <div class="card">
            <div class="card-image"></div>
            <div class="card-content">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} class="btn-special">Empezar</a>
            </div>
        </div>
    )
}
export { Card }