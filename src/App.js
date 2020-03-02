import React from 'react';
import './App.css';
import Header from './react-lesson/Header';
import Main from './react-lesson/Main';
import Animal from './assignment-animal/Animal';
import Timer from './assignment-timer/Timer';
import Review from './udemy-rating/Review';
import PokemonGame from './udemy-pokemon/PokemonGame';
// import PieChart from './udemy-piechart/PieChart';
// import Footer from './Footer.js';


function App() {
    return (
        <div> 
            <h1>React lessons</h1>
            {/* <div className='excersise'>
                <h2>Udemy Pie Chart</h2>
                <PieChart />
            </div> */}
            <div className='excersise'>
                <h2>Udemy Rating</h2>
                <PokemonGame />
            </div>
            <div className='excersise'>
                <h2>Udemy Rating</h2>
                <Review />
            </div>
            <div className='excersise'>
                <h2>Asignment Animals</h2>
                <Animal></Animal>
            </div>
            <div className='excersise'>
                <h2>Asignment Timer</h2>
                <Timer></Timer>
            </div>
            <div className='excersise'>
                <h2>React.org main concepts</h2>
                <Header></Header> 
                <Main></Main>
            </div>
        </div>
    )
} 

export default App;
