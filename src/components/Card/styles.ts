import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 42.5%;
  height: 250px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ImageCard = styled.Image<ImageProps>`
  height: 50px;
  flex: 4;
  resize-mode: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContainerInformations = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TituloCard = styled.Text`
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
  padding: 0 5px;
  font-family: 'Montserrat-Medium';
`;
