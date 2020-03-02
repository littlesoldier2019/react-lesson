import React from 'react';
import CommentItem from './CommentItem.js';
import './Main.css';
import Form from './Form.js';

class Main extends React.Component {
    render() {
      return (
          <div className='main'>
            <CommentItem></CommentItem>
            <Form></Form>
          </div>
          
      )
    }
  }

export default Main;