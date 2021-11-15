import React from 'react'
import {Menu} from "../../components/Menu";
import {Context} from "../../utils/context";

function NumberPlay() {
    const {generateNumber, Number, onvalue, setValue} = React.useContext(Context)
    const [menssage, setMessage] = React.useState("De click en start")
    const onChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }
    const onValider = () => {
        if (onvalue === Number.name.toLowerCase()) {
            setMessage("Felicidades")
        }else{
            setMessage("uppss")
        }
    }
    return (
        <React.Fragment>
            <Menu text="What is color"/>
            <div className="number">
                <div>
                    <div className="numbers">
                        <div className="number-render" id="numberRender">
                            <h1 id="numb">{Number.number}</h1>
                        </div>
                        <div className="inputs">
                            <input type="text"
                                   id="input"
                                   value={onvalue}
                                   onChange={onChange}
                                   placeholder="What´s Number?"/>
                            <button className="btn-second"
                                    id="very"
                                    onClick={onValider}>Validar</button>
                        </div>
                    </div>
                </div>
                <p>{menssage}</p>
                <div className="sub-menu">
                    <button className="btn-special" id="start" onClick={generateNumber}>Start</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export {NumberPlay}