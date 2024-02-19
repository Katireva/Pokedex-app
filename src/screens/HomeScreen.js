import * as React from "react";
import { Linking, View } from "react-native";
import PokemonButton from "../components/pokemonButton.js";
import Background from "../components/background";
import styled from "styled-components/native";

const HomeScreen = ({ navigation }) => {
  const openURI = async () => {
    const url = "http://www.pokemon.com";
    const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
    if (supported) {
      await Linking.openURL(url); // It will open the URL on browser.
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Background>
      <Logo source={require("../../assets/logo.png")} />
      <Wrapper>
        <PokemonButton
          textButton="Look up a Pokémon"
          colorTop="#D00000"
          colorBottom="#520000"
          onPress={() => navigation.navigate("Search")}
        />
        <View style={{ height: 48 }} />
        <PokemonButton
          textButton="Go to www.pokemon.com"
          colorTop="#3F88C5"
          colorBottom="#1E415E"
          onPress={openURI}
        />
      </Wrapper>
    </Background>
  );
};

const Wrapper = styled.View`
  padding: 16px;
  margin: 16px;
  background-color: #ffffff;
  border-color: #000000;
  border-width: 3px;
  border-radius: 10px;
`;

const Logo = styled.Image`
  margin-left: auto;
  margin-right: auto;
`;

export default HomeScreen;
