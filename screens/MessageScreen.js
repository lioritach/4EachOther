import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { FirebaseContext } from "../context/FirebaseContext";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "../config/Firebase";

const MessageScreen = () => {
  const firebase1 = useContext(FirebaseContext);

  const a = firebase1.getCurrentUser();
  const db = firebase.firestore();
  const s = firebase
    .firestore()
    .collection("users")
    .doc("WVEyllRIVpOSHWavsw3z3tIXwvF2")
    .get();

  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <Button
        title="check"
        onPress={() => {
          console.log(s.id);
        }}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
