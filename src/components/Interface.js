import React, { Component } from 'react'
import HeaderWithData from './HeaderWithData'
import TimelineAndTitle from './TimelineAndTitle'
import Board from './Board'



export default class Interface extends Component {

    constructor(props){
        super(props);
        this.state = {
            player: ""
        }
    }

    render() {
        return (
            <div className='interface'>
                <div className='leftSide'>
                    <HeaderWithData/>
                    <Board/>
                </div>
                <TimelineAndTitle/>
            </div>
        )
    }
}
