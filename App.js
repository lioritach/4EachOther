import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DrawerContent } from "./screens/DrawerContent";
import RootStackScreen from "./screens/RootStackScreen";
import { createSwitchNavigator } from "react-navigation";
import MainTabScreens from "./screens/MainTabScreens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Stack.Screen name="Root" component={RootStackScreen} />
        <Stack.Screen name="Home" component={MainTabScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
