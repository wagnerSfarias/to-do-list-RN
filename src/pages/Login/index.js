import React, { useState, useContext } from 'react';
import { ActivityIndicator, Platform, Keyboard, Alert } from 'react-native';

import { Container, Input, Button, ButtonText, SignUpButton, SignUpText, Image } from './styles';

import { AuthContext } from '../../contexts/auth';
export default function Login() {

  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');

  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  async function handleSignIn() {
    Keyboard.dismiss();

    if (email === '' || password === '') {
      Alert.alert(
        "Atenção !!",
        "Preencha todos os campos!",
        [
          { text: "OK" }
        ]
      )
      return;
    }

    await signIn(email, password);

  }

  async function handleSignUp() {
    Keyboard.dismiss();

    if (name === '' || email === '' || password === '') {
      Alert.alert(
        "Atenção !!",
        "Preencha todos os campos para finalizar o cadastro!",
        [
          { text: "OK" }
        ]
      )

      return;
    }
    await signUp(email, password, name);

  }


  if (login) {
    return (
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled>

        <Image source={require('../../assets/logo.png')} />

        <Input
          placeholder="seuemail@teste.com"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="******"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Button onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )
          }

        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>

      </Container>
    )
  }

  return (
    <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
        >
      <Image source={require('../../assets/logo.png')} />

      <Input
        placeholder="Seu nome"
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input
        placeholder="seuemail@teste.com"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="******"
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )
        }

      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já tenho uma conta</SignUpText>
      </SignUpButton>

    </Container>
  )
}

