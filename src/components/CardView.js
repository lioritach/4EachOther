import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { UserContext } from "../context/UserContext";
import { ScrollView } from "react-native-gesture-handler";

const CardView = ({ navigation, route }) => {
  const { title, subtitle, description, image } = route.params;
  var { city } = route.params;
  const [user] = useContext(UserContext);
  const [data, setdata] = useState(false);


  if (typeof city === "undefined") {
    city = "אופקים";
  }

  //check if the user already sign to vol.
  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    const ref = firebase
      .firestore()
      .collection("requests")
      .where("title", "==", title)
      .where("uid", "==", userId)
      .onSnapshot((snapshot) => {
        snapshot.forEach((querySelect) => {
          test(querySelect.data().title, querySelect.data().uid);
        });
      });

    return () => ref();
  }, []);
//check that the user will not send 2 requests for vol
  const test = (titleParam, uidParam) => {
    if (titleParam == title) {
      setdata(true);
    } else {
      setdata(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "80%",
          }}
        />

        <View
          style={[
            {
              position: "absolute",
              bottom: "3%",
              left: "3%",
              right: "3%",
              borderRadius: 15,
              padding: 18,
              backgroundColor: "white",
            },
            styles.shadow,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>

            <View
              style={{ marginHorizontal: 12, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 14, lineHeight: 25, textDecorationLine: "underline" }}>{title}</Text>
              <Text style={{ color: "#8b9097", fontSize: 16, lineHeight: 22 }}>
                אופקים
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                color: "#8b9097",
                fontSize: 16,
                lineHeight: 22,
                textAlign: "center",
              }}
            >
              {subtitle}
            </Text>
          </View>
        </View>

        {/* Header Buttons */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            //height: 50,
            flexDirection: "row",
          }}
        ></View>
      </View>

      {/* Body */}
      <View style={{ flex: 1.5 }}>
        {/* About */}
        <View style={{ marginTop: 8, paddingHorizontal: 8 }}>
          <Text
            style={{
              fontSize: 22,
              lineHeight: 30,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            מידע על ההתנדבות
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: "#8b9097",
              fontSize: 16,
              lineHeight: 15,
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            {description}
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={{ flex: 0.5, paddingHorizontal: 8 }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={styles.sectionLarge}>
            <TouchableOpacity
              disabled={data}
              style={styles.commandButton}
              onPress={() => {
                navigation.navigate("formTextInput", { title: title });
              }}
            >
              <Text style={styles.panelButtonTitle}>לחצו כאן כדי להתנדב</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sectionLarge: {
    minHeight: 100,
  },
  commandButton: {
    padding: 15,
    backgroundColor: "#33A8FF",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,

    marginStart: 25,
    left: 80,

    marginLeft: 140,
    marginRight: 130,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderContainer: {
    height: "20%",
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
});

export default CardView;
