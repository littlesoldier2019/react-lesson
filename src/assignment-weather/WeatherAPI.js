import React, { Component } from 'react';
import CountryList from './CountryList';

import './WeatherAPI.css';


class WeatherAPI extends Component {
    render() {
        return (
            <div className='WeatherAPI'>
                <CountryList />
            </div>
        )
    }
}

export default WeatherAPI;
