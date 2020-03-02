import React from 'react';
import './Form.css';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value.toLocaleUpperCase());
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='Form'>
                <label>
                    Name: 
                    <input type='text' value={this.state.value} onChange={this.handleChange} name='name' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default Form;