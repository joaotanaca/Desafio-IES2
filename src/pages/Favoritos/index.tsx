import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../../components/Card';

import {stateRedux} from '../../interfaces';
import {ContainerCart, InformationMessage, Message} from './styles';

const Favoritos: React.FC = () => {
  const cart = useSelector((state: stateRedux) => state.cartReducer);
  return (
    <>
      {!cart[0] ? (
        <InformationMessage>
          <Message>
            Ops, parece que você não colocou nada no carrinho! Pressione os
            cards para adicionar :D
          </Message>
        </InformationMessage>
      ) : (
        <>
          <ContainerCart>
            {cart.map((movie) => (
              <Card
                image={movie.image}
                name={movie.name}
                key={movie.id}
                id={movie.id}
                genres={movie.genres}
                officialSite={movie.officialSite}
              />
            ))}
          </ContainerCart>
        </>
      )}
    </>
  );
};

export default Favoritos;
