import React from 'react'

function Cards(props) {
    return (
        <div className="wrapp">
            <div className="cards">
                {props.children}
            </div>
        </div>
    )
}

export { Cards }