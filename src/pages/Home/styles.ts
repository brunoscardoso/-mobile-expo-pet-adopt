import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Logo = styled.Image`
  margin-top: 350px;
`;

export const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 32px;
  margin-top: 14px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
`;

export const AdoptButton = styled.TouchableOpacity`
  background: #f24e4e;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  padding-left: 15px;
  margin-top: 30px;
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
