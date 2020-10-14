import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import * as firebase from "firebase";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CardMessages from "../components/CardMessages";

const NotificationsScreen = ({ title, status }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    let isMounted = false;

    const ref = firebase
      .firestore()
      .collection("requests")
      .where("uid", "==", uid)
      .onSnapshot(
        (snapshot) => {
          setData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              dataVal: doc.data(),
            }))
          );
        },
        (err) => {
          setErr(err);
        }
      );
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
          }}
          source={require("../../assets/notifications.png")}
        />
        {data.map(({ id, dataVal }) => (
          <TouchableOpacity key={id}>
            <CardMessages title={dataVal.title} status={dataVal.status} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
