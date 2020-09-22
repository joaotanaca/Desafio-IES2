import styled from 'styled-components/native';
import {ImageProps} from 'react-native';
import {BaseThemeInterface} from '../../interfaces';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CardContainer = styled.View`
  position:relative;
  display: flex;
  flex-direction: column;
  width:100%;
  height:100%;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: {width:0, height:2};
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
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
  justify-content: center;
`;

export const TituloCard = styled.Text`
  color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_TEXT_COLOR};
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
  padding: 0 5px;
  font-family: 'Montserrat-Medium';
`;

export const Touch = styled.TouchableOpacity`
  width: 42.5%;
  height: 250px;
  margin-bottom: 20px;
`;

export const CartIcon = styled(Ionicons).attrs({
  name: 'ios-cart',
  size: 20,
})`
  position: absolute;
  top: 7px;
  right: 7px;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_TEXT_COLOR};
  border-radius: 50px;
  padding: 5px;
`;
