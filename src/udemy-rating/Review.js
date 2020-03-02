import React from 'react';
import Star from "./Star";
import Rating from "./Rating";

import './review.css';

function Review() {
    return (
        <div className='container'>
            <div className='Review'>
                <p>Star Component: </p>
                <Star color='pink' isFilled />
                <Star color='magenta' />
                <Star color='indigo' isFilled /> 
                <p>Rating Component (uses Stars) :</p>
                <Rating stars={4} />
            </div>
        </div>
        
    );
}

export default Review;