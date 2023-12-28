import { FlatList, StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

//Arquivo de configuração do firebase
import database from "./src/Firebase/FirebaseConnection"
import {getDatabase, ref, onValue} from "firebase/database"

import { useEffect, useState } from 'react';

export default function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getDatabase()
    async function Dados(){
      setUsers([])
        // Indicando qual nó vamos selecionar
        const users = ref(db, "users")

        //Retornando o que tem dentro do nó
        await onValue(users, snapshot => {
          
          //Snapshot contem todos os itens dentro do nó juntos, usando o forEach para separar cada um deles individualmente e colocar dentro de data, para incluir dentro do array 
          snapshot.forEach(person => {
            let data = {
              key: person.key,
              name: person.val().nome,
              age: person.val().idade
            }
            setUsers(oldArray => [...oldArray, data])
          })


          setLoading(false)
      })
      }
      Dados()
  }, [])

  return (
    <SafeAreaView style={styles.container}>

        {/* Usando  ActivityIndicator para mostrar a bolinha de carregamento e depois a FlatList para renderizar os usuários*/}
        {loading ? <ActivityIndicator color="red" size={88}/> : <FlatList data={users} keyExtractor={(item) => item.key} renderItem={ ({item}) => <Pessoa data={item} /> } />}

        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
});




const Pessoa = ({data}) => {
  return (
    <SafeAreaView>
      <Text>Nome: {data.name}</Text>
      <Text>Idade: {data.age}</Text>
    </SafeAreaView>
  )
}

