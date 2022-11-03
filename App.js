import React from 'react';

import { LogBox } from 'react-native';

console.disableYellowBox = true;
import { NavigationContainer } from '@react-navigation/native'

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>

  );
}