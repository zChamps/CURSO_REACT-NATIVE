import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';


import database from "./src/Firebase/FirebaseConnection"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  async function cadastrar() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert(`Usuário criado com sucesso: ${user.email}`)
      })
      .catch((error) => {
        console.log("ERRO_CATCH: ", error)
        // ..
      });
      setEmail("")
      setPassword("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
        placeholder='Digite seu email...'
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        placeholder='Digite sua senha...'
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 80,
    backgroundColor: "aqua"
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