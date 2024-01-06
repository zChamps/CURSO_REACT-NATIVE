import React, {useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
export default function App() {



  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Retorna as coordenadas atuais do dispositivo
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      const location = await Location.getLastKnownPositionAsync({});
      // console.log(location)
      setLocation(location);
    })();
  }, []);
  
  location && console.log(location.coords.latitude)









  return (
    <View style={styles.container}>

      {/* Cria uma VIew do Mapa */}
      <MapView initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }} style={styles.map}>

          {/* Adiciona um marcador ao mapa */}
          <Marker description='Descrição qualquer' title="Casa" coordinate={{ latitude: latitude, longitude: longitude }}/>
         
      </MapView>
      {/* <View style={styles.view}></View>; */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});