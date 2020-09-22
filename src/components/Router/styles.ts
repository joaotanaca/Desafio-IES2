import styled from 'styled-components/native';
import {BaseThemeInterface} from '../../interfaces';

export const TitlePage = styled.Text`
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat-Medium';
  color: ${(props: {theme: BaseThemeInterfaceace}) =>
    props.theme.PRIMARY_TEXT_COLOR};
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
`;
