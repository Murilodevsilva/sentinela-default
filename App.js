import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/UserContext'

import Routes from './src/Routes'

export default function App() {
  return (
    <UserContextProvider>
  <NavigationContainer>
<StatusBar hidden backgroundColor="#98B6FA" barStyle="light-content" />
<Routes/>

  </NavigationContainer>
  </UserContextProvider>
  
    );
  }
