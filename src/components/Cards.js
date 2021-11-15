import React from 'react'

function Cards(props) {
    return (
        <div className="wrapp">
            <div className="cards" id="play">
                {props.children}
            </div>
        </div>
    )
}

export { Cards }