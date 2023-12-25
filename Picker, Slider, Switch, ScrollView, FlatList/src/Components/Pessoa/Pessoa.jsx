import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

const Pessoa = ({data}) => {
    return (
      <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{data.nome}</Text>
      <Text style={styles.textoPessoa}>{data.idade}</Text>
      <Text style={styles.textoPessoa}>{data.email}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    areaPessoa:{
      backgroundColor: '#222',
      height: 200,
      marginBottom: 15
    },
    textoPessoa:{
      color: '#FFF',
      fontSize: 20,
    }
  });

  export default Pessoa