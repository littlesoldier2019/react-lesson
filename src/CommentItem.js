import React from 'react';
import './CommentItem.css';
import { render } from '@testing-library/react';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  
  class Comment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillMount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div className="Comment">
          <div><UserInfo user={this.props.author} /></div>
          <div className="Comment-text">{this.props.text}</div>
          <div className="Comment-date">
            {(this.state.date).toLocaleTimeString()}
          </div>
        </div>
      );
    }
    
  }

  function CommentItem() {
      return (
          <div className='comment-item'>
            <Comment 
            // date={comment.date}
            text={comment.text}
            author={comment.author}
            />
          </div>
          
      )
  }

export default CommentItem;