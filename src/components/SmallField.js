import React, { Component } from 'react'
import '../App.css';
import update from 'react-addons-update';

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
            player: "",
            field0: "",
            field1: "",
            field2: "",
            field3: "",
            field4: "",
            field5: "",
            field6: "",
            field7: "",
            field8: "",
        }
    }

    /*
    changeFieldState = () => {
        this.setState(update(this.state, {
            fieldState: {
                [this.props.smallFieldNumber]: {
                    $set: 'o'
                }
            }
        }));
    }
    */

    handleClick = (player, checker) => {   
            if (player == 1){
                this.setState({
                    player: "x",
                });

                if(checker == "a0"){
                    this.setState({
                        field0: "x"
                    })
                }else if(checker == "a1"){
                    this.setState({
                        field1: "x"
                    })
                }else if(checker == "a2"){ 
                    this.setState({
                        field2: "x"
                    })               
                }else if(checker == "a3"){
                    this.setState({
                        field3: "x"
                    })
                }else if(checker == "a4"){ 
                    this.setState({
                        field4: "x"
                    })               
                }else if(checker == "a5"){
                    this.setState({
                        field5: "x"
                    })
                }else if(checker == "a6"){ 
                    this.setState({
                        field6: "x"
                    })               
                }else if(checker == "a7"){
                    this.setState({
                        field7: "x"
                    })
                }else if(checker == "a8"){ 
                    this.setState({
                        field8: "x"
                    })               
                }

                /*
                switch(this.state.fieldState){
                    case "0" :
                        this.setState({
                            field0: "hello"
                        })
                        console.log(this.state.field0)
                        break;  
                }
                */
                /*console.log(this.state.field0);
                console.log(this.state.field1);*/

                /*
                let fieldState = [...this.state.fieldState];
                let item = {...fieldState[this.props.smallFieldNumber]};
                item.name = "x";
                fieldState[this.props.smallFieldNumber] = item;
                this.setState({fieldState: fieldState});
                console.log(this.state.fieldState[this.props.smallFieldNumber])
                */
            }else if (player == 2){
                this.setState({
                    player: "o"
                })

                if(checker == "a0"){
                    this.setState({
                        field0: "o"
                    })
                }else if(checker == "a1"){
                    this.setState({
                        field1: "o"
                    })
                }else if(checker == "a2"){ 
                    this.setState({
                        field2: "o"
                    })               
                }else if(checker == "a3"){
                    this.setState({
                        field3: "o"
                    })
                }else if(checker == "a4"){ 
                    this.setState({
                        field4: "o"
                    })               
                }else if(checker == "a5"){
                    this.setState({
                        field5: "o"
                    })
                }else if(checker == "a6"){ 
                    this.setState({
                        field6: "o"
                    })               
                }else if(checker == "a7"){
                    this.setState({
                        field7: "o"
                    })
                }else if(checker == "a8"){ 
                    this.setState({
                        field8: "o"
                    })               
                }

                /*
                let fieldState = [...this.state.fieldState];
                let item = {...fieldState[this.props.smallFieldNumber]};
                item.name = "o";
                fieldState[this.props.smallFieldNumber] = item;
                */
                //this.changeFieldState();
                //console.log(this.state.field0)      
            }
            console.log(this.props.smallFieldNumber);
            //console.log(this.state.fieldState);
            console.log(this.state.field0 + "aff");
            console.log(this.state.field1 + "aff");
    }

    checkWinner = () => {

        if(this.state.field0 == "x" && this.state.field1 == "x" && this.state.field2 == "x"){
            console.log("GAME OVER");
        }else if(this.state.field3 == "x" && this.state.field4 == "x" && this.state.field5 == "x"){
            console.log("GAME OVER");
        }else if(this.state.field6 == "x" && this.state.field7 == "x" && this.state.field8 == "x"){
            console.log("GAME OVER");
        }
        else if(this.state.field0 == "x" && this.state.field3 == "x" && this.state.field6 == "x"){
            console.log("GAME OVER");
        }else if(this.state.field1 == "x" && this.state.field4 == "x" && this.state.field7 == "x"){
            console.log("GAME OVER");
        }else if(this.state.field2 == "x" && this.state.field5 == "x" && this.state.field8 == "x"){
            console.log("GAME OVER");
        }
        else if(this.state.field0 == "x" && this.state.field4 == "x" && this.state.field8 == "x"){
            console.log("GAME OVER");
        }else if(this.state.field2 == "x" && this.state.field4 == "x" && this.state.field6 == "x"){
            console.log("GAME OVER");
        }

        /*
        const mappedArray = this.state.fieldState.map(checkCombinations);
        function checkCombinations(elem) {
            
        }
        */
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    if(this.state.player != "x" && this.state.player != "o"){
                        this.handleClick(currentPlayer, this.props.smallFieldNumber);
                        currentPlayer = changePlayer(currentPlayer);
                        this.checkWinner();
                    }
                }}>{this.state.player}</button>
            </div>
        )
    }
}
