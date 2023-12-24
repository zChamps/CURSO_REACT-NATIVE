import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity } from 'react-native';
import Pessoa from "./src/Components/Pessoa/Pessoa"
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import React, { Component } from 'react';



import AsyncStorage from '@react-native-async-storage/async-storage'






import { useState, useEffect } from 'react';

export default function App() {

  const [nome, setNome] = useState("")

  useEffect(() => {
   const carregarDados = async () => {
    try {
      // Recupera os dados do AsyncStorage
      const dadosArmazenados = await AsyncStorage.getItem('nome')
      
      // Atualiza o estado com os dados recuperados
      setNome(dadosArmazenados || ''); // Use '' se não houver dados armazenados
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
    }


   }

   carregarDados()
  }, [])

  const handleClick = async () => {
    setNome(variavel)
    try {
      // Armazena os dados no AsyncStorage
      await AsyncStorage.setItem('nome', variavel);

    } catch (error) {
      console.error('Erro ao armazenar os dados:', error);
    }

  }


  const [variavel, setVariavel] = useState()
  // console.log(variavel)
  return (


    <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput
        style={styles.input}
        value={variavel}
        onChangeText={(text)=> setVariavel(text)}
        underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>

      </View> 


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 40

  },
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }

});



