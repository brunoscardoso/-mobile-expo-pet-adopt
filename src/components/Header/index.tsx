import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ArrowLeft from '@expo/vector-icons/Ionicons';
import { Container, BackButton, Logo } from './styles';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <ArrowLeft name="md-arrow-back" size={32} color="#34cb79" />
      </BackButton>
      <Logo source={logo} />
      <BackButton />
    </Container>
  );
};

export default Header;
