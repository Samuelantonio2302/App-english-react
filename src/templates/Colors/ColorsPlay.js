import React from 'react'
import { Menu } from '../../components/Menu';
import { Context } from '../../utils/context'

function ColorPlay() {
    const {generateColors, itemsColors} = React.useContext(Context)
    return (
        <React.Fragment>
        <Menu text="What´s Color?"/>
            <div class="colors-play" id="play">
                <div class="submenu">
                    <button type="button" class="btn-special start" onClick={generateColors}>Start</button>
                </div>
                {/* <div class="selectColor" style={{ backgroundColor: element.color }}></div>
                <div class="options">
                    <button className="btn-second" id="0" onClick={corregir}>{Onebtn.color}</button>
                    <button className="btn-second" id="1" onClick={corregir}>{Twobtn.color}</button>
                    <button className="btn-second" id="2" onClick={corregir}>{Threebtn.color}</button>
                    <button className="btn-second" id="3" onClick={corregir}>{Fourbtn.color}</button>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export { ColorPlay }