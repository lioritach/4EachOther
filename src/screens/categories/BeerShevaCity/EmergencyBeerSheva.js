import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { Card } from "react-native-material-cards";

export default EmergencyBeerSheva = () => {
  const [Hosen_title, setTitle] = useState();
  const [Hosen_subTitle, setSubTitle] = useState();
  const [Hosen_description, setDescription] = useState();

  const [manhigut_title, setTitle_manhigut] = useState();
  const [manhigut_subTitle, setSubTitle_manhigut] = useState();
  const [manhigut_description, setDescription_manhigut] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    // const sub = firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(uid)
    //   .onSnapshot((doc) => {
    //     setTitle(doc.data().username);
    //   });
    const hosen = firebase
      .database()
      .ref("data/hosen/")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle(title);
        setSubTitle(subTitle);
        setDescription(description);
      });

    const manhigut = firebase
      .database()
      .ref("data/manhigut/")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle_manhigut(title);
        setSubTitle_manhigut(subTitle);
        setDescription_manhigut(description);
      });
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Image
            source={require("../../../../assets/hosen.jpg")}
            title={Hosen_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{Hosen_title}</Text>
          <Text style={styles.subTitleStyle}>{Hosen_subTitle}</Text>
          <Text style={styles.descStyle}>{Hosen_description}</Text>
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("pressed")}>
              <Text
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  paddingBottom: 14,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#33a8ff",
                }}
              >
                לחץ כאן כדי להתנדב ב<Text>{Hosen_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/ofakim.jpg")}
            title={manhigut_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{manhigut_title}</Text>
          <Text style={styles.subTitleStyle}>{manhigut_subTitle}</Text>
          <Text style={styles.descStyle}>{manhigut_description}</Text>
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("pressed")}>
              <Text
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  paddingBottom: 14,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#33a8ff",
                }}
              >
                לחץ כאן כדי להתנדב ב<Text>{manhigut_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
  },
  textTitle: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  subTitleStyle: {
    fontSize: 14,
    color: "rgba(0 ,0 ,0 , 0.38)",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  descStyle: {
    alignItems: "flex-start",
    paddingTop: 16,
    paddingLeft: 5,
    paddingBottom: 16,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  sep: {
    borderTopColor: "#E9E9E9",
    borderTopWidth: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    paddingTop: 19,
  },
});
