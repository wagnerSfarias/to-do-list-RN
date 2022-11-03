import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Button, ContainerTask, TextTask, Split, ContainerHome } from './styles';

export default function TaskList({ data, editItem, icon }) {

  return (
    <ContainerHome>
      <Container>
        <Button onPress={() => editItem(data)}>

          {icon == data.key ?
            (<Icon name={"square"} color="#FFF" size={26} />) :
            (<Icon name={"check"} color="#FFF" size={26} />)}

        </Button>

        <ContainerTask activeOpacity={0.5} onPress={() => editItem(data)}>
          <TextTask>{data.nome}</TextTask>
        </ContainerTask>

      </Container>
      <Split></Split>
    </ContainerHome>

  )
}
