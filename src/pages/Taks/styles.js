import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
padding-top: ${(props)=>props.paddingStatusBar};
padding-left: 10px;
padding-right: 10px;
background-color: #ecb3b3;
`;

export const ContainerWarner = styled.View`
flex-direction: row;
margin-bottom: 20px;
align-items:center;
background-color: rgba(25,25,25,0.8); 
height: 50px;
`;
export const TxtWarner = styled.Text`
margin-left: 10px;
margin-right: 10px;
font-size: 18px;
color: #FFF;
font-weight: bold;
`;

export const ContainerTitle = styled.View`
flex-direction : row;
`;
export const Input = styled.TextInput`
flex: 1;
margin-bottom:10px;
padding:10px;
background-color: #fff;
border-radius:4px;
border-width: 1px;
border-color:#141414;
height: 55px;
font-size:18px;
`;

export const ButtonAdd = styled.TouchableOpacity `

height: 55px;
align-items: center;
justify-content: center;
margin-left: 5px;
padding: 0px 14px;
border-radius: 10px;
border: 5px #2B62A0 solid;
`;

export const TxtBtn = styled.Text`
color: #000;
font-size:34px; 
font-weight: bold;
`;


