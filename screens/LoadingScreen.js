import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

const auth12 = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
};

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Loading ... </Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
