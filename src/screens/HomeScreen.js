import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import * as firebase from "firebase";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

    const ref = () => {
      firebase
        .firestore()
        .collection("users")
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
    };

    ref();
  }, []);

  // function calcCrow(lat1, lon1, lat2, lon2) {
  //   var R = 6371; // km
  //   var dLat = toRad(lat2 - lat1);
  //   var dLon = toRad(lon2 - lon1);
  //   var lat1 = toRad(lat1);
  //   var lat2 = toRad(lat2);

  //   var a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   var d = R * c;
  //   return d;
  // }

  // // Converts numeric degrees to radians
  // function toRad(Value) {
  //   return (Value * Math.PI) / 180;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          horizontal={false}
          autoplay
          height={200}
          activeDotColor="#33A8FF"
        >
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img2.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/img3.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#33A8FF",
            position: "absolute", // child
            bottom: 175, // position where you want
            left: 15,
            fontSize: 20,
          }}
        >
          קצת מהעשייה
        </Text>
      </View>
      {data.map(({ id, dataVal }) => (
        <View style={styles.categoryContainer} key={id}>
          <Text style={styles.textTitle}>
            שלום {dataVal.username}, אנא בחר/י את העיר בה תרצה/י להתנדב
          </Text>
        </View>
      ))}

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("Ofakim_HomeStack");
          }}
        >
          <View style={styles.categoryIcon}>
            <Image
              source={require("../../assets/ofakim.jpg")}
              style={styles.slider}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("BeerSheva_HomeStack");
          }}
        >
          <View style={styles.categoryIcon}>
            <Image
              source={require("../../assets/beersheva.jpg")}
              style={styles.slider}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
  },
  textTitle: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
    paddingBottom: 15,
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
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  slider: {
    height: "200%",
    width: "200%",
    alignSelf: "center",
    borderRadius: 8,
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
