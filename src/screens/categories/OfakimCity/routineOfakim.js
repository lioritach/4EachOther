import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { Card } from "react-native-material-cards";
import { Button } from "react-native-paper";

export default routineOfakim = () => {
  const [data, setData] = useState([]);
  const uid = firebase.auth().currentUser.uid; //todo remove this

  useEffect(() => {
    // const uid = firebase.auth().currentUser.uid; //todo remove this

    const getData = firebase
      .firestore()
      .collection("ofakim")
      .onSnapshot((docs) => {
        let data = [];
        docs.forEach((doc1) => {
          data.push(doc1.data());
        });
        setData(data);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Image
            source={require("../../../../assets/ahuzatNegev.jpeg")}
            style={{ height: 200, width: 310, marginLeft: 30 }}
          />
          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.ahuzatNegev_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.ahuzatNegev_subTitle}
              </Text>
            ))}
          </Text>

          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.ahuzatNegev_description}
              </Text>
            ))}
          </Text>

          <View style={styles.sep}>
            <TouchableOpacity
              onPress={() => {
                firebase
                  .firestore()
                  .collection("requests")
                  .doc(uid)
                  .set(
                    {
                      title: [{ title: "2אחוזת נגב" }],
                      email: firebase.auth().currentUser.email,
                      uid: uid,
                      confirm: "לא מאושר",
                    },
                    { merge: true }
                  )
                  .then(() =>
                    Alert.alert(
                      `תודה רבה ` +
                        firebase.auth().currentUser.email +
                        `\n במידה ותאושר תקבל הודעה`
                    )
                  );
              }}
            >
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.ahuzatNegev_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/ahuzatNegev.jpeg")}
            style={{ height: 200, width: 310, marginLeft: 30 }}
          />
          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.ahuzatNegev_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.ahuzatNegev_subTitle}
              </Text>
            ))}
          </Text>

          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.ahuzatNegev_description}
              </Text>
            ))}
          </Text>

          <View style={styles.sep}>
            <TouchableOpacity
              onPress={() => {
                firebase
                  .firestore()
                  .collection("requests")
                  .doc(uid)
                  .set(
                    {
                      title: { title: "2אחוזת נגב" },
                      email: firebase.auth().currentUser.email,
                      uid: uid,
                      confirm: "לא מאושר",
                    },
                    { merge: false }
                  )
                  .then(() =>
                    Alert.alert(
                      `תודה רבה ` +
                        firebase.auth().currentUser.email +
                        `\n במידה ותאושר תקבל הודעה`
                    )
                  );
              }}
            >
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.ahuzatNegev_title}
                    </Text>
                  ))}
                </Text>
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
  textPressHereToVol: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 14,
    fontSize: 20,
    fontWeight: "bold",
    color: "#33a8ff",
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
