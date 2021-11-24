import React from 'react'
import { v4 as uuid } from 'uuid'
import { Card } from '../components/CardHome';
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

const plays = [
    { 'title': 'Colors', "text": "Que estas esperando para empezar a practicar los colores", 'url': '/colors' },
    { 'title': 'Numbers', "text": "Que estas esperando para empezar a practicar los numeros", 'url': '/numbers' },
    { 'title': 'Alphabet', "text": "Que estas esperando para empezar a practicar los alfabeto", 'url': '/alphabet' }
];
function Home() {
    return (
        <React.Fragment>
            <Header />
            <Cards>
                {plays.map(play => (
                    <Card
                        key={uuid}
                        title={play.title}
                        text={play.text}
                        url={play.url} />
                ))}
            </Cards>
        </React.Fragment>
    )
}

export { Home }