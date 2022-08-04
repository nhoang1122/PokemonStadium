import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

import "./PokeLibrary.css";

const PokeLibrary = () => {
  
  // SEARCH FEATURE //

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    type: "",
  });

  // CARD DISPLAY FEATURE //

  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");

  // SEARCH FUNCTION W/AXIOS //

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemonData({
          name: pokemonName,
          image: res.data.sprites.other.dream_world.front_default,
          type: res.data.types[0].type.name,
          type1: res.data.types[1].type.name,
        });
        console.log(res.data);
        setPokemonChosen(true);
      });
  };

  // CARD DISPLAY FUNCTION W/FETCH //

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    console.log("DATA : ", data);
    setLoadMore(data.next);

    const createPokemonObject = (results) => {
      console.log("RESULTS: ", results);
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data2 = await res.json();

        console.log("DATA2: ", data2);

        setAllPokemon((state) => {
          state = [...state, data2];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  console.log("ALL POKEMON : ", allPokemon);
  console.log("POKEDATA : ", pokemonData);

  return (
    <div>
      <h2>Welcome to the PokeLibrary!</h2>

      {/* SEARCH FEATURE */}

      <div className="top">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Who's that Pokemon"
            onChange={(evt) => {
              setPokemonName(evt.target.value.toLowerCase());
            }}
          />
          <button className="search-btn"onClick={searchPokemon}>GO</button>
        </div>

        <div className="display-section">
          {!pokemonChosen ? (
            <h1>Please Choose A Pokemon!</h1>
          ) : (
            <>
              <h1>{pokemonData.name.toUpperCase()}</h1>
              <img alt="PokemonImg" src={pokemonData.image} />
              <h3>
                Type : {pokemonData.type.toUpperCase()} &{" "}
                {pokemonData.type1.toUpperCase()}
              </h3>
            </>
          )}
        </div>
      </div>

      {/* CARD DISPLAY */}

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon, index) => {
            return (
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            );
          })}
        </div>
        <button className="load-more" onClick={getAllPokemon}>
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default PokeLibrary;
