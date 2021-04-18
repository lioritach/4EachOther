import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import CardView from "../components/CardView";
import FormTextInput from "../components/FormTextInput";
import EditProfileScreen from "../screens/EditProfileScreen";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";
import AddNewVolunteers from "../screens/admin/AddNewVolunteers";
import ShowRequests from "../screens/admin/ShowRequests";
import AdminInformation from "../screens/admin/AdminInformation";
import RemoveVol from "../screens/admin/RemoveVol";
import AdminRemoveVol from "../components/AdminRemoveVol";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStacksScreens = () => (
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

export default MainStacksScreens;

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
      component={AdminHomeScreen}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        title: "עמוד הבית",
      })}
    />

    <HomeStack.Screen
      name="addNewVol"
      component={AddNewVolunteers}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "הוספת התנדבות חדשה",
      })}
    />

    <HomeStack.Screen
      name="showRequests"
      component={ShowRequests}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "בקשות הממתינות להתנדבות",
      })}
    />

    <HomeStack.Screen
      name="admininformation"
      component={AdminInformation}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "מידע נוסף",
      })}
    />

    <HomeStack.Screen
      name="removeVol"
      component={RemoveVol}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "מחיקת התנדבות",
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

    <HomeStack.Screen
      name="formTextInput"
      component={FormTextInput}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "הזנת פרטים להתנדבות",
      })}
    />

    <HomeStack.Screen
      name="adminRemoveVol"
      component={AdminRemoveVol}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "מחיקת התנדבויות",
      })}
    />
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
    <ProfileStack.Screen
      name="profile"
      component={ProfileScreen}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "פרופיל אישי",
      })}
    />

    <ProfileStack.Screen
      name="editProfile"
      component={EditProfileScreen}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "עריכת פרופיל",
      })}
    />
  </ProfileStack.Navigator>
);
