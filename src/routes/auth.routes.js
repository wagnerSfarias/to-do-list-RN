import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home';
import Login from '../pages/Login';


const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>

  );
}

export default AuthRoutes;
