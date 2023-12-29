import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Context/UserContext"

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    // Verifica se o usuário não está logado e redireciona para a página de login
    if (user === "") {
      navigation.navigate("Login");
    }
  }, [user, navigation]);

  async function logout() {
    const auth = getAuth();

    try {
      await signOut(auth);
      setUser("")
      // Redefine o estado do usuário para uma string vazia
      // navigation.navigate("Login", { user: "" });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View>
      <Text>Home</Text>

      {user.length > 0 ? (
        <>
          <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center' }}>
            Você está logado como: {user}
          </Text>
          <Button
            title="Deslogar"
            onPress={logout}
          />
        </>
      ) : (
        <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center' }}>
          Nenhum usuário está logado
        </Text>
      )}
    </View>
  );
};

export default Home;
