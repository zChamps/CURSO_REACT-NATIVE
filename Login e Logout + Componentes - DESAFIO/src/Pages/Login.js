
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import database from "../Firebase/FirebaseConnection"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


import { UserContext } from "../Context/UserContext"




export default function Login() {
    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(UserContext);
    
    useEffect(() => {
        if (user) {
          navigation.navigate("Home");
        }
      }, [user, navigation]);
  
    async function handleRegister() {
      const auth = getAuth();


      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert(`Usuário criado com sucesso: ${user.email}`)
        

      })
      .catch((error) => {
        console.log("ERRO_CATCH: ", error)
        // ..
      });
  










      await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userFirebase = userCredential.user;

        // Atualiza o estado de user de forma assíncrona
        setUser(userFirebase.email);

        alert("Login realizado com sucesso!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  
  
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Email</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setEmail(texto)}
          value={email}
          keyboardType='email-address'
        />
  
        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setPassword(texto)}
          value={password}
        />
  
        <Button
          title="Cadastrar"
          onPress={handleRegister}
        />
  
  
  
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