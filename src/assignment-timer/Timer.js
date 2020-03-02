import React, { Component } from 'react';
import Image1 from './img/sun_rise.png';
import Image2 from './img/afternoon.jpg';
import Image3 from './img/sunset.jpg';
import './timer.css';


class Timer_img extends Component {
  state = {
    time: new Date()
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeTime(),
      1000
    );
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  hour;
  date;
  greeting;
  image;
  
  changeTime() {
    this.setState({
      time: new Date(),
    });
    this.hour = this.state.time.getHours();
    this.date = this.state.time.getDate();
  }
  


  changeContent() {

    if (this.state.hour > 10 ) {
      return 'Good Morning!'
      
    } else if ( 10 < this.state.hour < 16) {
      return "Good Afternoon!"

    } else if (16 < this.state.hour ) {
      return 'Good Everning!'
    }

  }

  changeImage() {

    if ( 10 > this.state.hour > 0 ) {
      return Image1
    
    } else if ( 10 < this.state.hour < 16) {
      return Image2

    } else if (16 < this.state.hour ) {
      return Image3
    }

  }

    

  render() {
    return (
      <div className='Timer'>
        <img className='bgr-img' src={this.changeImage()} alt='natual background' ></img>      
        <div className='content'>
          <h3 className='time'>It is {(this.state.time).toLocaleTimeString()} {new Date().toLocaleDateString()} </h3>
          <h3 className='greeting'>{this.changeContent()}</h3>
        </div>
      </div>
    )
  }
}


export default Timer_img;