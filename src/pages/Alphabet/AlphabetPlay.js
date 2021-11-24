import React from 'react';
import { Message } from '../../components/message';
import { Menu } from '../../components/Menu'

function AlphabetPlay() {
    return (
        <React.Fragment>
            <Message />
            <Menu text="What´s Color?" />
        </React.Fragment>
    )
}
export { AlphabetPlay }