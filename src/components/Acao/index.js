
import React, { useState } from "react";
import { Container, Text, TextDados, ContainerTexto, AreaInput, Linha, Input, TextInput } from './styles';
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Acao({ acao, valorResgate, valorTotal, perc }) {

    const [valor, setValor] = useState('');

    valorPercentual = ((perc / 100) * valorTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>

                <ContainerTexto>
                    <Text>Ação</Text>
                    <TextDados>{acao.nome}</TextDados>
                </ContainerTexto>
                <Linha />
                <ContainerTexto>
                    <Text>Saldo acumulado</Text>

                    <TextDados>{valorPercentual} </TextDados>

                </ContainerTexto>
                <Linha />
                <AreaInput>
                    <TextInput>Valor a Resgatar</TextInput>
                    <Input
                        placeholder="R$:"
                        autoCorrect={false}
                        autoCapitalize='none'

                        value={valor}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            setValor(text)
                            valorResgate(acao, text)
                        }}
                    />
                    <Linha />
                </AreaInput>
            </Container>
        </TouchableWithoutFeedback>
    )
}