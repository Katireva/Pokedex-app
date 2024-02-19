import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import Background from "../components/background";
import PokemonButton from "../components/pokemonButton.js";
import validator from "validator";
import { PokemonCard } from "../components/PokemonCard";
import Bar from "../components/Bar";
import axios from "axios";
import { usePokemonData } from "../contexts/PokemonDataContext";
import styled from "styled-components/native";

const SearchView = ({ navigation }) => {
  const [pokemon, setPokemon] = useState("");
  const [showPokemonCard, setShowPokemonCard] = useState(false);
  const { setPokemonData, pokemonData } = usePokemonData(); //context

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Back",
      headerTransparent: true,
      headerShadowVisible: false,
      headerStyle: {
        position: "absolute",
        backgroundColor: "white",
      },
    });
  }, []);

  return (
    <Background>
      <Bar backgroundTitleColor="#D00101" barTitle="Search For A Pokemon">
        <TextInput
          style={{ fontSize: 16, fontWeight: "400" }}
          placeholder="Type the name here"
          onChangeText={(pokemon) => setPokemon(pokemon)} //optional
        />
      </Bar>

      <SearchBtn>
        <PokemonButton
          textButton="Search"
          colorTop="#D00000"
          colorBottom="#520000"
          onPress={() => {
            console.log(pokemon);
            axios
              .get(
                `https://pokeapi.co/api/v2/pokemon/${validator.trim(
                  pokemon.toLowerCase(pokemon)
                )}`
              )
              .then((response) => {
                setPokemonData(response.data);
                setShowPokemonCard(true);
              })
              .catch(
                (err) =>
                  setShowPokemonCard(
                    "NO results found Error "
                  ) /*console.log("NO results found Error ", err)*/
              );
          }}
        />
      </SearchBtn>
      {showPokemonCard && (
        <PokemonCard pokemon={validator.trim(pokemon.toLowerCase(pokemon))} />
      )}
    </Background>
  );
};

const SearchBtn = styled.View`
  padding-right: 16px;
  padding-left: 254px;
  margin-top: 12px;
`;

export default SearchView;
