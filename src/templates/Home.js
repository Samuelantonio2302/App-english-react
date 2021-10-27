import React from 'react'
import { Card } from '../components/Card';
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

const plays = [
    { 'title': 'Colors', "text": "Que estas esperando para empezar a practicar los colore", 'url': '/colors' },
    { 'title': 'Numbers', "text": "Que estas esperando para empezar a practicar los colore", 'url': '/numbers' },
    { 'title': 'Alfabet', "text": "Que estas esperando para empezar a practicar los colore", 'url': '/alphabet' }
];
function Home() {
    return (
        <React.Fragment>
            <Header />
            <Cards>
                {plays.map(play => (
                    <Card
                        title={play.title}
                        text={play.text}
                        url={play.url} />
                ))}
            </Cards>
        </React.Fragment>
    )
}

export { Home }