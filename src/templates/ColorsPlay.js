import React from 'react'
import { Menu } from '../components/Menu';
import { Context } from '../utils/context'

let count = 0;
function ColorPlay() {
    const {
        colors,
        Onebtn,
        setOnebtn,
        Twobtn,
        setTwobtn,
        Threebtn,
        setThreebtn,
        Fourbtn,
        setFourbtn,
        element,
        setElement,
        btns
    } = React.useContext(Context)

    const GenerateColor = () => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color
    }

    const card = () => {
        let b = btns[Math.floor(Math.random() * 4)].btn
        setElement(b)
    }

    const Generate = () => {
        count++
        setOnebtn(GenerateColor())
        setTwobtn(GenerateColor())
        setThreebtn(GenerateColor())
        setFourbtn(GenerateColor())
        card()
    }

    const corregir = (props) => {
        let v = props.target.id
        let btn = btns[v].btn.color
        let card = element.color
        if (btn === card) {
            console.log('Very Good')
        }
        if (count === 10) {
            console.log('Has echo el limite')
        }
    }

    return (
        <React.Fragment>
        <Menu text="What´s Color?"/>
            <div class="colors-play" id="play">
                <div class="submenu">
                    <button type="button" class="btn-special start" onClick={Generate}>Start</button>
                </div>
                <div class="selectColor" style={{ backgroundColor: element.color }}></div>
                <div class="options">
                    <button className="btn-second" id="0" onClick={corregir}>{Onebtn.color}</button>
                    <button className="btn-second" id="1" onClick={corregir}>{Twobtn.color}</button>
                    <button className="btn-second" id="2" onClick={corregir}>{Threebtn.color}</button>
                    <button className="btn-second" id="3" onClick={corregir}>{Fourbtn.color}</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export { ColorPlay }