import React from 'react';

import Icon from '@expo/vector-icons/Entypo';

import {
  Container,
  Photo,
  TextTitle,
  TextSubTitle,
  TextDetail,
  TextDetailBold,
  Map,
  Circle,
  AdoptButton,
  ShareButton,
  TextButton,
} from './styles';

import Header from '../../components/Header';

interface Props {
  route: any;
}

const DetailsPet: React.FC<Props> = ({ route }) => {
  const {
    id,
    photo,
    name,
    gender,
    size,
    latitude,
    longitude,
  } = route.params.item;

  // async function handleAdopt(): Promise<void> {}

  return (
    <>
      <Header />
      <Container>
        <TextTitle>Uau!!! quer dizer...</TextTitle>
        <TextSubTitle>{`Meu nome é ${name}, estou a procura de uma familía!`}</TextSubTitle>
        <Photo source={{ uri: photo }} />
        <TextDetailBold>{`Eu sou ${gender} de porte ${size}, fui visto pela última vez aqui nessa região...`}</TextDetailBold>
        <TextDetail>
          Vem me procurar? Estou com fome e ansioso pra te conhecer!
        </TextDetail>
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
        <AdoptButton>
          <Icon name="heart" size={22} color="#fff" />
          <TextButton>Eu adotei</TextButton>
        </AdoptButton>
        <ShareButton>
          <Icon name="share" size={22} color="#fff" />
          <TextButton>Compartilhar</TextButton>
        </ShareButton>
      </Container>
    </>
  );
};

export default DetailsPet;
