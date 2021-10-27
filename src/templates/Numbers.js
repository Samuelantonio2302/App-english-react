import React from 'react'
import { Menu } from '../components/Menu'
import { Context } from '../utils/context'

function Numbers() {
    const {
        numbers,
        numbersLarge
    } = React.useContext(Context)

    return (
        <React.Fragment>
            <Menu text="Number" />
            <div className="numbers">
                <div class="wrapp">
                    <div class="grid">
                        {numbers.map(numb => (
                            <div class="card-play">
                                <div class="number">
                                    <div class="number-render">
                                        <h1>{numb.number}</h1>
                                        {numb.class.map(i => (
                                            <i className={i}></i>
                                        ))}
                                    </div>
                                    <div class="name">
                                        <h2><strong>{numb.name}</strong></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid">
                        {numbersLarge.map(numb => (
                            <div class="card-play">
                                <div class="number">
                                    <div class="number-render">
                                        <h1>{numb.number}</h1>
                                    </div>
                                    <div class="name">
                                        <h2><strong>{numb.name}</strong></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/number/play" class="btn-special">Practicar</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Numbers }