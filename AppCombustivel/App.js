
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image } from 'react-native';

import { useState, useEffect } from 'react';

import ModalGasPrice from './src/Components/ModalGasPrice';







export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [valorGasolina, setValorGasolina] = useState()
  const [valorAlcool, setValorAlcool] = useState()
  const [usarAlcool, setUsarAlcool] = useState(false)
  const [error, setError] = useState(false)


  const Sair = () => {
    setModalVisible(false)
  }

  const handleCalculus = () => {
    console.log(valorAlcool)
    if (valorAlcool && valorGasolina) {
      const alcoolTratado =  valorAlcool.replace(',', '.')
      const gasolinaTratado =  valorGasolina.replace(',', '.')



      const resultado = alcoolTratado / gasolinaTratado
      resultado >= 0.7 ? setUsarAlcool(true) : setUsarAlcool(false)

      setModalVisible(true)
      setError(false)
    } else {
      setError(true)
    }

  }

  return (


    <View style={styles.container}>
      <Image source={require("./src/img/logo.png")} />
      <Text style={styles.titulo}>Qual a melhor opção?</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.texto}>Álcool (preço por litro):</Text>
        <TextInput style={styles.inputText} keyboardType="numeric" onChangeText={value => setValorAlcool(value)} value={valorAlcool} placeholder='Insira o valor do Álcool...' />
        <Text style={styles.texto}>Gasolina (preço por litro):</Text>
        <TextInput style={styles.inputText} keyboardType="numeric" onChangeText={value => setValorGasolina(value)} value={valorGasolina} placeholder='Insira o valor da Gasolina...' />
        {error && <Text style={{ color: "white", fontSize: 24, backgroundColor: "red", textAlign: "center" }}>Preencha os dois campos!</Text>}
        <TouchableOpacity onPress={handleCalculus}>
          <Text style={styles.botao}>Calcular!</Text>
        </TouchableOpacity>
      </View>

      <ModalGasPrice modalVisible={modalVisible} valorAlcool={valorAlcool} valorGasolina={valorGasolina} usarAlcool={usarAlcool} Sair={Sair}/>
      


    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0F0F0F"

  },
  subcontainer: {
    width: "90%",
    display: "flex",
    gap: 10
  },
  inputText: {
    backgroundColor: "white",
    color: "black",
    width: "250px"
  },
  texto: {
    color: "white"
  },
  textoTituloModal: {
    color: "white",
    fontSize:24,
    marginBottom: 12
  },
  textoModal: {
    color: "white",
    fontSize:16
  },
  titulo: {
    color: "white",
    fontSize: 36,
  },
  botao: {
    color: "white",
    paddingVertical: 10, // Adiciona preenchimento nas direções vertical (acima e abaixo)
    paddingHorizontal: 30,
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "orange",
    textAlign: "center"
  },

});



