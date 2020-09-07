import React from 'react';

import {
  Container,
  Photo,
  TextTitleCard,
  TextDetailCard,
  Map,
  Circle,
} from './styles';

import Header from '../../components/Header';

interface Props {
  route: any;
}

const DetailsPet: React.FC<Props> = ({ route }) => {
  const { photo, name, gender, latitude, longitude } = route.params.item;
  return (
    <>
      <Header />
      <Container>
        <TextTitleCard>{name}</TextTitleCard>
        <Photo source={{ uri: photo }} />
        <TextDetailCard>{gender}</TextDetailCard>
        <Map
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.001,
          }}
        >
          <Circle coordinate={{ latitude, longitude }} title={name} />
        </Map>
      </Container>
    </>
  );
};

export default DetailsPet;
