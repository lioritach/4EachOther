import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import * as firebase from "firebase";
import CardMessage from "../components/CardMessage";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const MyItems = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

    const ref = firebase
      .firestore()
      .collection("ofakim_shoesItems")
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

    return () => ref();
  }, []);

  const Options = (title, uid) => {
    Alert.alert("עריכת פריט", "בחר את האופציה הרלוונטית", [
      {
        text: "עריכת פריט",
        onPress: () => {
          navigation.navigate("editItems", {
            title: title,
          });
        },
      },
      {
        text: "מחיקת פריט",
        onPress: () => {
          deleteFields(title, uid);
        },
      },
      {
        text: "חזור",
        onPress: () => {},
      },
    ]);
  };

  const deleteFields = async (title, uid) => {
    await firebase
      .firestore()
      .collection("ofakim_shoesItems")
      .where("uid", "==", uid)
      .where("title", "==", title)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
          alert("הפריט נמחק בהצלחה!");
        });
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "60%",
          height: "30%",
          marginLeft: 80,
        }}
        source={require("../../assets/notifications.png")}
      />
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          באיזור זה תוכלו לצפות בפריטים למסירה שהעלתם
        </Text>
      </View>
      <ScrollView>
        {data.map(({ id, dataVal }) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              Options(dataVal.title, dataVal.uid);
            }}
          >
            <CardMessage title={dataVal.title} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
