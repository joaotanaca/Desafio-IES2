import styled from 'styled-components/native';
import {BaseThemeInterface} from '../../interfaces';

export const BlockMovieContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerMovies = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
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
