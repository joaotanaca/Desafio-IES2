import React from 'react';
import {Text} from 'react-native';
import {CardProps} from '../../interfaces';

import {CardContainer, ImageCard} from './styles';

const Card: React.FC<CardProps> = ({image, name}) => {
  return (
    <CardContainer>
      <ImageCard
        source={{
          uri: image,
        }}
      />
      <Text>{name}</Text>
    </CardContainer>
  );
};

export default Card;
