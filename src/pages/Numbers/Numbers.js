import React from 'react';
import { v4 as uuid } from 'uuid'
import { Menu } from '../../components/Menu';
import { Context } from '../../utils/context';
import '../../styles/number.component.scss';
import { Link } from 'react-router-dom';

function Numbers() {
    const {
        Numbers,
        NumbersLarge
    } = React.useContext(Context)

    return (
        <React.Fragment>
            <Menu text="Number" />

            <div className="numbers">
                {Numbers.map(numb => (
                    <div className="number-component wrapp" key={uuid}>
                        <div className="number-render">
                            <h1>{numb.number}</h1>
                            <div>
                                {numb.class.map(i => (
                                    <i className={i}></i>
                                ))}
                            </div>
                        </div>
                        <div className="name">
                            <h2><strong>{numb.name}</strong></h2>
                        </div>
                    </div>
                ))}

                {NumbersLarge.map(numb => (
                    <div className="number-component wrapp" key={uuid}>
                        <div className="number-render">
                            <h1>{numb.number}</h1>
                        </div>
                        <div className="name">
                            <h2><strong>{numb.name}</strong></h2>
                        </div>
                    </div>
                ))}

                <Link to="/number/play" className="btn">Practicar</Link>
            </div>
        </React.Fragment >
    )
}

export { Numbers }