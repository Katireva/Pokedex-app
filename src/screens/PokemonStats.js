import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import Background from "../components/background";
import { useNavigation } from "@react-navigation/native";
import { usePokemonData } from "../contexts/PokemonDataContext";
import styled from "styled-components/native";

const PokemonStats = () => {
  const navigation = useNavigation();
  const { pokemonData } = usePokemonData(); //context

  const CapitalizedText = (props) => {
    return props.charAt(0).toUpperCase() + props.slice(1);
  };

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

  const renderPokemonCard = (item) => {
    return (
      <Container>
        <Card>
          <Name>{CapitalizedText(item.name)}</Name>
          <Text>
            Height: <BoldText>{item.height}</BoldText>
          </Text>
          <Text>
            Weight: <BoldText>{item.weight}</BoldText>
          </Text>
          <Text>
            Moves:{" "}
            <BoldText>{CapitalizedText(item.moves[0].move.name)}</BoldText>
          </Text>
          <Text>
            Base experience: <BoldText>{item.base_experience}</BoldText>
          </Text>
        </Card>
      </Container>
    );
  };
  return <Background>{renderPokemonCard(pokemonData)}</Background>;
};

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`;

const Card = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 56px;
  padding-top: 15px;
  padding-left: 19px;
  background-color: #ffffff;
  border: 3px solid #000;
  border-radius: 10px;
`;

const Name = styled.Text`
  color: #000000;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 17px;
`;

const Text = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 17px;
`;

const BoldText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 17px;
`;

export default PokemonStats;
