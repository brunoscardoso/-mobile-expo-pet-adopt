import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import Dog from '@expo/vector-icons/FontAwesome5';
import Header from '../../components/Header';
import {
  Container,
  FilterContainer,
  DropDownStyled,
  Dropdown,
  DropDownContainerLeft,
  DropDownContainerRight,
  SearchButton,
  TextButton,
  PetList,
  Card,
  Photo,
  TextTitleCard,
  TextDetailCard,
} from './styles';

import api from '../../services/api';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface PetsArray {
  id: number;
  name: string;
  size: string;
  gender: string;
  photoUrl: string;
}

const AdoptPet: React.FC = () => {
  const [pets, setPets] = useState<PetsArray[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState(['']);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityName = response.data.map((city) => city.nome);
        setCities(cityName);
      });
  }, [selectedUf]);

  const navigation = useNavigation();

  async function handleSearchPets(): Promise<void> {
    const response = await api.get(
      `pets?city=${selectedCity}&uf=${selectedUf}`,
    );
    setPets(response.data);
  }

  const Pet = (item) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailsPet', {
          id: item.id,
          item,
        })
      }
    >
      <Card>
        <Photo source={{ uri: item.photo }} />
        <TextTitleCard>{item.name}</TextTitleCard>
        <TextDetailCard>{item.gender}</TextDetailCard>
      </Card>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Pet name={item.name} photo={item.photoUrl} gender={item.gender} />
  );

  return (
    <Container>
      <Header />
      <FilterContainer>
        <DropDownContainerLeft>
          <DropDownStyled>
            <Dropdown
              placeholder={{
                label: 'Selecione Estado',
                value: null,
              }}
              onValueChange={(value) => setSelectedUf(value)}
              items={ufs.map((sigla) => ({
                key: sigla,
                label: sigla,
                value: sigla,
              }))}
            />
          </DropDownStyled>
        </DropDownContainerLeft>
        <DropDownContainerRight>
          <DropDownStyled>
            <Dropdown
              placeholder={{
                label: 'Selecione Cidade',
                value: null,
              }}
              onValueChange={(value) => setSelectedCity(value)}
              items={cities.map((city) => ({
                key: city,
                label: city,
                value: city,
              }))}
            />
          </DropDownStyled>
        </DropDownContainerRight>
        <SearchButton onPress={handleSearchPets}>
          <Dog name="dog" size={16} color="#fff" />
          <TextButton>Procurar</TextButton>
        </SearchButton>
      </FilterContainer>

      <PetList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default AdoptPet;
