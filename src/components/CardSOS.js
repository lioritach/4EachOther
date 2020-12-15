import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const CardSOS = ({ title, description, image, maxVol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection("votes")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            dataVal: doc.data(),
          }))
        );
      });
    return () => ref();
  }, []);

  const increment = firebase.firestore.FieldValue.increment(1);

  const updateFunc = () => {
    firebase
      .firestore()
      .collection("votes")
      .doc(title)
      .update({ votes: increment });
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <TouchableOpacity onPress={updateFunc}>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardDetails}>{description}</Text>
        {data.map(({ id, dataVal }) => (
          <Text
            key={id}
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "red",
              backgroundColor: "#fff",
              position: "absolute", // child
              bottom: 1, // position where you want
              left: 11,
            }}
          >
            מס' האנשים שבחרו להתנדב: {dataVal.votes} מתוך {maxVol}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default CardSOS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    position: "relative",
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    color: "#33A8FF",
  },
  cardDetails: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
  },
});
