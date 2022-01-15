import React, { Component } from 'react'
import '../App.css';
import SmallField from './SmallField';

export default class BigField extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='bigField'>
                <SmallField smallFieldNumber = "1" />
                <SmallField smallFieldNumber = "2"/>
                <SmallField smallFieldNumber = "3"/>
                <SmallField smallFieldNumber = "4"/>
                <SmallField smallFieldNumber = "5"/>
                <SmallField smallFieldNumber = "6"/>
                <SmallField smallFieldNumber = "7"/>
                <SmallField smallFieldNumber = "8"/>
                <SmallField smallFieldNumber = "9"/>
            </div>
        )
    }
}
