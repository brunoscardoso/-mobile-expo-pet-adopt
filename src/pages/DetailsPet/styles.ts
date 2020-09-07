import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

export const Container = styled.View`
  margin: 24px 8px 10px 8px;
  background: #fff;
  border-radius: 8px;
  padding: 16px 16px 16px 16px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;
`;

export const TextTitle = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 22px;
`;

export const TextSubTitle = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const TextDetail = styled.Text`
  color: #6c6c80;
  font-size: 14px;
  margin: 0 0 8px 0;
`;

export const TextDetailBold = styled.Text`
  color: #6c6c80;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0 8px 0;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 200px;
`;

export const Circle = styled(Marker)``;

export const AdoptButton = styled.TouchableOpacity`
  background: #f24e4e;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const ShareButton = styled.TouchableOpacity`
  background: #34cb79;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 8px 0px 16px 0;
`;

export const TextButton = styled.Text`
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  font-size: 17px;
`;
