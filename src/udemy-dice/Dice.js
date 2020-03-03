import React, { Component } from 'react';
import './Dice.css';
import DiceItem from './DiceItem';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id1: 3,
            id2: 4,
            class: 'DiceItem',
            rolling: false
        };
        this.setEffect = this.setEffect.bind(this);
    }

    
    setEffect() {
        let RandomIndex1 = Math.floor(Math.random() * 5);
        let RandomIndex2 = Math.floor(Math.random() * 5);
        this.setState({
            class: 'DiceEffect',
            rolling: true
        })

        setTimeout(() => this.setState({
            id1: RandomIndex1,
            id2: RandomIndex2,
            class: 'DiceItem',
            rolling: false
        }), 1000)
    }


    render() {
        
        return (
            <div className='Dice'>
                <div>
                    <DiceItem class={this.state.class} id={this.state.id1}/>
                    <DiceItem class={this.state.class} id={this.state.id2}/>
                </div>
                <button className='btn dice-btn' onClick={this.setEffect} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling' : 'Role Dice'}</button>
            </div>
        )
    }
}

export default Dice;