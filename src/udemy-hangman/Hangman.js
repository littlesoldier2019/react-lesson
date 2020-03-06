import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words';
import AlphaButton from './AlphaButton';

let word = randomWord();

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    // maxWrong: 6,
    // images: [img0, img1, img2, img3, img4, img5, img6],
    // answer: 'apple'
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer:word, key: ''};
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
 
   
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => ( 
        this.state.guessed.has(ltr) ? ltr : "_") 
        )
    }

  
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + ( this.state.answer.includes(ltr)? 0 : 1)
    }))
    console.log(word)
  }

  resetGame(e) {
    e.preventDefault();
    word = randomWord()
    this.setState(st => ({ 
      nWrong: 0, 
      guessed: new Set(), 
      key: "",
      answer: word }))
      console.log(word)
  }
    

  /** generateButtons: return array of letter buttons to render */
  // generateButtons() {
  //   return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
  //     <button
  //       value={ltr}
  //       onClick={this.handleGuess}
  //       disabled={this.state.guessed.has(ltr)}
  //       key={ltr}
  //     >
  //       {ltr}
  //     </button>
  //   ));
  // }

  /** render: render game */
  render() {
    let imgAlt = (this.state.nWrong + 1) + ' wrong guess';
    let letters = this.guessedWord();
    console.log(letters)
    let content;
        if ( !letters.includes("_") ) {
          content = (
            <div>
            <p className='Hangman-word'>{this.guessedWord()}</p>
            <p style={{color:'blue', textTransform:"uppercase"}}>congratulation!!!!!</p>
            </div>
          ) 
        }
        else if ( this.state.nWrong < this.props.maxWrong ) {
          content = (
            <div>
              <p className='Hangman-word'>{this.guessedWord()}</p>
              <div className='AlphaButton'>
                <AlphaButton handleGuess={this.handleGuess} guessed={this.state.guessed}/>
              </div>
            </div>
          )   
        }  else {
          content = (
            <div>
              <p className='Hangman-word'>{this.state.answer}</p>
              <p >The answer is <span style={{color:'blue', textTransform:"uppercase"}}>{this.state.answer}</span>. Goodluch next time!</p>
            </div>
          )
        } 
    return (    
      <form className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={imgAlt}/>
        <p >Number of wrong guessed {this.state.nWrong}</p>
         {content}
        <button id='reset-btn' onClick={this.resetGame}>Refresh</button>
      </form>
      
    );
  }
}

export default Hangman;
