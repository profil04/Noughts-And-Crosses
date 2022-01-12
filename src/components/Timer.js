import React, { Component } from 'react'
import '../App.css';

export default class Timer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             active: 0,
             seconds: 0,
             minutes: 0,
             hours: 0
        }
    }
    
    startGameHandler = () => {
        this.setState({
            active: 1
        },
        () => 
        setInterval(() => {
            if (this.state.seconds === 59) {
                this.setState({
                    minutes: this.state.minutes + 1,
                    seconds: -1
                })
            }

            if (this.state.minutes === 59) {
                this.setState({
                    hours: this.state.hours + 1,
                    minutes: 0
                })
            }

            this.setState({seconds: this.state.seconds + 1})
        }, 1000)
        )
    }


    render() {

        let hr, min, sec

        if (this.state.seconds < 10) {
            sec = '0' + this.state.seconds
        }
        else {
            sec = this.state.seconds
        }

        if (this.state.minutes < 10) {
            min = '0' + this.state.minutes
        }
        else {
            min = this.state.minutes
        }

        if (this.state.hours < 10) {
            hr = '0' + this.state.hours
        }
        else {
            hr = this.state.hours
        }


        return this.state.active ? (
            <div className='timer'>
                <div className='timeCounter'>
                    <div className='timerPart'>{hr + ' : '}</div>
                    <div className='timerPart'>{min + ' : '}</div>
                    <div className='timerPart'>{sec}</div>
                </div>
            </div>  
        ) : (
            <div className='timer'>
                <button onClick={this.startGameHandler} className='gameStarter'>PLAY</button>
            </div>
        )
    }
}
