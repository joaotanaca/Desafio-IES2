import styled from 'styled-components/native';
import {BaseThemeInterface} from '../../interfaces';

export const InputSearch = styled.TextInput`
  width: 80%;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_TEXT_COLOR};
  border-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.PRIMARY_TEXT_COLOR};
  border-width: 1px;
  border-radius: 10px;
  margin-vertical: 10px;
  padding-horizontal: 10px;
`;

export const SearchContainer = styled.View`
  height: 100%;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
  display: flex;
  align-items: center;
`;

export const ContainerSearch = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})`
  padding-vertical: 10px;
  width: 100%;
  flex: 1;
  display: flex;
  padding-horizontal: 10px;
  background-color: ${(props: {theme: BaseThemeInterface}) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
`;
