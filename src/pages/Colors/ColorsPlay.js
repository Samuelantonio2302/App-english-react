import React from 'react'
import { Menu } from '../../components/Menu';
import { Message } from '../../components/message';

function ColorPlay() {
    return (
        <React.Fragment>
            <Message />
            <Menu text="What´s Color?" />
        </React.Fragment>
    )
}

export { ColorPlay }