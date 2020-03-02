import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonDex.css';

class PokemonDex extends Component {
    
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h4 className='Pokemondex-winner'>Winning Hand</h4>;
        } else {
            title = <h4 className='Pokemondex-loser'>Losing Hand</h4>;
        }
        return(
            <div className='Pokemon-dex'>
                {title}
                <h4>Total Experience: {this.props.expSum}</h4>
                <div className='Pokedex-card'>
                    {this.props.pokemon.map((item) => (
                        <PokemonCard id={item.id} name={item.name} type={item.type} exp={item.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
         
}

export default PokemonDex;