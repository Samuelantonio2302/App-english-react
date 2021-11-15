import React from 'react'
import { Menu } from '../../components/Menu';
import { Context } from '../../utils/context'

function Alphabet() {
    const { Alphabet } = React.useContext(Context)
    return (
        <React.Fragment>
            <Menu text="Alfabet" />
            <div className="alphabet">
                <div className="wrapp">
                    <div className="grid">
                        {Alphabet.map(letter => (
                            <div class="card-play">
                                <div class="alphabet">
                                    <div class="alphabet-render">
                                        <h1>{letter.letter}</h1>
                                    </div>
                                    <div class="name">
                                        <h2><strong>{letter.p}</strong></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/play/numbers/practice/modulos" class="btn-special">Practicar</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Alphabet }