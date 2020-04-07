import React from 'react';
import './App.css';
// import Header from './react-lesson/Header';
// import Main from './react-lesson/Main';

import Animal from './assignment-animal/Animal';
import Timer from './assignment-timer/Timer';
// import WeatherAPI from './assignment-weather/Weather';

import Review from './udemy-rating/Review';
import PokemonGame from './udemy-pokemon/PokemonGame';
import Dice from './udemy-dice/Dice'
import Hangman from './udemy-hangman/Hangman';
import Board from './udemy-lightgame';
// import PieChart from './udemy-piechart/PieChart';
// import Footer from './Footer.js';


function App() {
    return (
        <div> 
            {/* <h1>React lessons</h1> */}
            {/* <div className='excersise'>
                <h2>Udemy Pie Chart</h2>
                <PieChart />
            </div> */}
            {/* <div className='excersise'>
                <h2>Assignment Country Weather API </h2>
                <WeatherAPI />
            </div> */}
            <div className='excersise'>
                <h2></h2>
                <div className='App-hangman'>
                    <Board />
                </div>
            </div>
            {/* <div className='excersise'>
                <h2>Hangman Game</h2>
                <div className='App-hangman'>
                    <Hangman />
                </div>
            </div> */}
            {/* <div className='excersise'>
                <h2>Roll Dice</h2>
                <Dice />
            </div>
            <div className='excersise'>
                <h2>Pokemon Game</h2>
                <PokemonGame />
            </div>
            <div className='excersise'>
                <h2>Rating</h2>
                <Review />
            </div>
            <div className='excersise'>
                <h2>Show Animals</h2>
                <Animal></Animal>
            </div>
            <div className='excersise'>
                <h2>Show Timer</h2>
                <Timer></Timer>
            </div> */}
            {/* <div className='excersise'>
                <h2>React.org main concepts</h2>
                <Header></Header> 
                <Main></Main>
            </div> */}
        </div>
    )
} 

export default App;
