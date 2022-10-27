import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const LeftSideWidth = Dimensions.get('screen').width * 0.5;

export const Container = styled.View`
  margin: 10px;
  background-color: lightgray;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const LeftSide = styled.View`
  margin: 10px;
  background-color: lightgray;
  width: ${LeftSideWidth}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  background-color: lightgray;
`;

export const Flag = styled.Text`
  font-size: 50px;
  background-color: lightgray;
  margin-right: 15px;
`;
