import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { Card } from "react-native-material-cards";

export default EmergencyOfakim = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;

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

    // const sub = firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(uid)
    //   .onSnapshot((doc) => {
    //     setTitle(doc.data().username);
    //   });
    // const hosen = firebase
    //   .database()
    //   .ref("emergencyOfakim/hosen")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle(title);
    //     setSubTitle(subTitle);
    //     setDescription(description);
    //   });

    // const manhigut = firebase
    //   .database()
    //   .ref("emergencyOfakim/manhigut")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_manhigut(title);
    //     setSubTitle_manhigut(subTitle);
    //     setDescription_manhigut(description);
    //   });

    // const idf = firebase
    //   .database()
    //   .ref("emergencyOfakim/idf")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_idf(title);
    //     setSubTitle_idf(subTitle);
    //     setDescription_idf(description);
    //   });

    // const mada = firebase
    //   .database()
    //   .ref("emergencyOfakim/mada")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_mada(title);
    //     setSubTitle_mada(subTitle);
    //     setDescription_mada(description);
    //   });

    // const ogen = firebase
    //   .database()
    //   .ref("emergencyOfakim/ogen")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_ogen(title);
    //     setSubTitle_ogen(subTitle);
    //     setDescription_ogen(description);
    //   });

    // const kavRachel = firebase
    //   .database()
    //   .ref("emergencyOfakim/kavRachel")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_kavRachel(title);
    //     setSubTitle_kavRachel(subTitle);
    //     setDescription_kavRachel(description);
    //   });

    // const aihudHazala = firebase
    //   .database()
    //   .ref("emergencyOfakim/aihudHazala")
    //   .on("value", (snapshot) => {
    //     const title = snapshot.val().title;
    //     const subTitle = snapshot.val().subTitle;
    //     const description = snapshot.val().description;
    //     setTitle_aihudHazala(title);
    //     setSubTitle_aihudHazala(subTitle);
    //     setDescription_aihudHazala(description);
    //   });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Image
            source={require("../../../../assets/hosen.jpg")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.hosen_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.hosen_subTitle}
              </Text>
            ))}
          </Text>
          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.hosen_description}
              </Text>
            ))}
          </Text>
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.hosen_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/aihudHazala.jpg")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.aihudHazala_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.aihudHazala_subTitle}
              </Text>
            ))}
          </Text>
          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.aihudHazala_description}
              </Text>
            ))}
          </Text>
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.aihudHazala_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/itc.jpg")}
            style={{ height: 200, width: 230, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.manhigut_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.manhigut_subTitle}
              </Text>
            ))}
          </Text>
          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.manhigut_description}
              </Text>
            ))}
          </Text>
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.manhigut_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/idf.jpg")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.idf_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.idf_subTitle}
              </Text>
            ))}
          </Text>

          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.idf_description}
              </Text>
            ))}
          </Text>

          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.idf_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/mda.png")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.mda_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.mda_subTitle}
              </Text>
            ))}
          </Text>

          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.mda_description}
              </Text>
            ))}
          </Text>

          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.mda_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card>
          <Image
            source={require("../../../../assets/ofakim.jpg")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.ogen_title}
              </Text>
            ))}
          </Text>

          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.ogen_subTitle}
              </Text>
            ))}
          </Text>

          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.ogen_description}
              </Text>
            ))}
          </Text>

          {/* ----------------------- BUTTON SECTION ---------------------------------- */}
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.ogen_title}
                    </Text>
                  ))}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Card>

        {/* ----------------------- ANOTHER CARD SECTION ---------------------------------- */}

        <Card>
          <Image
            source={require("../../../../assets/kavRachel.png")}
            style={{ height: 200, width: 200, marginLeft: 74 }}
          />

          {/* ----------------------- TITLE SECTION ---------------------------------- */}
          <Text style={styles.textTitle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.textTitle}>
                {val.kavRachel_title}
              </Text>
            ))}
          </Text>

          {/* ----------------------- SUBTITLE SECTION ---------------------------------- */}
          <Text style={styles.subTitleStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.subTitleStyle}>
                {val.kavRachel_subTitle}
              </Text>
            ))}
          </Text>

          {/* ----------------------- DESCRIPTION SECTION ---------------------------------- */}
          <Text style={styles.descStyle}>
            {data.map((val, index) => (
              <Text key={index} style={styles.descStyle}>
                {val.kavRachel_description}
              </Text>
            ))}
          </Text>

          {/* ----------------------- BUTTON SECTION ---------------------------------- */}
          <View style={styles.sep}>
            <TouchableOpacity onPress={() => console.log("presssed")}>
              <Text style={styles.textPressHereToVol}>
                לחצו כאן כדי להתנדב ב
                <Text>
                  {data.map((val, index) => (
                    <Text key={index} style={styles.textPressHereToVol}>
                      {val.kavRachel_title}
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
    color: "#33a8ff",
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
