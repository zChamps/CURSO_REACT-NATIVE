
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';

import { useState, useEffect } from 'react';







export default function App() {

  //Valores iniciais das animações
  const [largura] = useState(new Animated.Value(0))
  const [altura] = useState(new Animated.Value(75))
  // const [opacidade] = useState(new Animated.Value(0))






  /////////////////// Animar um item por vez
  // Animated.timing(altura, {
  //   toValue: 300,
  //   duration: 2000
  // }
  // ).start()

  /////Cria uma sequencia de animações
  // Animated.sequence([

  //   Animated.timing(opacidade, {
  //     toValue: 1,
  //     duration: 2000
  //   }
  //   ), 
  //   /////// Aninha um paralelo de animações dentro de uma sequencia de animações
  //   Animated.parallel([
  //     Animated.timing(altura, {
  //       toValue: 300,
  //       duration: 2000
  //     }
  //     ),
  //     Animated.timing(largura, {
  //       toValue: 350,
  //       duration: 2000
  //     }
  //     )
  //   ])
    
  
  //   //////// inicia a animação
  // ]).start()






   


  Animated.timing(largura, {
    toValue: 100,
    duration: 2000
  }
  ).start()


  // Cria a animação em porcentagem, faz aquela "barra de carregamento", de zero até 100%
  const larguraAnimada = largura.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"]
  })

    return (
      <View style={styles.container}>
          {/* Informa que o estilo é referente ao estilo da animação */}
          <Animated.View style={{width: larguraAnimada, height: altura , backgroundColor: "red"}}></Animated.View>

      </View>
    );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 50

  },


});



