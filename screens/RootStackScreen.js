import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import MainTabScreens from "./MainTabScreens";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    <RootStack.Screen name="Home" component={MainTabScreens} />
  </RootStack.Navigator>
);

export default RootStackScreen;
