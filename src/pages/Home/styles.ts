import styled from 'styled-components/native';

export const BlockMovieContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 10px;
`;

export const ContainerMovies = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})`
  width: 100%;
  height: 100%;
  display: flex;

  padding-horizontal: 10px;
`;
