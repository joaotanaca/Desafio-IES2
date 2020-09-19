import styled from 'styled-components/native';
import {ImageProps} from 'react-native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 250px;
`;

export const ImageCard = styled.Image<ImageProps>`
  height: 50px;
  flex: 1;
  resize-mode: cover;
`;
