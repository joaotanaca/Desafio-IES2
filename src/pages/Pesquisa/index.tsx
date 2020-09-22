import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';

import {MoviesMapProps} from '../../interfaces';
import api from '../../services/api';
import {ContainerSearch, InputSearch, SearchContainer} from './styles';

const Pesquisa: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    api.get(`/shows?q=${search}`).then((res) => setSearchResult(res.data));
  }, [search]);

  return (
    <SearchContainer>
      <InputSearch onChangeText={(text) => setSearch(text)} />
      <ContainerSearch>
        {searchResult.map(({show}: MoviesMapProps) => {
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
      </ContainerSearch>
    </SearchContainer>
  );
};

export default Pesquisa;
