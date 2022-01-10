import React, { Component } from 'react'
import Timeline from './Timeline'

export class TimelineAndTitle extends Component {

    render() {
        return (
            <div className='timelineAndTitle'>
                <div className='title'>
                    <h2>Noughts and Crosses</h2>
                </div>
                <Timeline/>
            </div>
        )
    }
}

export default TimelineAndTitle
