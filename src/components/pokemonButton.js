import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const StyledButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const OuterBorder = styled.View`
  padding: 0px;
  border: 2px solid #000;
  border-radius: 8px;
`;

const InnerBorder = styled.View`
  border: 2px solid #fff;
  border-radius: 8px;
`;

const BtnText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PokemonButton = (props) => {
  const { button } = styles;
  const { textButton, colorTop, colorBottom } = props;

  return (
    <LinearGradient colors={[colorTop, colorBottom]} style={button}>
      <OuterBorder>
        <InnerBorder>
          <StyledButton>
            <TouchableOpacity onPress={props.onPress}>
              <BtnText>{textButton}</BtnText>
            </TouchableOpacity>
          </StyledButton>
        </InnerBorder>
      </OuterBorder>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    position: "intitial",
    display: "block",
    backgroundColor: "blue",
  },
});

export default PokemonButton;
