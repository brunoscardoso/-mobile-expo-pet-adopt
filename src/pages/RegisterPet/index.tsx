import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';

import {
  Container,
  Scroll,
  Card,
  PhotoButton,
  Photo,
  Title,
  Label,
  GroupContainer,
  DropDownContainerLeft,
  DropDownContainerRight,
  DropDownStyled,
  Dropdown,
  RegisterButton,
  TextButton,
  Input,
} from './styles';

import uploadPreview from '../../assets/upload-image.png';

import Header from '../../components/Header';

import api from '../../services/api';

interface FilePhoto {
  path: string;
  filename: string;
  type: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const RegisterPet: React.FC = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [path, setPath] = useState<FilePhoto>();
  const [filename, setFilename] = useState<FilePhoto>();
  const [type, setType] = useState<FilePhoto>();

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
    setSelectedPosition([23.23232323, 49.923293293]);
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

  const [genders] = useState([
    { label: 'Macho', value: 'Macho' },
    { label: 'Fêmea', value: 'Fêmea' },
  ]);

  const [sizes] = useState([
    { label: 'Pequeno', value: 'Pequeno' },
    { label: 'Médio', value: 'Médio' },
    { label: 'Grande', value: 'Grande' },
  ]);

  async function handleSubmit(): Promise<void> {
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;

    const data = new FormData();

    data.append('name', name);
    data.append('size', size);
    data.append('gender', gender);
    data.append('uf', uf);
    data.append('city', city);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));

    data.append('photo', {
      uri: path,
      type,
      name: filename,
    });

    await api.post('pets', data);
  }

  async function handleChangePhoto(): Promise<void> {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPath(result.uri);
      setType(result.type);
      const getFilename = result.uri.split(/\/(?=[^]+$)/).pop();
      setFilename(getFilename);
    }
  }

  return (
    <>
      <Header />
      <Scroll>
        <Container>
          <Card>
            <Title>Cadastro do Pet</Title>
            <PhotoButton onPress={handleChangePhoto}>
              <Photo source={path ? { uri: path } : uploadPreview} />
            </PhotoButton>
            <Label>Nome (psiu, batisa ele ai)</Label>
            <Input onChangeText={(value) => setName(value)} value={name} />
            <GroupContainer>
              <DropDownContainerLeft>
                <Label>Porte</Label>
                <DropDownStyled>
                  <Dropdown
                    placeholder={{
                      label: 'Selecione o tamanho',
                      value: null,
                    }}
                    onValueChange={(value) => setSize(value)}
                    items={sizes}
                  />
                </DropDownStyled>
              </DropDownContainerLeft>

              <DropDownContainerRight>
                <Label>Sexo</Label>
                <DropDownStyled>
                  <Dropdown
                    placeholder={{
                      label: 'Selecione o sexo',
                      value: null,
                    }}
                    onValueChange={(value) => setGender(value)}
                    items={genders}
                  />
                </DropDownStyled>
              </DropDownContainerRight>
            </GroupContainer>

            <GroupContainer>
              <DropDownContainerLeft>
                <Label>Estado</Label>
                <DropDownStyled>
                  <Dropdown
                    placeholder={{
                      label: 'Selecione o UF',
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
                <Label>Cidade</Label>
                <DropDownStyled>
                  <Dropdown
                    placeholder={{
                      label: 'Selecione a cidade',
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
            </GroupContainer>

            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />

            <RegisterButton onPress={handleSubmit}>
              <TextButton>Cadastrar</TextButton>
            </RegisterButton>
          </Card>
        </Container>
      </Scroll>
    </>
  );
};

export default RegisterPet;
