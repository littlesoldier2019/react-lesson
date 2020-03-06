import React, { Component } from "react";
// import "./Hangman.css";

let letterList = "abcdefghijklmnopqrstuvwxyz";

class AlphaButton extends Component {
    render() {
        return letterList.split("").map(ltr => (
            <div >
                <button
                value={ltr}
                onClick={this.props.handleGuess}
                disabled={this.props.guessed.has(ltr)}
                key={ltr}
                >
                {ltr}
                </button>
            </div>
            
        ));
    }
}

export default AlphaButton;