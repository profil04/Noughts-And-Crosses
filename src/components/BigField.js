import React, { Component } from 'react'
import '../App.css';
import SmallField from './SmallField';

export default class BigField extends Component {
    render() {
        return (
            <div className='bigField'>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
                <SmallField/>
            </div>
        )
    }
}
