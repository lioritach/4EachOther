import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ofakim_Emergency_Data } from "../components/Data";
import Card from "../components/Card";

const Tab = createMaterialTopTabNavigator();

const Ofakim = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Card
        itemData={item}
        onPress={() => {
          navigation.navigate("cardItems", { itemData: item });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Ofakim_Emergency_Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Ofakim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
