import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import database from "./src/Firebase/FirebaseConnection"
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword  } from "firebase/auth";
import {getDatabase, ref, onValue, set} from "firebase/database"


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRegister from './src/Pages/LoginRegister';
import Home from './src/Pages/Home';
const Stack = createNativeStackNavigator();



console.disableYellowBox=true;

export default function App(){



  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginRegister" component={LoginRegister}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
    marginTop: 100
  },
  texto: {
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});