import React, { createContext, useState, useContext } from "react";

// Step 1: Create the context
const PokemonDataContext = createContext();

export const usePokemonData = () => {
  const context = useContext(PokemonDataContext);
  if (!context) {
    throw new Error("usePokemonData must be used within a PokemonDataProvider");
  }
  return context;
};

export const PokemonDataProvider = ({ children }) => {
  // Step 3: Use the useState hook to manage data
  const [pokemonData, setPokemonData] = useState();
  console.log(JSON.stringify(pokemonData));
  return (
    // Step 2: Define the Provider component
    <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonDataContext.Provider>
  );
};
