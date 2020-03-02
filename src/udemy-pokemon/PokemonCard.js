import React, { Component } from 'react'
import './PokemonCard.css';
const ImgAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let imgCode = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
console.log(imgCode);

class PokemonCard extends Component {
    
    render() {
        let imgSrc = `${ImgAPI}${imgCode(this.props.id)}.png`;
        return(
            <div className='Pokemon-card'>
                <h4 className='Pokecard-title'>{this.props.name}</h4>
                <div className='Pokemon-img'>
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <p className='Pokecard-data'>Type: {this.props.type}</p>
                <p className='Pokecard-data'>Exp: {this.props.exp}</p>
            </div>
        )
    }
         
}

export default PokemonCard;
