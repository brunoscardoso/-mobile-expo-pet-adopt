import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.View``;

export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  margin: 24px 8px 10px 8px;
  background: #fff;
  border-radius: 8px;
  padding: 8px 8px 8px 8px;
`;

export const DropDownContainerLeft = styled.View`
  justify-content: center;
  padding-right: 10px;
  width: 33%;
`;

export const DropDownContainerRight = styled.View`
  justify-content: center;
  width: 33%;
`;

export const DropDownStyled = styled.View`
  height: 40px;
  background: #f0f0f5;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled(RNPickerSelect)`
  background: #6c6c80;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #34cb79;
  height: 40px;
  width: 30%;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  padding: 0px 8px 0px 10px;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
`;

export const PetList = styled.FlatList.attrs({
  justifyContent: 'center',
})`
  margin: 0px 8px 10px 8px;
`;

export const Card = styled.View.attrs({
  height: 135,
  width: Dimensions.get('window').width / 3 - 6,
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  background: #fff;
  border-radius: 8px;
  margin: 1px;
`;

export const Photo = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TextTitleCard = styled.Text`
  color: #000;
  font-weight: bold;
  padding-left: 4px;
  font-size: 14px;
`;

export const TextDetailCard = styled.Text`
  color: #000;
  font-size: 12px;
  padding-left: 4px;
`;
