import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import api from '../../services/api';
import {MoviesMapProps} from '../../interfaces';
import {BlockMovieContainer, ContainerMovies} from './styles';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.get('/shows?q=dragon').then((res) => {
      setMovies(res.data);
    });
  }, []);
  return (
    <BlockMovieContainer>
      <Text>Blockmovie</Text>
      <ContainerMovies>
        {movies.map(({show}: MoviesMapProps) => {
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
