import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Context/UserContext"
import { getDatabase, ref, onValue, set, remove, child, push, update } from "firebase/database"
import { Feather } from '@expo/vector-icons'; 

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const db = getDatabase()
  const uid = route.params?.uid
  const [data, setData] = useState([])
  const [newTask, setNewTask] = useState("")




  useEffect(() => {
    const db = getDatabase()
    setData([])
    async function Dados() {
      const DadosUsers = ref(db, `users/${uid}`)

      await onValue(DadosUsers, snapshot => {
        const userData = snapshot.val();
        if (userData) {
          // Converte os dados do objeto para um array
          const dataArray = Object.values(userData);
          setData(dataArray);
        }

      })
    }
    Dados()

  }, [])
  // console.log("data ",data)









  const handleDelete = item => {
    remove(ref(db, 'users/4'))
  }




  const handleCreate = () => {
    const newPostKey = push(child(ref(db), 'users')).key;

    if(newTask !== ""){
      console.log(newTask)
      set(ref(db, `users/${uid}/${newPostKey}`), {
        // newPostKey: newTask,
  
      });
    }
    setData(oldTasks => [...oldTasks, newTask])
  }


  return (
    <View style={styles.container}>


      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}

        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleCreate}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>




      <View style={{ paddingRight: 10, flex: 1, alignItems: "center", width: "100%", backgroundColor: "red", justifyContent: "center", marginTop: 40 }}>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <View style={{ marginRight: 10, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: "aqua", width: 435, marginBottom: 20 }}>
              <TouchableOpacity style={{ marginRight: 1, display: "flex", alignItems: "center", justifyContent:"center"}} onPress={() => deleteItem(item.key)} >
                {/* {console.log(item.key)} */}
                <Feather name="trash" color="black" size={24} />
              </TouchableOpacity>
              <Text style={styles.FlatList}>{item}</Text>
            </View>
          )}
        />

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
    padding: 24,
    fontSize: 16
  }
})

export default Home;
