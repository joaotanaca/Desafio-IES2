import React from 'react';
import {Text} from 'react-native';
import {CardProps} from '../../interfaces';

import {
  CardContainer,
  ContainerInformations,
  ImageCard,
  TituloCard,
} from './styles';

const Card: React.FC<CardProps> = ({image, name}) => {
  return (
    <CardContainer>
      <ImageCard
        source={{
          uri: image,
        }}
      />
      <ContainerInformations>
        <TituloCard>{name}</TituloCard>
      </ContainerInformations>
    </CardContainer>
  );
};

export default Card;
