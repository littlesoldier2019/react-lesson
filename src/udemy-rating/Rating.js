import React, { Component } from 'react'
import Star from './Star';

class Rating extends Component {
    // static defaulProps = {max: 5};
    constructor(props) {
        super(props);
        this.state = {
            dynamicValue: props.stars,
            value: 0
        };
        this._colors = {
            1: "#f44336",
            2: "#FF5722",
            3: "#FF9800",
            4: "#FFC107",
            5: "#FFEB3B" 
        };
        this._meanings = {
            0: "No Rating 🚫",
            1: "Terrible 🤮",
            2: "Mediocre 😒",
            3: "Average 😐",
            4: "Solid 🙂",
            5: "Fantastic 🔥"
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(newValue) {
        this.setState({
            value: newValue,
            dynamicValue: newValue
        });
    }
    handleMouseEnter(newValue) {
        this.setState({
            dynamicValue: newValue
        })
    }
    handleMouseLeave(newValue) {
        this.setState({
            dynamicValue: newValue
        })
    }
    
    getValue() {
        const { dynamicValue } = this.state;
        const starSpans = [];
        // const max = this.props.max;
        const count = dynamicValue;
    
        for (let i = 1; i <= 5; i++) {
            starSpans.push(
                <Star
                    key={i}
                    color={this._colors[count]}
                    isFilled={i <= dynamicValue}
                    value={i}
                    handleHover={this.handleMouseEnter}
                    handleHoverLeave={this.handleMouseLeave}
                    handleClick={this.handleClick}
                />
            );
        }
        return starSpans;
    }
     

    render() {
        const starSpans = this.getValue();
        
        return (
            <div>
                <p>{this._meanings[this.state.value]}</p>
                {starSpans} test
            </div>
        );
    }
    
}

export default Rating;
