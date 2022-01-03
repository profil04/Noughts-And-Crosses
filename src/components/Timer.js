import React, { Component } from 'react'

export default class Timer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             seconds: 0
        }
    }
    

    render() {
        return (
            <div>
                <button>PLAY</button>
            </div>
        )
    }
}
