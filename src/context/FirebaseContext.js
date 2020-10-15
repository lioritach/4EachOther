import React, { createContext } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "../config/firebase";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const uid = await Firebase.getCurrentUser().uid;

      db.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });

      delete user.password;

      return { ...user, uid };
    } catch (error) {
      console.log("Error in @createUser ", error.message);
    }
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection("users").doc(uid).get();
      console.log("uid: ", uid);
      console.log("data: ", user.data());
      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("Error in @getUserInfo ", error);
    }
  },

  logOut: async () => {
    try {
      await firebase.auth().signOut();
      return true;
    } catch (error) {
      console.log("Error in logOut ", error);
    }
    return false;
  },

  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
