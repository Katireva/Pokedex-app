import * as React from "react";
import { StyleSheet, StatusBar } from "react-native";
import styled from "styled-components/native";

const Background = ({ children }) => {
  return (
    <Container>
      <Image
        source={require("C:/Users/nadiia/Desktop/pokedex-app/pokemon-app/assets/background.png")}
      >
        <Wrap>
          {children}
          <Footer>
            This is not a real Pokémon app.{"\n"}Pokémon is a trademark owned by
            Nintendo and GameFreak
          </Footer>
        </Wrap>
      </Image>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight || 0};
  flex: 1;
  flex-direction: column;
`;

const Image = styled.ImageBackground`
  flex: 1;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 16px;
`;

const Footer = styled.Text`
  margin-top: auto;
  text-align: center;
  font-weight: 400;
  font-size: 11px;
  bottom: 22px;
`;
const styles = StyleSheet.create({
  // container: {
  //   marginTop: StatusBar.currentHeight || 0,
  //   flex: 1,
  // },
  // image: {
  //   flex: 1,
  //   marginTop: 0,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // wrap: {
  //   display: "flex",
  //   flexDirection: "column",
  //   flex: 1,
  //   padding: 16,
  // },
  // footer: {
  //   marginTop: "auto",
  //   textAlign: "center",
  //   fontWeight: "400",
  //   fontSize: 11,
  //   bottom: 22,
  // },
});

export default Background;
