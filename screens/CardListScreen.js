import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ofakim from "./Ofakim";
import BeerSheva from "./BeerSheva";

const Tab = createMaterialTopTabNavigator();

const CardListScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="אופקים" component={Ofakim} />
      <Tab.Screen name="באר שבע" component={BeerSheva} />
    </Tab.Navigator>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
