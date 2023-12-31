import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Context/UserContext"
import { getDatabase, ref, onValue, set, remove, child, push, update } from "firebase/database"
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const db = getDatabase()
  const uid = route.params?.uid
  const [data, setData] = useState([])
  const [newTask, setNewTask] = useState("")

  const [editTask, setEditTask] = useState("")

  const inputRef = useRef(null);

  console.log(uid)
  useEffect(() => {
    const db = getDatabase();
    setData([]);

    async function Dados() {
      const DadosUsers = ref(db, `users/${uid}`);

      await onValue(DadosUsers, (snapshot) => {
        const userData = snapshot.val();

        if (userData) {
          // Converte os dados do objeto para um array de objetos
          const dataArray = Object.keys(userData).map((key) => ({
            key,
            value: userData[key].newPostKey || userData[key], // Se houver uma propriedade 'newPostKey', use-a
          }));
          setData(dataArray);
        }
      });
    }

    Dados();
  }, []);

  // console.log("data ",data)




  const handleEdit = (ItemAEditar) => {
    setEditTask(ItemAEditar.key)
    setNewTask(ItemAEditar.value)
    inputRef.current.focus();

  }
  // console.log(newTask)



  const handleDelete = itemDelete => {
    remove(ref(db, `users/${uid}/${itemDelete}`))

    setData([])
    const newData = data.filter((item) => item.key !== itemDelete);

  // Atualize o estado com o novo array
  setData([...newData]);
  }




  const handleCreate = () => {
    const newPostKey = push(child(ref(db), 'users')).key;
    if(editTask !== ""){


        const updates = {};
        updates[`users/${uid}/${editTask}/newPostKey`] = newTask;
        console.log(updates)
        setEditTask("")
        return update(ref(db), updates)




    }
  
    if (newTask !== "") {
      console.log(newTask);
      set(ref(db, `users/${uid}/${newPostKey}`), {
          newPostKey: newTask
      });
      setData([...data, { key: newPostKey, value: newTask }]);
    }
    setNewTask("")
  };


  return (
    <View style={styles.container}>


      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          ref={inputRef}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleCreate}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>




      <View style={{ paddingRight: 10, flex: 1, alignItems: "center", width: "100%", backgroundColor: "white", justifyContent: "center", marginTop: 40 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={{ marginRight: 10, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start",  width: 435, marginBottom: 20, borderWidth: 2, borderColor: 'black', paddingLeft: 20 }}>
              <TouchableOpacity style={{ marginRight: 1, display: "flex", alignItems: "center", justifyContent: "center" }} onPress={() => handleDelete(item.key)} >
                <Feather name="trash" color="black" size={24} />
              </TouchableOpacity>
              {typeof item.value === 'string' ? (
                <Text onPress={() => handleEdit(item)} style={styles.FlatList}>{item.value}</Text>
              ) : null}
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
    padding: 20,
    fontSize: 16,
    width: 380,
  }
})

export default Home;
