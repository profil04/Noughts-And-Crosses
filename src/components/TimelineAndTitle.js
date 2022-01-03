import React, { Component } from 'react'
import Timeline from './Timeline'

export class TimelineAndTitle extends Component {

    render() {
        return (
            <div className='timelineAndTitle'>
                <h2>Noughts and Crosses</h2>
                <Timeline/>
            </div>
        )
    }
}

export default TimelineAndTitle
