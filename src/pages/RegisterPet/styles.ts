import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.SafeAreaView``;

export const Card = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin: 24px 8px 10px 8px;
  background: #fff;
  border-radius: 8px;
  padding: 16px 16px 16px 16px;
`;

export const Scroll = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const Title = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin: 5px 0 8px 0;
`;

export const GroupContainer = styled.View`
  margin: 10px 0 0 0;
  flex-direction: row;
`;

export const DropDownContainerLeft = styled.View`
  justify-content: center;
  padding-right: 10px;
  width: 50%;
`;

export const DropDownContainerRight = styled.View`
  justify-content: center;
  width: 50%;
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

export const PhotoButton = styled.TouchableOpacity``;

export const Photo = styled.Image`
  width: 100%;
  height: 185px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background: #34cb79;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  padding-left: 15px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  font-size: 17px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.1)',
})`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: #f0f0f5;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  color: #6c6c80;
`;
