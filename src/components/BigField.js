import React, { Component } from 'react'
import '../App.css';
import SmallField from './SmallField';

export default class BigField extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='bigField'>
                <SmallField smallFieldNumber = "a0"/>
                <SmallField smallFieldNumber = "a1"/>
                <SmallField smallFieldNumber = "a2"/>
                <SmallField smallFieldNumber = "a3"/>
                <SmallField smallFieldNumber = "a4"/>
                <SmallField smallFieldNumber = "a5"/>
                <SmallField smallFieldNumber = "a6"/>
                <SmallField smallFieldNumber = "a7"/>
                <SmallField smallFieldNumber = "a8"/>
            </div>
        )
    }
}
