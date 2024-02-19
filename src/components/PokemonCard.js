import React from "react";
import { Text, Pressable } from "react-native";
import Bar from "./Bar";
import { useNavigation } from "@react-navigation/native";
import { usePokemonData } from "../contexts/PokemonDataContext";
import styled from "styled-components/native";

export const PokemonCard = ({ pokemon }) => {
  const { pokemonData } = usePokemonData(); //context
  const navigation = useNavigation();
  const CapitalizedText = (props) => {
    return props.charAt(0).toUpperCase() + props.slice(1);
  };
  return (
    <Container>
      {pokemonData ? (
        <Bar backgroundTitleColor="#3F88C5" barTitle="Results">
          <Pressable
            onPress={(pokemonData) => navigation.navigate("PokemonStats")}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{CapitalizedText(pokemonData.name)}</Text>
            <Text style={{ fontSize: 30, paddingRight: 12, lineHeight: 33 }}>
              ▶
            </Text>
          </Pressable>
        </Bar>
      ) : (
        <Bar backgroundTitleColor="#3F88C5" barTitle="Results">
          <Text>NO results found</Text>
        </Bar>
      )}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;
