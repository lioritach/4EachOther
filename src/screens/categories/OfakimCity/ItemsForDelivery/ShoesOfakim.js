import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import CardVol from "../../../../components/CardVol";
import AntDesign, { Ionicons } from "@expo/vector-icons/AntDesign";
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "הוסף פריט חדש",
    icon: require("../../../../../assets/sos.png"),
    name: "bt_accessibility",
    position: 2,
  },
];

const ShoesOfakim = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection("ofakim_shoesItems")
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
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("formUploadItems", {
            title: "ofakim_shoesItems",
          });
        }}
        style={{
          left: 180,
          flexDirection: "row",
          backgroundColor: "#CD75AF",
        }}
      >
        <Text style={{ left: 10, top: 10, fontSize: 20, fontWeight: "bold" }}>
          הוסף פריט חדש
        </Text>
        <AntDesign name="pluscircleo" size={40} style={{ left: 25 }} />
      </TouchableOpacity>

      <View style={{ marginTop: 50 }}>
        {data.map(({ id, dataVal }) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              navigation.navigate("viewContentsShoesOfakim", {
                title: dataVal.title,
                description: dataVal.description,
                image: dataVal.image,
                phone: dataVal.phone,
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
      </View>
    </ScrollView>
  );
};

export default ShoesOfakim;

const styles = StyleSheet.create({});