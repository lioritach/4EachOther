import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import * as firebase from "firebase";
import { FirebaseContext } from "../context/FirebaseContext";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();
  const firebase1 = useContext(FirebaseContext);
  const [city, setCity] = useState("");

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

    const checkCity = firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot((snapshot) => {
        var userCity = snapshot.data().city;
        setCity(userCity);
      });

    return () => checkCity();
  }, [city]);

  console.log(city);

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

      <View style={styles.categoryContainer}>
        <Text style={styles.textTitle}>קטגוריות</Text>
      </View>

      <View style={styles.categoryContainer}>
        {city == "אופקים" ? (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -10, marginTop: 0 }}
          >
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("religionOfakim");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/religion.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>מגדר</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("oldsOfakim");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/old.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>קשישים</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("routineOfakim");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/routine.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>שגרה</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("Ofakim_HomeStack");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/plus.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>קטגוריות נוספות</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -10, marginTop: 0 }}
          >
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("GmachBeerSheva");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/give.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>גמחים</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("OldsBeerSheva");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/old.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>קשישים</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("TeensBeerSheva");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/teens.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>נוער</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                navigation.navigate("BeerSheva_HomeStack");
              }}
            >
              <View style={styles.categoryIcon}>
                <Image
                  source={require("../../assets/plus.png")}
                  style={styles.sliderImage}
                />
              </View>
              <Text style={styles.categoryBtnTxt}>קטגוריות נוספות</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
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
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
    marginLeft: 140,
    paddingBottom: 15,
    textAlign: "center",
    textDecorationLine: "underline",
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
    marginTop: 10,
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
    marginHorizontal: 10,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 10,
    color: "#de4f35",
    fontSize: 12,
    fontWeight: "bold",
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
});
