import React, { useState } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import {
  Background, Header, HeaderText, Container, ContainerText, HeaderArea, ContainerTexto, Text,
  TextDados, Linha, ContainerSaldo, HeaderList, HeaderTextList, SubmitButton, SubmitText
} from './styles';
import Acao from '../../components/Acao'
import { useRoute } from '@react-navigation/native';
import ModalDetalhes from '../../components/Modal';
import ModalDetalhesError from '../../components/ModalError';


const FooterComponent = ({ onPress, totalResgatar, valorTotal }) => (
  <>
    <ContainerTexto>
      <Text>Valor total a resgatar</Text>
      <TextDados>{totalResgatar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextDados>
    </ContainerTexto>

    <SubmitButton onPress={() => onPress(valorTotal, totalResgatar)}>
      <SubmitText>CONFIRMAR RESGATE</SubmitText>
    </SubmitButton>
  </>
)


const HeaderInvestimento = ({ investimento }) => (
  <>

    <ContainerTexto>
      <Text>Nome</Text>
      <TextDados>{investimento.nome} </TextDados>
    </ContainerTexto>
    <Linha />
    <ContainerSaldo>
      <Text>Saldo total disponivel</Text>
      <TextDados> {investimento.saldoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextDados>
    </ContainerSaldo>

    <HeaderList>

      <HeaderTextList>RESGATE DO SEU JEITO</HeaderTextList>

    </HeaderList>
  </>
)

export default function DetalhesInvestimentos() {

  const [visibleModalError, setVisebleModalError] = useState(false);
  const [visibleModal, setVisebleModal] = useState(false);
  const [resgate, setResgate] = useState([]);
  const route = useRoute();
  const { investimento } = route.params

  let totalResgatar = 0

  resgate.map((item) => totalResgatar += parseFloat(item.valor))


  function confirmarResgate(valorTotal, totalResgatar) {

    let teste = 0

    resgate.map(item => {

      if (totalResgatar > ((item.percentual / 100) * investimento.saldoTotal)) {
        teste++
      }
    })

    if (totalResgatar > valorTotal || teste > 0) {

      setVisebleModalError(true)

    } else {
      setVisebleModal(true)
    }
  }

  function valorResgate(acao, valorDigitado) {
    const todosItensMenosSelecionado = resgate.filter(itemArray => itemArray.id != acao.id)

    if (valorDigitado) {
      setResgate([...todosItensMenosSelecionado, { ...acao, valor: valorDigitado }])

    } else {
      setResgate(todosItensMenosSelecionado)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header>
          <HeaderText>Resgate</HeaderText>
          <HeaderArea />
        </Header>

        <Container>
          <ContainerText>DADOS DO INVESTIMENTO</ContainerText>
        </Container>

        <Modal visible={visibleModal}>
          <ModalDetalhes resgate={resgate} voltar={() => setVisebleModal(false)} />
        </Modal>


        <Modal transparent={true} visible={visibleModalError} >
          <ModalDetalhesError valorTotal={investimento.saldoTotal} resgate={resgate} voltar={() => setVisebleModalError(false)} />
        </Modal>

        <FlatList
          data={investimento.acoes}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<HeaderInvestimento investimento={investimento} />}
          ListFooterComponent={<FooterComponent onPress={confirmarResgate} valorTotal={investimento.saldoTotal} totalResgatar={totalResgatar} />}

          renderItem={({ item }) => <Acao acao={item} valorResgate={valorResgate} valorTotal={investimento.saldoTotal} perc={item.percentual} />
          }
        />

      </Background>
    </TouchableWithoutFeedback>
  );
}