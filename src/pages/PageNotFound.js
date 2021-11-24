import React from 'react';
import { Menu } from '../components/Menu';

function PageNotFound() {
    return (
        <div>
            <div className="message"><h1>Upps, lo sentimos no encontramos lo que buscas</h1></div>
            <Menu text="PageNotFound" />
        </div>
    )
}

export { PageNotFound }