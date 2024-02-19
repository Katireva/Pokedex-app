import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";

const Bar = ({ children, backgroundTitleColor, barTitle }) => {
  return (
    <Container>
      <Title backgroundColor={backgroundTitleColor}>
        <TextTitle>{barTitle}</TextTitle>
      </Title>
      <Input>{children}</Input>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 64px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Title = styled.View`
  padding-left: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-width: 3px;
  border-color: #000000;
`;

const TextTitle = styled.Text`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
`;

const Input = styled.View`
  padding-left: 18px;
  padding-top: 15px;
  padding-bottom: 18px;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  border-width: 0px 3px 3px 3px;
  bordercolor: #000000;
`;

export default Bar;
