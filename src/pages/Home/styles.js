import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${(props) => props.paddingStatusBar};
`;

export const ContainerTitle = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const ContainerButton = styled.View`
flex: 1;
justify-content: center; 
align-items: center; 
`;

export const Background = styled.ImageBackground.attrs({
resizeMode: 'stretch'
})`
width: 100%;
height: 100%;
`;

export const TextTitle = styled.Text`
font-size: 30px;
font-family: sans-serif;
text-align: center;
font-weight: bold;
color: #000;
background-color: rgba(255,255,255,0.6);
width: 95%;
border-radius: 10px;
padding: 10px;
border: 4px solid #15555e;
`;
export const TextBtn = styled.Text`
font-size: 30px;
font-weight: bold;
color:#000000;
`;

export const Button = styled.TouchableOpacity`
width: 60%;
height: 80px;
justify-content:center;
align-items:center;
background-color: rgba(243,215,215,0.9)
`;

