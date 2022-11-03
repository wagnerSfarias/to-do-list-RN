import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Taks from '../pages/Taks';
import Profile from '../pages/Profile';

import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#2B62A0',
        height: 60,
        borderTopWidth: 0
      }
    }}>
      <Tab.Screen name="Inicio" component={Taks} options={{
        tabBarIcon: ({ color, size }) => {
          return <Icon name="home" color={color} size={35} />
        }
      }} />
      <Tab.Screen name="Perfil" component={Profile} options={{
        tabBarIcon: ({ color, size }) => {
          return <Icon name="user" color={color} size={35} />
        }
      }} />
    </Tab.Navigator>
  )
}

export default AppRoutes;