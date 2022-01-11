import React, { Component } from 'react'
import BigField from './BigField'
import '../App.css';

export default class Board extends Component {
    render() {
        return (
            <div className='board'>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
                <BigField/>
            </div>
        )
    }
}
