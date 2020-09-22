import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import {MoviesMapProps} from '../../interfaces';
import {BlockMovieContainer, ContainerMovies} from './styles';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [movies, setMovies] = useState({loading: true, data: []});

  useEffect(() => {
    setMovies({data: [], loading: true});
    api.get('/shows?q=the book').then((res) => {
      setMovies({loading: false, data: res.data});
    });
  }, []);
  return (
    <BlockMovieContainer>
      <ContainerMovies>
        {movies.data.map(({show}: MoviesMapProps) => {
          const image = show.image ?? {
            medium:
              'https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg',
          };
          return (
            <Card
              image={image}
              name={show.name}
              key={show.id}
              id={show.id}
              genres={show.genres}
              officialSite={show.officialSite}
            />
          );
        })}
      </ContainerMovies>
    </BlockMovieContainer>
  );
};

export default Home;
