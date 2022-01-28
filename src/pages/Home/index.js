import React, { useState, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Background, Header, HeaderText, Container, ContainerText, ContainerValor, HeaderArea } from './styles';
import TaskList from '../../components/TaskList'
import api from '../../services/api';

export default function Home() {
  const [investimentos, setInvestimentos] = useState([]);

  useEffect(() => {

    async function getInvestimentos() {
      const response = await api.get('v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653');
      setInvestimentos(response.data.response.data.listaInvestimentos);

    }

    getInvestimentos();
  }, []);


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header>
          <HeaderText>Resgate</HeaderText>
          <HeaderArea />
        </Header>

        <Container>

          <ContainerText>INVESTIMENTOS</ContainerText>
          <ContainerValor>R$</ContainerValor>
        </Container>

        <FlatList
          data={investimentos}
          renderItem={({ item }) => <TaskList data={item} />
          }
        />

      </Background>
    </TouchableWithoutFeedback>
  );
}