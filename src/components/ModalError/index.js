import React, { useState } from "react";
import { Container, Texto, Button, ContainerModal, TextTituloAviso, TextAviso, TextAvisoAcao } from './styles';


function calculoSaldoMaximo(perc, valorTotal) {

    return ((perc / 100) * valorTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export default function ModalDetalhesError({ voltar, resgate, valorTotal }) {
    // retorna todas as acoes onde o valor digitado for > que o saldo acumulado
    const resgatesNaoValidos = resgate.filter(acao => {
        const saldoAcumulado = ((acao.percentual / 100) * valorTotal)
        return acao.valor > saldoAcumulado
    })

    return (
        <Container>
            <ContainerModal>

                <TextTituloAviso>
                    DADOS INVÁLIDOS
                </TextTituloAviso>

                <TextAviso>
                    Você preencheu um ou mais campos com valor acima do permitido:
                </TextAviso>

                {/* exibe todos os itens encontrados nos resgates nao validos  */}
                {
                    resgatesNaoValidos.map(item => <TextAvisoAcao key={item.id}>{`${item.nome.substr(item.nome.indexOf('(')).replace('(', '').replace(')', '')}: Valor máximo de R$ ${calculoSaldoMaximo(item.percentual, valorTotal)}`}</TextAvisoAcao>)
                }

                <Button onPress={voltar}>

                    <Texto>CORRIGIR</Texto>
                </Button>
            </ContainerModal>
        </Container>
    );
}
