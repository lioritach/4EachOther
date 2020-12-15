import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardVol = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <TouchableOpacity>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDetails} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default CardVol;

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
