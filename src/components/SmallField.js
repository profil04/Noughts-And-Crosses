import React, { Component } from 'react'
import '../App.css';

let currentPlayer = 1;

const changePlayer = (player) => {
    if (player == 1){
        return 2;
    }else if (player == 2){
        return 1;       
    }
}


export default class SmallField extends Component {

    constructor(props) {
        super(props);
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
            console.log(this.props.smallFieldNumber);
    }

    checkWinner = () => {
        /*if(){

        }*/
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    if(this.state.player != "x" && this.state.player != "o"){
                        this.handleClick(currentPlayer);
                        currentPlayer = changePlayer(currentPlayer);
                        this.checkWinner();
                    }
                }}>{this.state.player}</button>
            </div>
        )
    }
}
