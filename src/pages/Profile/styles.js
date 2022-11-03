import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #ecb3b3;
`;

export const Title = styled.Text`
margin-top: 50%;
font-size: 30px;
margin-bottom: 20px;
color: #FFF;
`;

export const ButtonExit = styled.TouchableOpacity`
width: 80%;
height: 50px;
justify-content: center;
align-items: center;
background-color: #c1c1c1;
margin-top: 30px;
border-radius: 4px;
 `;

export const TextBtn = styled.Text`
color: #000;
font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
margin-top: 10px;
background-color: #428cfd;
width: 80%;
height: 50px;
border-radius: 4px;
align-items: center;
justify-content: center;
`;

export const ButtonText = styled.Text`
font-size: 18px;
color: #FFF;
`;

export const ModalContainer= styled.KeyboardAvoidingView`
width: 90%;
height: 70%;
background-color: #FFF;
position: absolute;
bottom: 0;
justify-content: center;
align-items: center;
margin-left: 5%;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const ButtonBack= styled.TouchableOpacity`
position: absolute;
top:15px;
left: 25px;
flex-direction: row;
align-items: center;
`;

export const Input = styled.TextInput`
background-color: #ddd;
width: 90%;
border-radius: 4px;
padding: 10px;
font-size: 18px;
color: #121212;
text-align: center;
`;

export const TextUser = styled.TextInput`
font-size: 18px;
color: #121212;
`;