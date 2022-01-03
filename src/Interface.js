import React, { Component } from 'react'
import Board from './Board';

export default class Interface extends Component {
    render() {
        return (
            <div className='interface'>
                <Board/>
            </div>
        )
    }
}
