import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {nameBank} from "./data";



class Generator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            names: nameBank,
            nameShown: "This only appears on load of application"
        };
    }
    randClick(){
        const rand1=Math.floor(Math.random()*27)
        const rand2=Math.floor(Math.random()*27)
        const rand3=Math.floor(Math.random()*20)

        this.setState({
            nameShown: this.state.names.First[rand1]+" "+ this.state.names.Middle[rand2]+" "+this.state.names.Last[rand3]
        });
    }


    render(){
        return(
            <div>
                <h2>Lets get a silly name!</h2>
                <div><button onClick={() => this.randClick()}>Generate name</button></div>
                <div>{this.state.nameShown}</div>
            </div>);
        }
}

// ========================================

ReactDOM.render(
    <Generator/>,
    document.getElementById('root')
);