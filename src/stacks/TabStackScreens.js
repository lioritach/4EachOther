import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import Ofakim from ".././cities/Ofakim";
import BeerSheva from ".././cities/BeerSheva";
import EmergencyOfakim from "../screens/categories/OfakimCity/EmergencyOfakim";
import EmergencyBeerSheva from "../screens/categories/BeerShevaCity/EmergencyBeerSheva";
import RoutineOfakim from "../screens/categories/OfakimCity/RoutineOfakim";
import CardView from "../components/CardView";
import ReligionOfakim from "../screens/categories/OfakimCity/ReligionOfakim";
import TeensOfakim from "../screens/categories/OfakimCity/TeensOfakim";
import OldsOfakim from "../screens/categories/OfakimCity/OldsOfakim";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreens = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
            עמוד הבית
          </Text>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsStackScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
            הודעות
          </Text>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
            פרופיל אישי
          </Text>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreens;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#33A8FF",
        shadowColor: "#fff",
        elevation: 0,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="HomePage"
      component={HomeScreen}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        title: "עמוד הבית",
      })}
    />

    <HomeStack.Screen
      name="Ofakim_HomeStack"
      component={Ofakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בעיר אופקים",
      })}
    />

    <HomeStack.Screen
      name="BeerSheva_HomeStack"
      component={BeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בעיר באר שבע",
      })}
    />

    <HomeStack.Screen
      name="EmergencyOfakim"
      component={EmergencyOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בשעת חירום באופקים",
      })}
    />

    <HomeStack.Screen
      name="routineOfakim"
      component={RoutineOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בשגרה באופקים",
      })}
    />

    <HomeStack.Screen
      name="religionOfakim"
      component={ReligionOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות לפי מגדר באופקים",
      })}
    />

    <HomeStack.Screen
      name="teensOfakim"
      component={TeensOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות לבני נוער באופקים",
      })}
    />

    <HomeStack.Screen
      name="oldsOfakim"
      component={OldsOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות עם קשישים באופקים",
      })}
    />

    <HomeStack.Screen
      name="viewContents"
      component={CardView}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: route.params.title,
      })}
    />

    {/* <HomeStack.Screen
      name={"volunteer"}
      component={CardListScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerBackTitleVisible: false,
      })}
    />
    <HomeStack.Screen
      name={"cardItems"}
      component={CardItemDetails}
      options={({ route }) => ({
        // title: route.params.title,
        headerBackTitleVisible: false,
      })}
    /> */}
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#33A8FF",
        shadowColor: "#fff",
        elevation: 0,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen name="פרופיל אישי" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const NotificationsStackScreen = ({ navigation }) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#33A8FF",
        shadowColor: "#fff",
        elevation: 0,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationsStack.Screen
      name="הודעות & עדכונים"
      component={NotificationsScreen}
    />
  </NotificationsStack.Navigator>
);
