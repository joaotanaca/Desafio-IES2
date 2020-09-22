import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/Card';

import {stateRedux} from '../../interfaces';
import {finishCart} from '../../store/actions';
import {ContainerCart, InformationMessage, Message} from './styles';

const Favoritos: React.FC = () => {
  const cart = useSelector((state: stateRedux) => state.cartReducer);
  const dispatch = useDispatch();

  function handlefinishBuy() {
    dispatch(finishCart({}));
  }

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
          <TouchableOpacity style={buttonStyle} onPress={handlefinishBuy}>
            <Text style={textButton}>Finalizar compra</Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

const buttonStyle: StyleProp<ViewStyle> = {
  marginVertical: 10,
  display: 'flex',
  alignItems: 'center',
  paddingVertical: 10,
};

const textButton: TextStyle = {
  fontFamily: 'Montserrat-Medium',
  fontSize: 20,
};

export default Favoritos;
