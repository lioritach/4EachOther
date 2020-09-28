import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import * as firebase from "firebase";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import MessageScreen from "./MessageScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Auth = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreens = () => (
  <Tab.Navigator
    activeColor="#fff"
    tabBarOptions={{
      activeTintColor: "#009387",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-arrow-round-back" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="MessageScreen"
      component={MessageScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreens;

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const AuthStackScreen = ({ navigation }) => (
  <Auth.Screen name="Login" component={LoginScreen} />
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
