import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { UserContext } from "../context/UserContext";

import AuthStackScreens from "./AuthStackScreens";
import TabStackScreens from "./TabStackScreens";

import LoadingScreen from "../screens/LoadingScreen";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const [user] = useContext(UserContext);

  return (
    <AppStack.Navigator headerMode="none">
      {user.isLoggedIn === null ? (
        <AppStack.Screen name="Loading" component={LoadingScreen} />
      ) : user.isLoggedIn ? (
        <AppStack.Screen name="Main" component={TabStackScreens} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthStackScreens} />
      )}
    </AppStack.Navigator>
  );
};
