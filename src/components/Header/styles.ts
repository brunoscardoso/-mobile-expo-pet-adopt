import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 142px;
  height: 36px;
`;
