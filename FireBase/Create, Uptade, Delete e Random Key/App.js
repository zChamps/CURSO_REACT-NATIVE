import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//Arquivo de configuração do firebase
import database from "./src/Firebase/FirebaseConnection"
import {getDatabase, ref, onValue, set, remove, child, push, update} from "firebase/database"

import { useEffect, useState } from 'react';

export default function App() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState()
  const teste = "WILLIAN DESCHAMPS"
  const idteste = "10"

  const db = getDatabase()
  useEffect(() => {
    async function Dados(){
        ////// "Nome" é um nó principal criado no firebase, caso precise de outro, importar outro
        // const nome = ref(db, "Nome")

        //////Aqui, nome é um sub nó que contem varios atributos
        const usuarios = ref(db, "Usuarios/1/")




        /////////////// Criar dados dentro do db, usar o nó onde quer criar algum dado, no exemplo é "users/5"
        // set(ref(db, 'users/5'), {
        //   id: idteste,
        //   username: teste,
        // });



        ////////////////Remover algum dado, no caso é "users/5"
        // remove(ref(db, 'users/4'));




        /////////////// Atualizar dados
        // const updates = {};
        // updates['/users/2'] = "TESTEEEE";
        // console.log(updates)

        // return update(ref(db), {"/users/9": "TESTEEEE NOvo", "/users/8": "lalalal"})



        //////Criar key aleatória, no caso estou usando o nó "users"
        // const newPostKey = push(child(ref(db), 'users')).key;
        // console.log(newPostKey)
      }
      Dados()

  }, [])


  const Cadastrar = () =>{
    const newPostKey = push(child(ref(db), 'users')).key;
    set(ref(db, `users/${newPostKey}`), {
      nome: nome,
      idade: idade
  })

    alert("Cadastrado com sucesso!")
    setNome("")
    setIdade("")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto) }
      value={nome}
      />

      <Text style={styles.texto}>Idade</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setIdade(texto) }
      value={idade}
      />

      <Button
      title="Novo funcionario"
      onPress={Cadastrar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
    marginTop: 80
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
    fontSize: 17,
  }
})