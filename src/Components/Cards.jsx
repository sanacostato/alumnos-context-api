import React, { useState, useEffect } from 'react';

//sfc atajo
const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(data => {
                // https://pokeapi.co/api/v2/pokemon/2/
                setCards(
                    data.results.map((card) => {
                        return {
                            name: card.name,
                            url: card.url,
                            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.url.split('/')[6]}.png`
                        };
                    })
                );
            });
    }, [])

    return (
        <div className="row p-3">
            { cards.map((pokemon) => {
                    return (
                        <div className="col-sm-4 mb-3">
                            <div className="card text-center">
                                <img src={pokemon.sprite} className="card-img-top" alt="{card.name}/" />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;