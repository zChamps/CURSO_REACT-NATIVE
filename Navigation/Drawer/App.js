import 'react-native-gesture-handler';
import { ScrollView, StyleSheet, Text, View, FlatList, Switch, TextInput, Button, TouchableOpacity, Modal, Image, ActivityIndicator, Animated } from 'react-native';

import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/Routes';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Routes/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 

});



