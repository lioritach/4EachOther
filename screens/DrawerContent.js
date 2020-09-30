import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "../database/firebase";

export function DrawerContent(props) {
  const signOut1 = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Title style={styles.title}>
                <Text>Hello {firebase.auth().currentUser.email}</Text>
              </Title>
            </View>
          </View>
        </View>

        {/* --------------------------  Home Drawer  --------------------------------- */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="עמוד הבית"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Drawer.Section>

        {/* --------------------------  Settings Drawer  --------------------------------- */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            )}
            label="הגדרות"
            onPress={() => {}}
          />
        </Drawer.Section>

        {/* --------------------------  Help Drawer  --------------------------------- */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="help-circle" color={color} size={size} />
            )}
            label="עזרה"
            onPress={() => {}}
          />
        </Drawer.Section>

        {/* --------------------------  Share Drawer  --------------------------------- */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="share" color={color} size={size} />
            )}
            label="שתפו את האפליקציה"
            onPress={() => {}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      {/* --------------------------  LogOut Drawer  --------------------------------- */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="התנתקות"
          onPress={() => {
            signOut1();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
