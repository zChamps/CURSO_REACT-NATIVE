import React from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';


const Home = ({ navigation }) => {

    const handleNavigate = () => {
        navigation.navigate("About")
    }

  return (
    <View>
        <Text>Home</Text>
        <Button title="Ir para About" onPress={handleNavigate} />
    </View>
  )
}

export default Home