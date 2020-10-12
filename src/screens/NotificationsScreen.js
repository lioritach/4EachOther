import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import * as firebase from "firebase";

export default class NotificationsScreen extends Component {
  state = {
    user: {
      name: "",
    },
  };

  componentDidMount() {
    this.uid = firebase.auth().currentUser.uid;
    // this.sub = firebase
    //   .firestore()
    //   .collection("users")
    //   .onSnapshot((doc) => {
    //     this.setState({
    //       user: {
    //         name: doc.data().confirm,
    //       },
    //     });
    //   });
    this.sub = firebase
      .firestore()
      .collection("requests")
      .doc(this.uid)
      .onSnapshot((doc) => {
        this.setState({
          user: {
            name: doc.data().confirm,
          },
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Image
            source={require("../.././assets/covid.png")}
            style={styles.sliderImage}
          />
        </View>
        <Text style={{ height: "30%" }}>Name: {this.state.user.name}</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "70%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 8,
    marginLeft: -210,
    marginTop: -70,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
    fontSize: 12,
    fontWeight: "bold",
  },
});
