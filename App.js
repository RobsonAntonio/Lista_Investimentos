import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import SignIn from './src/pages/SignIn';


export default function App() {
  const [user, setUser] = useState(null);


  if (!user) {
    return <SignIn changeStatus={(user) => setUser(user)} />
  }

  return (

    <NavigationContainer>
      <StatusBar backgroundColor='#0038a8' barStyle='light-content' />
      <Routes />

    </NavigationContainer>

  );
}