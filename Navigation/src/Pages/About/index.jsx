import React from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';

const About = ({ navigation }) => {

    const handleNavigate = () => {
        navigation.navigate("Home")
    }

  return (
    <View>
        <Text>About</Text>
        <Button title='Ir para Home' onPress={handleNavigate}/>
    </View>
  )
}

export default About