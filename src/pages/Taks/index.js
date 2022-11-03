import React, { useState, useEffect, useContext, useRef } from 'react';
import { FlatList, TouchableOpacity, Keyboard, Alert, StatusBar } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, ContainerWarner, ContainerTitle, Input, ButtonAdd, TxtBtn, TxtWarner } from './styles';
import TaskList from '../../components/TaskList';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function Taks() {

  const inputRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIcon, setEditIcon] = useState('');
  const [key, setKey] = useState('');
  const uid = user.uid;


  useEffect(() => {

    function loadTaks() {

       firestore().collection('tarefas').where('userUid', '==', uid)
        .onSnapshot(snapshot => {
          let task = [];
          snapshot.forEach((doc) => {
            task.push({
              key: doc.id,
              nome: doc.data().tarefa
            })
          })

          setTasks(task)
        })

    }
    loadTaks();
  }, [])

  function handleAdd() {
    if (newTask == '') {
      Alert.alert(
        "Atenção", "Área de tarefa vazia!"
      )
      return;
    }

 
    if (key !== '') {
      firestore().collection('tarefas').doc(key).update({
        tarefa: newTask
      })

      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      setEditIcon(!editIcon);
      return;
    }

   

    firestore().collection('tarefas').add({
      tarefa: newTask,
      created: new Date(),
      userUid: uid
    })
   
    Keyboard.dismiss();
    setNewTask('');
  }

  async function handleDelete(key) {

    await firestore().collection('tarefas').doc(key).delete();

  }

  function handleEdit(data) {
    Alert.alert(
      'Atenção!!',
      'Você deseja editar ou excluir ? ',
      [{
        text: 'Excluir',
        onPress: () => handleDelete(data.key)
      },
      {
        text: 'Editar',
        onPress: () => {
          setEditIcon(data.key);
          setKey(data.key);
          setNewTask(data.nome);
          inputRef.current.focus();
        }
      }
      ]
    )
  }

  function cancelEdit() {
    setKey('');
    setNewTask('');
    setEditIcon('');
    Keyboard.dismiss();
  }

  return (
    <Container paddingStatusBar={`${statusBarHeight + 'px'}`}>
      <StatusBar backgroundColor='rgba(243,215,215,0.9)' translucent={true} barStyle="dark-content" />

      {key.length > 0 && (
        <ContainerWarner>
          <TouchableOpacity onPress={cancelEdit}>
            <Icon name='times-circle' size={30} color='red' />
          </TouchableOpacity>
          <TxtWarner>Atenção, você está editando uma tarefa!</TxtWarner>
        </ContainerWarner>
      )}
      <ContainerTitle >
        <Input
          placeholder="O que vai fazer hoje ?"
          autoCorrect={true}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          ref={inputRef}
          maxLength={40}
        />

        <ButtonAdd
          onPress={handleAdd}>
          <TxtBtn>+</TxtBtn>
        </ButtonAdd>

      </ContainerTitle>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{height:'100%'}}
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TaskList data={item} editItem={handleEdit} icon={editIcon} />
        )}
      />
    </Container>
  );
}
