import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {CardProps, stateRedux} from '../../interfaces';
import {addCart, removeCart} from '../../store/actions';

import {
  CardContainer,
  ContainerInformations,
  ImageCard,
  TituloCard,
  Touch,
  CartIcon,
} from './styles';

const Card: React.FC<CardProps> = ({id, image, name, genres, officialSite}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: stateRedux) => state.cartReducer);

  function addFavorite() {
    if (cart.find((movie) => movie.id === id)) {
      dispatch(removeCart({id, name, image, genres, officialSite}));
    } else {
      dispatch(addCart({id, name, image, genres, officialSite}));
    }
  }

  return (
    <Touch onLongPress={addFavorite}>
      <CardContainer>
        <ImageCard
          source={{
            uri: image.medium,
          }}
        />
        {cart.find((movie) => movie.id === id) && <CartIcon />}
        <ContainerInformations>
          <TituloCard>{name}</TituloCard>
        </ContainerInformations>
      </CardContainer>
    </Touch>
  );
};

export default Card;
