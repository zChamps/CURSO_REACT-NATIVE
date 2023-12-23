import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [valorCronometro, setValorCronometro] = useState(0);
  const [ultimoTempo, setUltimoTempo] = useState(0);
  const [intervalAtivo, setIntervalAtivo] = useState(false);
  const intervalRef = useRef(null);

  const handleIniciar = () => {
    if (!intervalAtivo) {
      intervalRef.current = setInterval(() => {
        setValorCronometro((prevValor) => prevValor + 0.1);
      }, 100);
      setIntervalAtivo(true);
    } else {
      clearInterval(intervalRef.current);
      setIntervalAtivo(false);
    }
  };

  const handleParar = () => {
    if (intervalAtivo) {
      clearInterval(intervalRef.current);
      setUltimoTempo(valorCronometro);
      setIntervalAtivo(false);
    } else {
      setUltimoTempo(0);
    }
    setValorCronometro(0);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./src/cronometro.png')} />
      <Text style={styles.cronometro}>{valorCronometro.toFixed(1)}</Text>
      <View style={styles.subcontainerBotoes}>
        <TouchableOpacity style={styles.botao} onPress={handleIniciar} title={'Iniciar/Pausar'}>
          <Text>Iniciar/Pausar</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleParar} title='Zerar'>
          <Text>Zerar</Text>
          </TouchableOpacity>
      </View>
      {ultimoTempo > 0 ? <Text style={styles.ultimoTempo}>Último tempo: {ultimoTempo.toFixed(1)}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cronometro: {
    fontSize: 42,
    transform: [{ translateX: 0 }, { translateY: -140 }],
  },

  ultimoTempo:{
    fontSize: 24,
    marginTop: 50
  },
  subcontainerBotoes:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    // backgroundColor: "red"
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

});
