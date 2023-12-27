import { StyleSheet, Text, View } from 'react-native';

//Arquivo de configuração do firebase
import database from "./src/Firebase/FirebaseConnection"
import {getDatabase, ref, onValue} from "firebase/database"

import { useEffect, useState } from 'react';

export default function App() {

  const [nome, setNome] = useState("Carregando....")
  const [idade, setIdade] = useState()


  useEffect(() => {
    const db = getDatabase()
    async function Dados(){
        ////// "Nome" é um nó principal criado no firebase, caso precise de outro, importar outro
        // const nome = ref(db, "Nome")

        //////Aqui, nome é um sub nó que contem varios atributos
        const usuarios = ref(db, "Usuarios/1/")

        await onValue(usuarios, snapshot => {
          /////Caso seja somente 1 atributo na consulta, acessar assim
          // const data = snapshot.val()


          /////Caso tenha mais de um atributo na consulta, acessar assim, colocando .NomeDaChave depois do .val()
          const nome = snapshot.val().Nome
          const idade = snapshot.val().Idade
          setNome(nome)
          setIdade(idade)
      })
      }
      Dados()

  }, [])

  return (
    <View style={styles.container}>
      <Text>Olá {nome}</Text>
      <Text>Você tem {idade} anos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
