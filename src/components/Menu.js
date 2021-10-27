import React from 'react'

function Menu(props) {
    return (
        <div class="menu">
            <a href="/" class="global--bold return"><i class="fas fa-arrow-left"></i></a>
            <h2>{props.text}</h2>
        </div>
    )
}

export { Menu }