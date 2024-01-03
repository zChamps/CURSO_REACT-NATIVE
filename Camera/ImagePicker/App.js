import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';

export default function App() {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({

      // Isso está dizendo que podem ser selecionados todos os tipos de midia, fotos ou videos
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // Aceita edição
      allowsEditing: true,
      // Formatação da imagem
      aspect: [4, 3],
      // Qualidade, entre 0 e 1
      quality: 1,
      // Limite de quantos itens poderão ser selecionados
      selectionLimit: 2
    });

    console.log(result); //Exemplo de retorno:      {"assets": [{"assetId": null, "base64": null, "duration": null, "exif": null, "height": 720, "rotation": null, "type": "image", "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FNotification-2e89a52a-186b-4696-9bbd-2a36b1b286c4/ImagePicker/77e53053-d5c2-4890-9600-fa3a13218208.jpeg", "width": 960}], "canceled": false, "cancelled": false}

    if (!result.canceled) {
      // setImage(result.assets[0].uri);        --  passaria diretamente o link pro useState
      setImage(result);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.buttons}>
         <TouchableOpacity style={styles.button} onPress={pickImage}>
           <Text style={styles.text}>Abrir album</Text>
         </TouchableOpacity>
       </View>


        <View>
          {image ? <Image source={{uri: image.assets[0].uri}} style={{ width: 200, height: 200 }}></Image> : ""}
        </View>
    </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems: 'center',
   },
   buttons:{
     marginTop: 44,
     flexDirection: 'row',
     gap: 14,
     marginBottom: 24,
   },
   button:{
     backgroundColor: "#121212",
     padding: 4,
     paddingLeft: 16,
     paddingRight: 16,
     borderRadius: 4,
   },
   text:{
     color: "#FFF"
   },
   image:{
     width: '90%',
     height: 300,
     objectFit: "cover"
   }
 })