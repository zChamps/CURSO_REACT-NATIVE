
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal } from 'react-native';

import { useState, useEffect } from 'react';









export default function App() {
  
  const [visible, setVisible] = useState(false)
  
  const Entrar = () => {
    setVisible(true)
  }
  const Sair = () => {
    setVisible(false)
  }
  
  return (


    <View style={styles.container }>
      <Button title='Entrar' onPress={Entrar}></Button>
        <Modal animationType='slide' visible={visible} style={{backgroundColor: "aqua", flex: 1, height:"100vh"}} >
            <Text>DESCHAMPS</Text>
            <Button title='Sair' onPress={Sair}></Button>
        </Modal>
      

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
  

});



