import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Pessoa from "./src/Components/Pessoa/Pessoa"
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';











import { useState } from 'react';

export default function App() {
  const dados = [
    { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
    { id: '2', nome: 'Thiago', idade: 33, email: 'thiago@thiago.com' },
    { id: '3', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com' },
    { id: '4', nome: 'Henrique', idade: 50, email: 'Henrique@Henrique.com' },
    { id: '5', nome: 'Thiago', idade: 33, email: 'thiago@thiago.com' },
    { id: '6', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com' },
    { id: '7', nome: 'JOSE', idade: 33, email: 'thiago@thiago.com' },
    { id: '8', nome: 'HENRIQUE', idade: 20, email: 'lucas@lucas.com' },
  ]

  const [slider, setSlider] = useState(0)
  const [switchValue, setSwitchValue] = useState(false)

  const [pizza, setPizza] = useState()

  const pizzas = [
    { key: 1, nome: 'Strogonoff', valor: 35.90 },
    { key: 2, nome: 'Calabresa', valor: 59 },
    { key: 3, nome: 'Quatro queijos', valor: 37 },
    { key: 4, nome: 'Brigadeiro', valor: 25.70 },
    { key: 5, nome: 'Portuguesa', valor: 70 },
  ]

  // renderização de cada pizza
  let pizzasItem = pizzas.map((v, k) => {
    return <Picker.Item style={styles.pizza} key={k} value={k} label={v.nome} />
  })

  return (


    // Picker dinâmico 
    <View style={{ flex: 1 }}>
      <View style={styles.containerPicker}>
        {pizza && <Text>Pizza, você escolheu: {pizzas[pizza].nome}, no valor de: {pizzas[pizza].valor}</Text>}
        <Picker selectedValue={pizza} onValueChange={(itemValue, itemIndex) => setPizza(itemValue)} style={{ height: 50, width: 400 }}>
          {pizzasItem}

        </Picker>
      </View>



        {/* SLIDER */}
      <View style={{ flex: 1, backgroundColor: "aqua", alignItems: "center", justifyContent: "center" }}>
        <Slider
          style={{ width: 300, height: 60 }}
          minimumValue={0}
          maximumValue={100}
          onValueChange={value => setSlider(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="red"
        />
        <Text>O valor do slider é: {slider.toFixed(1)}</Text>
        </View>







        {/* Switch */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Switch
        value={switchValue}
          onValueChange={value => setSwitchValue(value)}
          thumbColor="red"
        />
        <Text>O valor do slider é: {switchValue ? <Text>True</Text> : <Text>False</Text>}</Text>

      </View>





      {/* Aplica rolagem na tela */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
        <View style={styles.view4}></View>
      </ScrollView>





      {/* FlatList, usado para renderizar itens de uma lista de forma "economica", renderiza somente os itens que estão sendo mostrados na tela */}
      <FlatList style={{ flex: 1 }}
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view1: {
    height: 100,
    backgroundColor: "red"
  },
  view2: {
    height: 100,
    backgroundColor: "blue"
  },
  view3: {
    height: 100,
    backgroundColor: "yellow"
  },
  view4: {
    height: 100,
    backgroundColor: "green"
  },
  containerPicker: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
    justifyContent: "center"

  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizza: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});



