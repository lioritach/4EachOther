import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BeerSheva_Data } from "../components/Data";
import Card from "../components/Card";


const Tab = createMaterialTopTabNavigator();

const BeerSheva = ({ navigation }) => {
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
        // data={BeerSheva_Data}
        // renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BeerSheva;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
