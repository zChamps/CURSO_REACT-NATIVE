import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import database from "./src/Firebase/FirebaseConnection"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



console.disableYellowBox = true;

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');



  async function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.email)
        alert("Login realizado com sucesso!")

        // setEmail("")
        // setPassword("")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  async function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Logout realizado com sucesso!")
    }).catch((error) => {
      alert(error)
    });

    setUser("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />

      <Button
        title="Acessar"
        onPress={logar}
      />



      {user.length > 0 ?
        (<>
          <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center' }}>
            Você está logado como: {user}
          </Text>
          <Button
            title="Deslogar"
            onPress={logout}
          />
        </>
        ) :
        (
          <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center' }}>
            Nenhum usuario esta logado
          </Text>
        )}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 80
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