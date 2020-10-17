import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default Ofakim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.textTitle}>שלום מנהל/ת התנדבויות!</Text>
      </View>

      {/* ---------------------------- Categories Section ------------------------------------ */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("EmergencyOfakim");
          }}
        >
          <View style={styles.categoryIcon}>
            <Image
              source={require("../../../assets/sos.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>התנדבויות בחירום</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("EmergencyOfakim");
          }}
        >
          <View style={styles.categoryIcon}>
            <Image
              source={require("../../../assets/sos.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>התנדבויות בחירום</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("EmergencyOfakim");
          }}
        >
          <View style={styles.categoryIcon}>
            <Image
              source={require("../../../assets/sos.png")}
              style={styles.sliderImage}
            />
          </View>
          <Text style={styles.categoryBtnTxt}>התנדבויות בחירום</Text>
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
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 85,
    textAlign: "center",
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
