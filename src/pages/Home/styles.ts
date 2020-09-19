import styled from 'styled-components/native';

export const BlockMovieContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
`;

export const ContainerMovies = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})`
  width: 100%;
  flex: 1;
  display: flex;
  padding-horizontal: 10px;
`;
export const TitlePage = styled.Text`
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat-Medium';
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
`;
