import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import CardVol from "../../../components/CardVol";

const Covid19Ofakim = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection("ofakim_covid19")
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

  return (
    <View>
      <Image
        source={require("../../../../assets/covid19Cover.png")}
        resizeMode="cover"
        style={{ height: "45%", width: "100%" }}
      />
      <ScrollView>
        {data.map(({ id, dataVal }) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              navigation.navigate("viewContents", {
                title: dataVal.title,
                subtitle: dataVal.subtitle,
                description: dataVal.description,
                image: dataVal.image,
              });
            }}
          >
            <CardVol
              title={dataVal.title}
              description={dataVal.description}
              image={dataVal.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
export default Covid19Ofakim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
    marginTop: 10,
  },
  cardDes: {
    margin: 10,
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
  textPressHereToVol: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 14,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#33a8ff",
  },
  textAfterPressHereToVol: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 14,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "green",
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
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    paddingTop: 19,
    backgroundColor: "#33a8ff",
  },
  sepAfterClicked: {
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    paddingTop: 19,
    backgroundColor: "green",
  },
});