import React from 'react';
import './Toggle.css';

class Hello extends React.Component {
    render() {
      return <p className='hello'>Hello {this.props.name}</p>;
    }
  }

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <>
                <Hello name='Helmi'></Hello>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </>
        )
    }
}



export default Toggle;