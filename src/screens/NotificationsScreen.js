import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import * as firebase from "firebase";
import CardMessage from "../components/CardMessage";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const NotificationsScreen = ({ title, status }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

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
        <View>
          <Text style={{ textAlign: "center" }}>
            {" "}
            באיזור זה תוכלו לצפות בסטטוס הרישום להתנדבויות
          </Text>
        </View>
        {data.map(({ id, dataVal }) => (
          <TouchableOpacity key={id}>
            <CardMessage title={dataVal.title} status={dataVal.status} />
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
