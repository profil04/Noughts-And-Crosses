import React, { Component } from 'react'
import Player1Points from './Player1Points'
import Player2Points from './Player2Points'
import Timer from './Timer'
import '../App.css';

export class HeaderWithData extends Component {

    render() {
        return (
            <div className='headerWithData'>
                <Player1Points/>
                <Timer/>
                <Player2Points/>
            </div>
        )
    }
}

export default HeaderWithData