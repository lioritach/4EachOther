import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "../database/firebase";
export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.navigation.navigate(user ? "MainTabScreens" : "RootStackScreen");
    });
  }

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
