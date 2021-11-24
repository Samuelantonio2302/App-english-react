import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="contenedor-header">
                <h1>Practice English</h1>
                <p>Empieza a practicar tu ingles ahora mismo</p>
                <a href="#play" className="btn">Empezar</a>
            </div>
        </header>
    )
}

export { Header }