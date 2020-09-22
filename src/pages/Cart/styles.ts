import styled from 'styled-components/native';
import {BaseThemeInterface} from '../../interfaces';

export const ContainerCart = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
})`
  display: flex;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
  width: 100%;
  height: 100%;
`;

export const InformationMessage = styled.View`
  height: 100%;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Message = styled.Text`
  width: 75%;
  color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_TEXT_COLOR};
  font-family: 'Montserrat-Medium';
  font-size: 25px;
`;
