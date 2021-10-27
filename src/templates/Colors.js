import React from 'react'
import { Menu } from '../components/Menu'
import { Context } from '../utils/context'

function Colors() {
    const {
        colors,
    } = React.useContext(Context)

    return (
        <React.Fragment>
            <Menu text="Colors" />
            <diV className="colors">
                <div className="color">
                    <div className="grid">
                        {colors.map(color => (
                            <div class="card-play">
                                <div class="card-color" style={{ backgroundColor: color.color }}>
                                    <h1>{color.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/colors/play" class="btn-special">Practicar</a>
                </div>
            </diV>
        </React.Fragment>
    )
}
export { Colors }