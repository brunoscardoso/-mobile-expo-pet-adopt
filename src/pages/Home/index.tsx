import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Updates from 'expo-updates';

import Heart from '@expo/vector-icons/Entypo';
import Dog from '@expo/vector-icons/FontAwesome5';

import {
  Background,
  Logo,
  Main,
  Title,
  Description,
  AdoptButton,
  RegisterButton,
  TextButton,
} from './styles';

import background from '../../assets/home-background.png';
import logo from '../../assets/logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function updatedApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
  }, []);

  return (
    <Background
      source={background}
      imageStyle={{ width: 410, height: 380, marginTop: 70 }}
    >
      <Main>
        <Logo source={logo} />
        <Title>Quer adotar ou cadastrar um Pet?</Title>
        <Description>Nós ajudamos a dar um lar para os caramelos!</Description>
        <AdoptButton onPress={() => navigation.navigate('AdoptPet')}>
          <Heart name="heart" size={22} color="#fff" />
          <TextButton>Adotar</TextButton>
        </AdoptButton>
        <RegisterButton onPress={() => navigation.navigate('RegisterPet')}>
          <Dog name="dog" size={22} color="#fff" />
          <TextButton>Cadastrar</TextButton>
        </RegisterButton>
      </Main>
    </Background>
  );
};

export default Home;
