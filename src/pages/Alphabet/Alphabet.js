import React from 'react';
import { v4 as uuid } from 'uuid';
import { Menu } from '../../components/Menu';
import { Context } from '../../utils/context';
import { Link } from 'react-router-dom';
import '../../styles/alphabet.component.scss';

function Alphabet() {
    const { Alphabet } = React.useContext(Context)
    return (
        <React.Fragment>
            <Menu text="Alfabet" />
            <div className="alphabet">
                {Alphabet.map(letter => (
                    <div className="alphabet-component wrapp" key={uuid}>
                        <div className="alphabet-letter">
                            <h1>{letter.letter}</h1>
                        </div>
                        <div className="name">
                            <h2><strong>{letter.p}</strong></h2>
                        </div>
                    </div>
                ))}
                <Link to="/play/numbers/practice/modulos" className="btn">Practicar</Link>
            </div>
        </React.Fragment>
    )
}

export { Alphabet }