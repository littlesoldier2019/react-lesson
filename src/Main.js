import React from 'react';
import CommentItem from './CommentItem.js';
import './Main.css';

class Main extends React.Component {
    render() {
      return (
          <div className='main'>
            <CommentItem></CommentItem>
          </div>
          
      )
    }
  }

export default Main;