import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container, Text, TextObjeto, ContainerTexto } from './styles';


export default function TaskList({ data }) {
    const navigation = useNavigation();

    function indicador() {
        if (data.indicadorCarencia === "N") {

            navigation.navigate('DetalhesInvestimentos', { investimento: data })

        } else {
            alert('Investimento com Carência!')
        }
    }

    return (
        <Container onPress={() => indicador()}>


            <ContainerTexto>
                <Text>{data.nome} </Text>
                <TextObjeto>{data.objetivo} </TextObjeto>

            </ContainerTexto>
            <Text>{data.saldoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Text>
        </Container>

    )
}