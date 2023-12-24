import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button } from 'react-native';
import Pessoa from "./src/Components/Pessoa/Pessoa"
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';











import { useState } from 'react';

export default function App() {


  const [slider, setSlider] = useState(0)
  const [switchValue, setSwitchValue] = useState(false)
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [genero, setGenero] = useState(1)
  const [estudante, setEstudante] = useState(false)

  console.log(nome)
  console.log(idade)
  console.log(genero)
  console.log(slider)

  const [renderizarItens, setRenderizarItens] = useState(false)

  const handleClick = () => {
    if (nome && idade && genero && slider) {
      setRenderizarItens(true);
    }

  }

  return (


    // Picker dinâmico 
    <View style={styles.container}>

      <Text style={{ fontSize: 32, marginTop: 50 }}>Banco em React-Native</Text>
      <View style={styles.containerDados}>
        <Text>Insira seu nome: </Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setNome(value)}
          value={nome}
          placeholder="Insira seu nome aqui"
        />

        <Text>Insira idade: </Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setIdade(value)}
          value={idade}
          placeholder="Insira sua idade aqui"
        />

        <Text>Qual é seu gênero?</Text>
        <Picker selectedValue={genero} onValueChange={(itemValue, itemIndex) => setGenero(itemValue)} style={{ height: 50, width: 180 }}>

          <Picker.Item style={styles.genero} key={1} value={1} label='Masculino' />
          <Picker.Item style={styles.genero} key={2} value={2} label='Feminino' />

        </Picker>


        <Slider style={{ width: 180, height: 50 }} minimumValue={0} maximumValue={1000000} onValueChange={value => setSlider(value)} />
        <Text>Seu limite é de: {slider}</Text>

        <Text>É estudante?</Text>
        <Switch value={estudante} onValueChange={value => setEstudante(value)} thumbColor="red" />
        {estudante && estudante ? <Text>Você é estudante.</Text> : <Text>Você não é estudante.</Text>}
        <Button onPress={handleClick} title="Criar conta!" style={{marginTop: 100}}></Button>
      {renderizarItens && (
        <Text style={{marginTop: 10, backgroundColor: "aqua", width: 420, textAlign: "center", color: "white", fontWeight:"bold"}}>
          O nome do titular é: {nome}{'\n'}
          A idade é: {idade}{'\n'}
          O limite disponível é: {slider}{'\n'}
        </Text>
      )}
      </View>


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

  containerDados: {
    flex: 1,
    alignItems: "center"
  },

  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '70%',
  },

  genero: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center'
  }
});



