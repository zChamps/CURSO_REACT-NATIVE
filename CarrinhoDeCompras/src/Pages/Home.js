import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {productsCart, setProductsCart, produtosComQuantidades, products} = useContext(CartContext)

  


  const [numberProductsCart, setNumberProductsCart] = useState(0)


  const handleCartClick = () => {
    navigation.navigate("Carrinho")
  }


  useEffect(() => {
    setNumberProductsCart(productsCart.length)
  }, [productsCart])




  const handleAddProduct = (produto) => {
    console.log(produto)
    if(!productsCart.includes(produto)){
      setProductsCart([...productsCart, produto])
    }

    
    
  }

  // console.log(productsCart)

  return (
    <View style={styles.container}>
       <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity style={styles.cartButton} onPress={handleCartClick}>
          {productsCart.length > 0 ? (<View style={styles.dot}>
            <Text style={styles.dotText}>{numberProductsCart}</Text>
          </View>) : null}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>

      </View>
      <FlatList
        data={produtosComQuantidades} // Array de dados a serem exibidos
        style={styles.FlatList}
        renderItem={produto => {
          return (
          <View style={styles.containerProduto}>
            <View style={styles.subContainerNomeValor}>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{produto.item.name}</Text>
              <Text style={{fontSize: 15}}>R$ {produto.item.price}</Text>
            </View>
            <View>
              <Text onPress={() => handleAddProduct(produto.item)} style={{fontSize: 24, backgroundColor: "aqua", paddingTop: 5, paddingBottom: 5, paddingRight: 15, paddingLeft: 15,}}>+</Text>
            
            </View>
          </View>
          )
        }} // Função para renderizar cada item
        keyExtractor={(item) => item.id} // Função para extrair uma chave única para cada item
      />

    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: "white",
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    
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
  FlatList:{
    flex: 1,
    width: 450,
    // backgroundColor: "aqua",
    marginTop: 30

  },
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

export default Home;
