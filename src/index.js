import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Main from './Main.js';
// import Footer from './Footer.js';


function Webpage() {
    return (
        <div> 
            <Header></Header> 
            <Main></Main>
        </div>
    )
} 

ReactDOM.render(<Webpage />, document.getElementById('root'));