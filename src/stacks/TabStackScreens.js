import React from "react";
import { Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
import FormTextInput from "../components/FormTextInput";
import EditProfileScreen from "../screens/EditProfileScreen";
import FreeItems from "../screens/categories/OfakimCity/ItemsForDelivery/FreeItems";
import Covid19Ofakim from "../screens/categories/OfakimCity/Covid19Ofakim";
import ShoesOfakim from "../screens/categories/OfakimCity/ItemsForDelivery/ShoesOfakim";
import CardViewShoesOfakim from "../components/CardViewShoesOfakims";
import Realtime from "../screens/categories/OfakimCity/Realtime";
import FormUploadItems from "../screens/categories/OfakimCity/ItemsForDelivery/FormUploadItems";
import MyItems from "../screens/MyItems";
import LocationFunc from "../screens/LocationFunc";
import EditItems from "../components/EditItems";
import RemoveVol from "../screens/admin/RemoveVol";
import permission from "../screens/permission";
import Covid19BeerSheva from "../screens/categories/BeerShevaCity/Covid19BeerSheva";
import TeensBeerSheva from "../screens/categories/BeerShevaCity/TeensBeerSheva";
import OldsBeerSheva from "../screens/categories/BeerShevaCity/OldsBeerSheva";
import GmachBeerSheva from "../screens/categories/BeerShevaCity/GmachBeerSheva";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MyItemsStack = createStackNavigator();

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
          <Feather name="message-square" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="myItems"
      component={MyItemsStackScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "gray" }}>
            הפריטים שהעלת
          </Text>
        ),
        tabBarIcon: ({ color }) => (
          <FontAwesome name="heart-o" color={color} size={26} />
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
      // headerShown: false,
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
      name="covid19ofakim"
      component={Covid19Ofakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בקורונה באופקים",
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
      name="freeItems"
      component={FreeItems}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "פריטים למסירה באופקים",
      })}
    />

    <HomeStack.Screen
      name="shoesofakim"
      component={ShoesOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "נעליים למסירה באופקים",
      })}
    />

    <HomeStack.Screen
      name="viewContentsShoesOfakim"
      component={CardViewShoesOfakim}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "נעליים למסירה באופקים",
      })}
    />

    <HomeStack.Screen
      name="realtime"
      component={Realtime}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות מעכשיו לעכשיו",
      })}
    />

    <HomeStack.Screen
      name="formUploadItems"
      component={FormUploadItems}
      options={({ route }) => ({
        headerShown: true,
        title: "העלאת פריטים למסירה",
      })}
    />

    <HomeStack.Screen
      name="editItems"
      component={EditItems}
      options={({ route }) => ({
        headerShown: true,
        title: "עריכת פריט למסירה",
      })}
    />

    <HomeStack.Screen
      name="location"
      component={LocationFunc}
      options={({ route }) => ({
        headerShown: true,
        title: "Locations",
      })}
    />

    <HomeStack.Screen
      name="permission"
      component={permission}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "גישה מוגבלת",
      })}
    />

    <HomeStack.Screen
      name="EmergencyBeerSheva"
      component={EmergencyBeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בחירום בעיר באר שבע",
      })}
    />

    <HomeStack.Screen
      name="Covid19BeerSheva"
      component={Covid19BeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בקורונה בעיר באר שבע",
      })}
    />

    <HomeStack.Screen
      name="TeensBeerSheva"
      component={TeensBeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות לנוער בעיר באר שבע",
      })}
    />

    <HomeStack.Screen
      name="OldsBeerSheva"
      component={OldsBeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות עם קשישים בבאר שבע",
      })}
    />

    <HomeStack.Screen
      name="GmachBeerSheva"
      component={GmachBeerSheva}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "התנדבויות בגמחים בבאר שבע",
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
      name="messages"
      component={NotificationsScreen}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "הודעות & עדכונים",
      })}
    />
  </NotificationsStack.Navigator>
);

const MyItemsStackScreen = ({ navigation }) => (
  <MyItemsStack.Navigator
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
    <MyItemsStack.Screen
      name="messages"
      component={MyItems}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        headerShown: true,
        title: "הפריטים שהעלת",
      })}
    />
  </MyItemsStack.Navigator>
);
