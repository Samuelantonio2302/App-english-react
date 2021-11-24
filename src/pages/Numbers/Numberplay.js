import React from 'react'
import { Menu } from "../../components/Menu";
import { Message } from '../../components/message';

function NumberPlay() {
    // const { generateNumber, Number, onvalue, setValue } = React.useContext(Context)
    // const [menssage, setMessage] = React.useState("De click en start")
    // const onChange = (event) => {
    //     event.preventDefault()
    //     setValue(event.target.value)
    // }
    // const onValider = () => {
    //     if (onvalue === Number.name.toLowerCase()) {
    //         setMessage("Felicidades")
    //     } else {
    //         setMessage("uppss")
    //     }
    // }
    return (
        <React.Fragment>
            <Message />
            <Menu text="What is color" />
        </React.Fragment>
    )
}

export { NumberPlay }