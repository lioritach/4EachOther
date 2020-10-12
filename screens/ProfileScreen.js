import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";
import * as firebase from "firebase";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);
  // const firebase = useContext(FirebaseContext);

  const signOut1 = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      });
  };

  return (
    <View style={styles.container}>
      <Button title="log out" onPress={signOut1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
