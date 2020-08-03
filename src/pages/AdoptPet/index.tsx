import React, { useEffect } from 'react';

import Header from '../../components/Header';
import { Container } from './styles';

import api from '../../services/api';

const AdoptPet: React.FC = () => {
  useEffect(() => {
    async function getPets() {
      const response = await api.get(`pets?city=Navegantes&uf=SC`);
      console.log(response.data);
    }
    getPets();
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default AdoptPet;
