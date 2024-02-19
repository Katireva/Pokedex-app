import HomeScreen from "./src/screens/HomeScreen";
import SearchView from "./src/screens/SearchView";
import PokemonStats from "./src/screens/PokemonStats";
import { PokemonCard } from "./src/components/PokemonCard";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonDataProvider } from "./src/contexts/PokemonDataContext";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <PokemonDataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" title="Back" component={SearchView} />
          <Stack.Screen
            name="PokemonCard"
            title="Back"
            component={PokemonCard}
          />
          <Stack.Screen
            name="PokemonStats"
            title="Back"
            component={PokemonStats}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonDataProvider>
  );
};

export default App;
