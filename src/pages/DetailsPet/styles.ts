import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

export const Container = styled.View``;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;
`;

export const TextTitleCard = styled.Text`
  color: #000;
  font-weight: bold;
  padding-left: 4px;
  font-size: 18px;
`;

export const TextDetailCard = styled.Text`
  color: #000;
  font-size: 12px;
  padding-left: 4px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 200px;
`;

export const Circle = styled(Marker)``;
