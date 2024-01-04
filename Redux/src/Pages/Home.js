import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {



  return (
    <View style={styles.container}>


      <View style={styles.containerTask}>
        <Text>Homee</Text>
      </View>


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
  containerTask: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
  },

  FlatList: {
    backgroundColor: "white",
    // marginBottom: 30,
    padding: 20,
    fontSize: 16,
    width: 380,
  }
})

export default Home;
