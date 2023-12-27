
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';

import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/Pages/Home';
import About from './src/Pages/About';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',

          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth: 0
          }

        }}
      >
      <Tab.Screen name="Home" component={Home} options={{title: "Home Page", tabBarIcon: (color, size) => { return <Ionicons name="home" size={25} color={color} />}, headerStyle:{backgroundColor: "aqua"}, headerTintColor: "white", headerShown: true}}/>
      <Tab.Screen name="About" options={{tabBarIcon: (color, size) => { return <Feather name="file-text" size={25} color={color} />},}} component={About}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    gap: 50

  },

  titulo: {
    // color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold"
  },
  inputText: {
    backgroundColor: "white",
    color: "black",
    width: 250,
    paddingLeft: 15,
    borderRadius: 15

  },
  botao: {
    color: "white",
    paddingVertical: 10, // Adiciona preenchimento nas direções vertical (acima e abaixo)
    paddingHorizontal: 30,
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "orange",
    textAlign: "center",
    borderRadius: 15
  },

});



