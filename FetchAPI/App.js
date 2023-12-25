
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator } from 'react-native';

import { useState, useEffect } from 'react';








export default function App() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://sujeitoprogramador.com/r-api/?api=filmes"

  useEffect(() => {
     async function requisicao(){
      const res = await fetch(url)
      const data = await res.json()

      setFilmes(data)
      setLoading(false)
     }

     requisicao()
  }, [])

  

    return (
      <View style={styles.container}>
        {loading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator color="#09A6FF" size={40} />
          </View>
        ) : (
          <ScrollView>
            {filmes.map(filme => (
              <View key={filme.id} style={styles.container}>
                <Text >{filme.nome}</Text>
                <Image source={{ uri: filme.foto }}style={{ width: 200, height: 200 }}/>
              </View>
            ))}
          </ScrollView>
        )}
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



