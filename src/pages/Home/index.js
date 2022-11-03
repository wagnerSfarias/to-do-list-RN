import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, ContainerTitle, ContainerButton, TextTitle, Button, TextBtn, Background } from './styles';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function Home() {
    const navigation = useNavigation();
    return (
        <Background source={require('../../assets/imgFundo.jpg')}>

            <Container paddingStatusBar={`${statusBarHeight + 'px'}`}>
                <StatusBar backgroundColor='rgba(243,215,215,0.9)' translucent={true} barStyle="dark-content" />

                <ContainerTitle>
                    <TextTitle>Criado para ajudar a gerenciar suas tarefas diarias.</TextTitle>
                </ContainerTitle>

                <ContainerButton>
                    <Button onPress={() => navigation.navigate("Login")}>
                        <TextBtn>Iniciar</TextBtn>
                    </Button>
                </ContainerButton>

            </Container>
        </Background>

    );
}
