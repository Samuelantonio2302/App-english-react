import React from 'react';
import '../../styles/colors.component.scss';
import { Menu } from '../../components/Menu';
import { Context } from '../../utils/context';
import { Link } from 'react-router-dom';

function Colors() {
    const {
        Colors,
    } = React.useContext(Context)

    return (
        <React.Fragment>
            <Menu text="Colors" />
            <div className="colors-component">
                <div className="color wrapp">
                    {Colors.map(color => (
                        <div className="card-color" style={{ backgroundColor: color.color }}>
                            <h1>{color.name}</h1>
                        </div>
                    ))}
                </div>
                <Link to="/colors/play" className="btn">Practicar</Link>
            </div>
        </React.Fragment>
    )
}
export { Colors }