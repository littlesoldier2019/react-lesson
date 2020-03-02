import React from 'react';
import './piechart.css';

https://codepen.io/Colt/details/MZZEbZ

function getAnglePoint(startAngle, endAngle, radius, x, y) {
    let x1;
    let y1;
    let x2;
    let y2;

    x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
    y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
    x2 = x+ radius * Math.cos(Math.PI * endAngle / 180);
    y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

    return { x1, y1, x2, y2 };
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class 
export default PieChart;