import React from 'react'

function NumberPlay() {
    return (
        <React.Fragment>
            <div className="number">
                <div className="sub-menu">
                    <h1 id="message">ds</h1>
                    <button className="btn-special" id="start">Start</button>
                </div>
                <div className="card-play">
                    <div className="number" id="number">
                        <div className="number-render" id="numberRender">
                            <h1 id="numb">..</h1>
                        </div>
                        <div className="inputs">
                            <input type="text" id="input" placeholder="What´s Number?" />
                            <button className ="btn-second" id="very">Validar</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export { NumberPlay }