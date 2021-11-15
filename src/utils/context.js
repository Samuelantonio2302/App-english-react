import React from 'react'
import { Numbers, NumbersLarge, Colors, Alphabet } from './data'

const Context = React.createContext()

function Provider(props) {
    let itemsColors = [];
    const generateColors = () => {
        if (itemsColors.length === 0) {
            for (let i = itemsColors.length; i > 0; i--) {
                itemsColors.pop();
            }
        }
        for (let i = 0; i < 4; i++) {
            itemsColors.push(Colors[Math.floor(Math.random() * Colors.length)])
        }
        console.log(itemsColors)
    }
    const [Number, setNumber] = React.useState([])
    const [onvalue, setValue] = React.useState()
    const generateNumber = () =>{
        setNumber(Numbers[Math.floor(Math.random() * Numbers.length)])
    }
    return (
        <Context.Provider value={{
            Numbers,
            NumbersLarge,
            Colors,
            Alphabet,
            generateColors,
            generateNumber,
            onvalue,
            setValue,
            itemsColors,
            Number,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider }