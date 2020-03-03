import React, { Component } from 'react';
import './DiceItem.css';

const IconAPI = 'https://img.icons8.com/windows/128/000000/dice-';
const IconHref = 'https://icons8.com/icon/o1dGziQOijg4/dice-'
const IconName = ['one', 'two', 'three', 'four', 'five', 'six'];

class DiceItem extends Component {
    
    render() {
        let imgSrc = `${IconAPI}${IconName[this.props.id]}.png`;
        let imgHref = `${IconHref}${IconName[this.props.id]}.png`
        return (
            <div className={this.props.class}>     
                <a href={imgHref}><img src={imgSrc} alt={this.props.id}></img></a>
            </div>
        )
    }
}

export default DiceItem;