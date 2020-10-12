import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as firebase from "firebase";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }) => {
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
              source={require("../assets/img1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/img2.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/img3.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("volunteer", { title: "התנדבויות בשעת חירום" });
          }}
        >
          <View style={styles.categoryIcon}>
            {/* <Fontisto name="clock" size={35} color="#33A8FF" /> */}
            <Image
              source={require("../assets/emergency.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>התנדבות בשעת חירום</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            // navigation.navigate("volunteer", {
            //   title: "התנדבות עם אוכלוסיית גיל הזהב",
            // });
          }}
        >
          <View style={styles.categoryIcon}>
            {/* <Fontisto name="clock" size={35} color="#33A8FF" /> */}
            <Image
              source={require("../assets/old.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>אוכלוסיית גיל הזהב</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            // navigation.navigate("volunteer", { title: "התנדבויות בני נוער" });
          }}
        >
          <View style={styles.categoryIcon}>
            {/* <MaterialIcons name="family-restroom" size={35} color="#33A8FF" /> */}
            <Image
              source={require("../assets/teens.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>התנדבות בני נוער</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
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
    fontWeight: "bold"
  },
});

export default HomeScreen;
