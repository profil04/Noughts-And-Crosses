import React, { Component } from 'react'
import BigField from './BigField'
import '../App.css';

export default class Board extends Component {
    render() {
        return (
            <div className='board'>
                <BigField bigFieldNumber = "0" />
                <BigField bigFieldNumber = "1" />
                <BigField bigFieldNumber = "2" />
                <BigField bigFieldNumber = "3" />
                <BigField bigFieldNumber = "4" />
                <BigField bigFieldNumber = "5" />
                <BigField bigFieldNumber = "6" />
                <BigField bigFieldNumber = "7" />
                <BigField bigFieldNumber = "8" />
            </div>
        )
    }
}
