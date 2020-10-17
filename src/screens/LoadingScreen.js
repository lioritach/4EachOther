import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";
import * as firebase1 from "firebase";

import Text from "../components/Text";

export default LoadingScreen = () => {
  const [val, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);
        const uid2 = firebase1.auth().currentUser.uid;

        const a = firebase1
          .firestore()
          .collection("admins")
          .where("userId", "==", uid2)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid: user.uid,
                isLoggedIn: true,
                isAdmin: true,
              });
            });
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });

        setUser({
          username: userInfo.username,
          email: userInfo.email,
          uid: user.uid,
          isLoggedIn: true,
          isAdmin: false,
        });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 1500);
  }, []);

  return (
    <Container>
      <Text titleLoading heavy color="#ffffff">
        4EachOther
      </Text>
      <Text medium color="#ffffff">
        מיד מתחילים ...
      </Text>

      <LottieView
        source={require("../../assets/loading.json")}
        autoPlay
        loop
        style={{ width: "100%" }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #33a8ff;
`;
