import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
flex:1;
background-color: #ecb3b3; 
justify-content: center;
align-items: center;
padding-top:24px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
height: 100px;
margin-top: 20px;
`;

export const Input = styled.TextInput`
width: 80%;
background-color: #FFF;
margin-top: 10px;
padding: 10px;
border-radius: 8px;
font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
width: 80%;
background-color: #418cfd;
border-radius: 8px;
margin-top: 20px;
padding: 10px;
align-items: center;
justify-content: center;
`;

export const ButtonText = styled.Text`
color: #FFF;
font-size: 20px;
`;

export const SignUpButton = styled.TouchableOpacity`
width: 100%;
margin-top: 10px;
justify-content: center;
align-items: center;
`;

export const SignUpText = styled.Text`
font-size: 18px;
`;

export const ViewLogo = styled.View`
background-color: #38A69D;
justify-content:center ;
width: 100px;
height: 10px; 
margin-top: 10%;
`;

