import {useState} from "react"
import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native"




export default function App(){

  const handleClick = () => {
    nome === "Deschamps" ? setNome("Willian") : setNome("Deschamps")
  
  }
  const [nome, setNome] = useState("Willian")

  return(
    <View style={{backgroundColor: "aqua", marginTop: 45, marginLeft: 10, display: "flex"}}>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        {/* Estilos em linha */}
        <Text style={{ color: "aqua" }}>Hello World!</Text>
        <Text>Hello World!</Text>
        {/* chamar o styleSheet */}
        <Text style={styles.backgroundred}>Hello World!</Text>

        
          {/* importar componente com props */}
        <Hacker altura={150} largura={150}/>

        
        <Button onPress={handleClick} title="Clique para mudar o nome"></Button>

        <Text style={styles.mainName}>{nome}</Text>
        {/* Captar o que o usuario digita, no React Native é utilizado somente o "e" */}
        <TextInput style={styles.input} onChangeText={(e) => {
          console.log(e)
          setNome(e)
        }} placeholder="Digite algo"/>
    </View>
  )
  
}

// Criar componentes
const Hacker = ({altura, largura}) => {
  

  // necessario usar o return
  return  (
  <View>
  <Image source={require("./assets/ab79c6daba6a490dab91cf6be51439c2.jpg")} style={{ width: largura, height: altura }}></Image>


  
  </View>
  
  )
}


// criar os estilos fora da linha
const styles = StyleSheet.create(
  {
    backgroundred:{
    backgroundColor:"red",
  },
  mainName:{
    textAlign: "center",
    fontSize: 40,
    backgroundColor: "red",
    marginTop: 10
  },
  input:{
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    height: 85
  }
}
)

