import React, { useState } from "react";
import { Container, Texto, Button, ContainerModal, TextTituloAviso, TextAviso, TextAvisoAcao } from './styles';


function calculoSaldoMaximo(perc, valorTotal) {
    
    return ((perc / 100) * valorTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export default function ModalDetalhesError({ voltar,resgate, valorTotal }) {
    
    return (
        <Container>
            <ContainerModal>

                <TextTituloAviso>
                    DADOS INVÁLIDOS
                </TextTituloAviso>

                <TextAviso>
                    Você preencheu um ou mais campos com valor acima do permitido:
                </TextAviso>


                {
                resgate.map(item => <TextAvisoAcao>{`${item.nome.substr(
                    item.nome.indexOf('(')).replace('(', '').replace(')', '')}: Valor máximo de R$ ${calculoSaldoMaximo(item.percentual, valorTotal)}`}</TextAvisoAcao>)
                }


                <Button onPress={voltar}>
                    
                    <Texto>CORRIGIR</Texto>
                </Button>
            </ContainerModal>
        </Container>
    );
}
