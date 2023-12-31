import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

console.disableYellowBox = true;

export default function Carrinho() {

  const navigation = useNavigation()
 
  const route = useRoute();
  const produtosCarrinho = route.params
  console.log(produtosCarrinho)

 
  const [valorTotal, setValorTotal] = useState(0)

  return (

    <View style={styles.container}>
      <FlatList
        data={produtosCarrinho} // Array de dados a serem exibidos
        style={styles.FlatList}
        renderItem={produto => {
          console.log(produto)
          return (
          <View style={styles.containerProduto}>
            <View style={styles.subContainerNomeValor}>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{produto.item.name}</Text>
              <Text style={{fontSize: 15}}>R$ {produto.item.price}</Text>
            </View>
            
          </View>
          )
        }} // Função para renderizar cada item
        keyExtractor={(item) => item.id} // Função para extrair uma chave única para cada item
      />

      <Text>Total: {valorTotal}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: "white",
    // alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    justifyContent: "space-around"
    
  },
  containerProduto:{
    flex: 1,
    // width: 400,
    // backgroundColor: "aqua",
    marginBottom: 30,
    gap: 5,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingRight: 25,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    
    
  },
  // FlatList:{
  //   flex: 1,
  //   width: 450,
  //   // backgroundColor: "aqua",
  //   marginTop: 30

  // },
  subContainerNomeValor:{
    flex: 1,
    gap: 10,
    
  },

  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
    // backgroundColor: "aqua",
    width: 440,
    marginTop: 50
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText:{
    fontSize: 12,
  }

})