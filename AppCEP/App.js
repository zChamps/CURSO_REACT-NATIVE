
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';

import { useState, useEffect } from 'react';







export default function App() {
  const [numeroCep, setNumeroCep] = useState("")
  const [dados, setDados] = useState([])
  const [variavelCep, setVariavelCep] = useState("")

  const handleSearch = () => {
    setNumeroCep(variavelCep)


  }
  useEffect(() => {
    async function requisicao() {
      try {
        console.log("fazendo requisição")
        const url = `https://viacep.com.br/ws/${numeroCep}/json`;
        const res = await fetch(url);
        const data = await res.json();
        setDados(data);
      } catch (error) {
        // console.error('Erro na requisição:', error);
      }
    }
  
    requisicao();
  }, [numeroCep]);
  


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquise abaixo pelo CEP!</Text>
      <TextInput style={styles.inputText} onChangeText={cep => setVariavelCep(cep)} value={variavelCep} placeholder='Digite o CEP' />
      <TouchableOpacity onPress={handleSearch}>
        <Text style={styles.botao}>Pesquisar!</Text>
      </TouchableOpacity>


      {dados && dados.localidade && <View>
        <Text>Estado:{dados.uf}</Text>
        <Text>Cidade:{dados.localidade}</Text>
        <Text>Bairro:{dados.bairro}</Text>
        <Text>Rua:{dados.logradouro}</Text>
        <Text>DDD:{dados.ddd}</Text>
        <Text>CEP:{dados.cep}</Text>
        
                  </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    gap: 50

  },

  titulo: {
    // color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold"
  },
  inputText: {
    backgroundColor: "white",
    color: "black",
    width: 250,
    paddingLeft: 15,
    borderRadius: 15

  },
  botao: {
    color: "white",
    paddingVertical: 10, // Adiciona preenchimento nas direções vertical (acima e abaixo)
    paddingHorizontal: 30,
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "orange",
    textAlign: "center",
    borderRadius: 15
  },

});



