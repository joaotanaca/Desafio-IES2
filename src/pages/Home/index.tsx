import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import {MoviesMapProps} from '../../interfaces';
import {
  BlockMovieContainer,
  ContainerMovies,
  TitlePage,
  TitleContainer,
} from './styles';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [movies, setMovies] = useState({loading: true, data: []});
  useEffect(() => {
    setMovies({data: [], loading: true});
    api.get('/shows?q=dragon').then((res) => {
      setMovies({loading: false, data: res.data});
    });
  }, []);
  return (
    <BlockMovieContainer>
      <TitleContainer>
        <TitlePage>BlockMovie</TitlePage>
        <Ionicons name="ios-videocam-outline" size={24} />
      </TitleContainer>
      <ContainerMovies>
        {movies.data.map(({ show }: MoviesMapProps) => {
          const image = show.image ?? {
            medium:
              'https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg',
          };
          return <Card image={image.medium} name={show.name} key={show.id} />;
        })}
      </ContainerMovies>
    </BlockMovieContainer>
  );
};

export default Home;
