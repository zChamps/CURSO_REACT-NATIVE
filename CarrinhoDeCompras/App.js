import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carrinho from './src/Pages/Carrinho';
import Home from './src/Pages/Home';
import { CartContextProvider } from './src/Context/CartContext';
const Stack = createNativeStackNavigator();



console.disableYellowBox = true;

export default function App() {



  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ title: "Lista de Produtos", headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ title: "Meu Carrinho" }} name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 100
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});