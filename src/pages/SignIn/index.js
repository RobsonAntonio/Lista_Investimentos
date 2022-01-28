import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from './styles';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function SignIn({ changeStatus }) {
  const [conta, setConta] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {
    if (conta === '101010' && password === '123456') {
      changeStatus(true)


    } else {
      alert('Conta e Senha Inválido!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Container>
          <Logo source={require('../../assets/logo.png')} />

          <AreaInput>
            <Input
              placeholder="Conta"
              autoCorrect={false}
              autoCapitalize='none'
              value={conta}
              onChangeText={(text) => setConta(text)}
              keyboardType="numeric"
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              value={password}
              keyboardType="numeric"
              onChangeText={(text) => setPassword(text)}
            />
          </AreaInput>

          <SubmitButton onPress={handleLogin}>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

        </Container>
      </Background>

    </TouchableWithoutFeedback>
  );
}