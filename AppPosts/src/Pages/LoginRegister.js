import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import database from "../Firebase/FirebaseConnection"
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database"
import { useNavigation } from '@react-navigation/native';

console.disableYellowBox = true;

export default function LoginRegister() {

  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [uid, setUid] = useState("")

  const [loginRegister, setLoginRegister] = useState(true)


  useEffect(() => {
    if (uid !== ""){
      navigation.navigate("Home", {uid: uid})
    }
  })

  async function cadastrar() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        const db = getDatabase()

        set(ref(db, `users/${user.uid}`), {
          email: user.email
        });
        setUid(user.uid)






        alert(`Usuário criado com sucesso: ${user.uid}`)
      })
      .catch((error) => {
        console.log("ERRO_CATCH_CADASTRO: ", error)
        // ..
      });

    // setEmail("")
    // setPassword("")

  }





  async function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUid(user.uid)
        alert("Login realizado com sucesso!")

        // setEmail("")
        // setPassword("")
      })
      .catch((error) => {
        console.log("ERRO_CATCH_LOGIN: ", error)
      });
  }


  return (

    <>
      {
        loginRegister ? (
          <View style={styles.container}>

            <Text style={styles.texto}>Email</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setEmail(texto)}
              value={email}
              keyboardType="email-address"
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
              onPress={cadastrar}
            />

            <Text style={styles.LoginCadastro} onPress={() => setLoginRegister(!loginRegister)}>Fazer Login</Text>

          </View>
        ) : (

          <View style={styles.container}>

            <Text style={styles.texto}>Email</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setEmail(texto)}
              value={email}
              keyboardType="email-address"
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setPassword(texto)}
              value={password}
            />

            <Button
              title="Entrar"
              onPress={logar}
            />

            <Text style={styles.LoginCadastro} onPress={() => setLoginRegister(!loginRegister)}>Fazer Cadastro</Text>

          </View>

        )
      }



    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    padding: 35,
    // marginTop: 40,
    backgroundColor: "white",
    paddingTop: 40,

  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 45,
    fontSize: 17,
    marginTop: 5
  },

  LoginCadastro: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 18
  }
});