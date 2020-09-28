// components/dashboard.js

import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../database/firebase";

export default class MessageScreen extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Root");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} />
      </View>
    );
  }
}

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
