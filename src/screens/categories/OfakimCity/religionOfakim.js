import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { Card } from "react-native-material-cards";

export default religionOfakim = () => {
  const [ahuzatNegev_title, setTitle_ahuzatNegev] = useState();
  const [ahuzatNegev_subTitle, setSubTitle_ahuzatNegev] = useState();
  const [ahuzatNegev_description, setDescription_ahuzatNegev] = useState();

  const [idf_title, setTitle_idf] = useState();
  const [idf_subTitle, setSubTitle_idf] = useState();
  const [idf_description, setDescription_idf] = useState();

  const [mada_title, setTitle_mada] = useState();
  const [mada_subTitle, setSubTitle_mada] = useState();
  const [mada_description, setDescription_mada] = useState();

  const [ogen_title, setTitle_ogen] = useState();
  const [ogen_subTitle, setSubTitle_ogen] = useState();
  const [ogen_description, setDescription_ogen] = useState();

  const [kavRachel_title, setTitle_kavRachel] = useState();
  const [kavRachel_subTitle, setSubTitle_kavRachel] = useState();
  const [kavRachel_description, setDescription_kavRachel] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    // const sub = firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(uid)
    //   .onSnapshot((doc) => {
    //     setTitle(doc.data().username);
    //   });
    const ahuzatNegev = firebase
      .database()
      .ref("routineOfakim/ahuzatNegev")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle_ahuzatNegev(title);
        setSubTitle_ahuzatNegev(subTitle);
        setDescription_ahuzatNegev(description);
      });

    const idf = firebase
      .database()
      .ref("emergencyOfakim/idf")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle_idf(title);
        setSubTitle_idf(subTitle);
        setDescription_idf(description);
      });

    const mada = firebase
      .database()
      .ref("emergencyOfakim/mada")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle_mada(title);
        setSubTitle_mada(subTitle);
        setDescription_mada(description);
      });

    const ogen = firebase
      .database()
      .ref("emergencyOfakim/ogen")
      .on("value", (snapshot) => {
        const title = snapshot.val().title;
        const subTitle = snapshot.val().subTitle;
        const description = snapshot.val().description;
        setTitle_ogen(title);
        setSubTitle_ogen(subTitle);
        setDescription_ogen(description);
      });
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Image
            source={require("../../../../assets/ahuzatNegev.jpeg")}
            title={ahuzatNegev_title}
            style={{ height: 200, width: 310, marginLeft: 30 }}
          />
          <Text style={styles.textTitle}>{ahuzatNegev_title}</Text>
          <Text style={styles.subTitleStyle}>{ahuzatNegev_subTitle}</Text>
          <Text style={styles.descStyle}>{ahuzatNegev_description}</Text>
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
                לחצו כאן כדי להתנדב ב<Text>{ahuzatNegev_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/idf.jpg")}
            title={idf_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{idf_title}</Text>
          <Text style={styles.subTitleStyle}>{idf_subTitle}</Text>
          <Text style={styles.descStyle}>{idf_description}</Text>
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
                לחצו כאן כדי להתנדב ב<Text>{idf_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/mda.png")}
            title={mada_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{mada_title}</Text>
          <Text style={styles.subTitleStyle}>{mada_subTitle}</Text>
          <Text style={styles.descStyle}>{mada_description}</Text>
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
                לחצו כאן כדי להתנדב ב<Text>{mada_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/ofakim.jpg")}
            title={ogen_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{ogen_title}</Text>
          <Text style={styles.subTitleStyle}>{ogen_subTitle}</Text>
          <Text style={styles.descStyle}>{ogen_description}</Text>
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
                לחצו כאן כדי להתנדב ב<Text>{ogen_title}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/kavRachel.png")}
            title={kavRachel_title}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />
          <Text style={styles.textTitle}>{kavRachel_title}</Text>
          <Text style={styles.subTitleStyle}>{kavRachel_subTitle}</Text>
          <Text style={styles.descStyle}>{kavRachel_description}</Text>
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
                לחצו כאן כדי להתנדב ב<Text>{kavRachel_title}</Text>
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
    textAlign: "center",
  },
  subTitleStyle: {
    fontSize: 15,
    color: "rgba(0 ,0 ,0 , 0.38)",
    paddingLeft: 15,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  descStyle: {
    alignItems: "flex-start",
    paddingTop: 16,
    paddingLeft: 5,
    paddingBottom: 16,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
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
