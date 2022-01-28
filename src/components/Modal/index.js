import React from "react";
import { Container, Texto, Button, ContainerModal, TextTituloAviso, TextAviso } from './styles';

export default function ModalDetalhes(props) {

    return (
        <Container>
            <ContainerModal>
                <TextTituloAviso>
                    RESGATE EFETUADO!
                </TextTituloAviso>
                <TextAviso>
                    O valor solicitado estará em sua conta em até 5 dias úteis!
                </TextAviso>
                <Button onPress={props.voltar}>
                    <Texto>NOVO RESGATE</Texto>
                </Button>
            </ContainerModal>
        </Container>
    );
}
