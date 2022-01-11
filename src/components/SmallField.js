import React, { Component } from 'react'
import '../App.css';

let currentPlayer = 1;

export default class SmallField extends Component {

    constructor() {
        super();
        this.state = {
            player: ""
        }
    }

    handleClick = (player) => {
        if (player == 1){
            this.setState({
                player: "x"
            })
        }else if (player == 2){
            this.setState({
                player: "o"
            })        
        }
    }

    changePlayer = (player) => {
        if (player == 1){
            return 2;
        }else if (player == 2){
            return 1;       
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.handleClick(currentPlayer);
                    currentPlayer = this.changePlayer(currentPlayer);
                }}>{this.state.player}</button>
            </div>
        )
    }
}
