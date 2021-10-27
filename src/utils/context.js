import React from 'react'

const Context = React.createContext()

function Provider(props) {
    // let one = []
    // let two = []
    // let three = []
    // let four = []
    // let btns = ['one', 'two', 'three', 'four'];

    const [Onebtn, setOnebtn] = React.useState([])
    const [Twobtn, setTwobtn] = React.useState([])
    const [Threebtn, setThreebtn] = React.useState([])
    const [Fourbtn, setFourbtn] = React.useState([])
    const [element, setElement] = React.useState([])

    const btns = [{ 'btn': Onebtn }, { 'btn': Twobtn }, { 'btn': Threebtn }, { 'btn': Fourbtn }]

    const colors = [
        { 'color': 'White', "name": "White" },
        { 'color': 'Black', "name": "Black" },
        { 'color': 'Gray', "name": "Gray" },
        { 'color': 'Red', "name": "Red" },
        { 'color': 'Yellow', "name": "Yellow" },
        { 'color': 'Green', "name": "Green" },
        { 'color': 'Orange', "name": "Orange" },
        { 'color': 'Brown', "name": "Brown" },
        { 'color': 'Blue', "name": "Blue" },
        { 'color': 'Violet', "name": "Violet" },
        { 'color': 'Purple', "name": "Purple" },
        { 'color': 'Silver', "name": "Silver" },
        { 'color': 'pink', "name": "pink" },
    ]

    const sun = 'fas fa-sun sun';
    const apple = 'fas fa-apple-alt apple';
    const atom = 'fas fa-atom atom';
    const ball = 'fas fa-basketball-ball ball';
    const bus = 'fas fa-bus bus';

    const numbers = [
        { 'number': '1', 'name': 'One', 'class': [sun] },
        { 'number': '2', 'name': 'Two', 'class': [apple, apple] },
        { 'number': '3', 'name': 'Three', 'class': [atom, atom, atom] },
        { 'number': '4', 'name': 'Four', 'class': [ball, ball, ball, ball] },
        { 'number': '5', 'name': 'Five', 'class': [bus, bus, bus, bus, bus] },
        { 'number': '6', 'name': 'Six', 'class': [apple, apple, apple, apple, apple, apple] },
        { 'number': '7', 'name': 'Seven', 'class': [atom, atom, atom, atom, atom, atom, atom] },
        { 'number': '8', 'name': 'Eight', 'class': [sun, sun, sun, sun, sun, sun, sun, sun] },
        { 'number': '9', 'name': 'Nine', 'class': [bus, bus, bus, bus, bus, bus, bus, bus, bus] },
        { 'number': '10', 'name': 'Ten', 'class': [ball, ball, ball, ball, ball, ball, ball, ball, ball, ball] },
    ]

    const numbersLarge = [
        { 'number': '20', 'name': 'Twenty' },
        { 'number': '30', 'name': 'Thirty' },
        { 'number': '40', 'name': 'Forty' },
        { 'number': '50', 'name': 'Fifty' },
        { 'number': '60', 'name': 'Sixty' },
        { 'number': '70', 'name': 'Seventy' },
        { 'number': '80', 'name': 'Eighty' },
        { 'number': '90', 'name': 'Ninety' },
        { 'number': '100', 'name': 'One hundred' },
    ]
    return (
        <Context.Provider value={{
            colors,
            numbers,
            numbersLarge,
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
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider }