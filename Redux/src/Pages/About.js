import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


import { useNavigation } from '@react-navigation/native';


const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    padding: 35,
    // marginTop: 40,
    backgroundColor: "white",
    paddingTop: 40,

  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 45,
    fontSize: 17,
    marginTop: 5
  },

  LoginCadastro: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 18
  }
});



export default About