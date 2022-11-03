import React, { useContext, useState, useEffect } from 'react';
import { Modal, Keyboard } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { Container, Title, ButtonExit, TextBtn, Button, ButtonText, ModalContainer, ButtonBack, Input, TextUser } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


export default function Profile() {
  const { signOut, user, storageUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(user?.nome);
  const uid = user && user.uid;

  useEffect(() => {
    function loadProfile() {
      firestore().collection('users').doc(uid).onSnapshot(doc => {
         
        let data = {
            uid: uid,
            nome: doc.data().nome,
          }

          storageUser(data);
          setNome(doc.data().nome);

        })
    }

    loadProfile();

  }, [])


  async function updateProfile() {
    if (nome === '') {
      return;
    }
    firestore().collection('users').doc(uid).update({
      nome: nome
    }).then(() => {
      auth().currentUser.updateProfile({
        displayName: nome
      })
    })

    let data = {
      uid: uid,
      nome: nome,
    }
    Keyboard.dismiss();
    storageUser(data);
    setOpen(false);
  }

  return (
    <Container>
      <Title>{nome}</Title>

      <Button onPress={() => setOpen(true)}>
        <ButtonText>Atualizar Perfil</ButtonText>
      </Button>

      <ButtonExit onPress={() => signOut()}>
        <TextBtn>SAIR</TextBtn>
      </ButtonExit>

      <Modal visible={open} animationType='slide' transparent={true}>
        <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'} >
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left"
              size={22}
              color="#121212" />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>

          <TextUser color="#121212">Nome</TextUser>

          <Input placeholder={user?.nome}
            value={nome}
            onChangeText={(text) => setNome(text)} />

          <Button bg="#428cfd" onPress={updateProfile} >
            <ButtonText color="#fff">Salvar</ButtonText>
          </Button>

        </ModalContainer>

      </Modal>
    </Container>
  );
}

