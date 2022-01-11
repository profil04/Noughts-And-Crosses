import React, { Component } from 'react'
import '../App.css';

export default class Timer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             seconds: 0
        }
    }
    

    render() {
        return (
            <div className='timer'>
                <button>PLAY</button>
            </div>
        )
    }
}
