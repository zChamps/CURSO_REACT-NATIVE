import {Text, View, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

const ModalGasPrice = ({modalVisible, valorAlcool, valorGasolina, usarAlcool, Sair}) => {
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View style={styles.container}>
                <Image source={require("../../img/gas.png")} />


                <View style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {usarAlcool ? <Text style={{ fontSize: 36, color: "green", textAlign: "center" }}>Compensa usar Álcool</Text> : <Text style={{ fontSize: 36, color: "red", textAlign: "center" }}>Não compensa usar Álcool</Text>}
                    <Text style={styles.textoTituloModal}>Com os Preços:</Text>
                    <Text style={styles.textoModal}>Álcool: R${valorAlcool}</Text>
                    <Text style={styles.textoModal}>Gasolina: R${valorGasolina}</Text>
                </View>
                <TouchableOpacity onPress={Sair}>
                    <Text style={styles.botao}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
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

export default  ModalGasPrice