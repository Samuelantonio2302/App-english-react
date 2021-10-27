import React from 'react'
import { Menu } from '../components/Menu';
const alphabet = [
    { 'letter': 'a', 'p': '(ei)' },
    { 'letter': 'b', 'p': '(bi)' },
    { 'letter': 'c', 'p': '(ci)' },
    { 'letter': 'd', 'p': '(di)' },
    { 'letter': 'e', 'p': '(i)' },
    { 'letter': 'f', 'p': '(ef)' },
    { 'letter': 'g', 'p': '(yi)' },
    { 'letter': 'h', 'p': '(eich)' },
    { 'letter': 'i', 'p': '(ai)' },
    { 'letter': 'j', 'p': '(yei)' },
    { 'letter': 'k', 'p': '(key)' },
    { 'letter': 'l', 'p': '(el)' },
    { 'letter': 'm', 'p': '(em)' },
    { 'letter': 'n', 'p': '(en)' },
    { 'letter': 'o', 'p': '(ou)' },
    { 'letter': 'p', 'p': '(pi)' },
    { 'letter': 'q', 'p': '(kiu)' },
    { 'letter': 'r', 'p': '(ar)' },
    { 'letter': 's', 'p': '(es)' },
    { 'letter': 't', 'p': '(te)' },
    { 'letter': 'u', 'p': '(iu)' },
    { 'letter': 'v', 'p': '(vi)' },
    { 'letter': 'w', 'p': '(dabeliu)' },
    { 'letter': 'x', 'p': '(eks)' },
    { 'letter': 'y', 'p': '(uai)' },
    { 'letter': 'z', 'p': '(zi)' }
];

function Alphabet() {
    return (
        <React.Fragment>
            <Menu text="Alfabet" />
            <div className="alphabet">
                <div className="wrapp">
                    <div className="grid">
                        {alphabet.map(numb => (
                            <div class="card-play">
                                <div class="alphabet">
                                    <div class="alphabet-render">
                                        <h1>{numb.letter}</h1>
                                    </div>
                                    <div class="name">
                                        <h2><strong>{numb.p}</strong></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/play/numbers/practice/modulos" class="btn-special">Practicar</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Alphabet }