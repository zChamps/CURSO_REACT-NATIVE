import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/Pages/About';
import Home from './src/Pages/Home';
const Stack = createNativeStackNavigator();


// import store from './src/Redux/store';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';



import {configureStore } from "@reduxjs/toolkit"
import counterSlice from './src/Redux/Counter/CounterSlice'



// Aqui é onde ficará armazenado os estados pelo redux
// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// })















export default function App() {
  return (
    // deixei sem 
    <Provider store={{}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
