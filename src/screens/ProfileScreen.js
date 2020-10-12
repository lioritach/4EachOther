import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";
import Text from "../components/Text";
import { View } from "react-native";
import * as firebase from "firebase";
import { Card } from "react-native-material-cards";

export default ProfileScreen = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase1 = useContext(FirebaseContext);
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const document = await firebase
  //     .firestore()
  //     .collection("ofakim")
  //     .doc("ofakim_routine")
  //     .get();
  // };

  useEffect(() => {
    // getData();
    const sub = firebase
      .firestore()
      .collection("ofakim")
      .onSnapshot((docs) => {
        let data = [];
        docs.forEach((doc1) => {
          data.push(doc1.data());
        });
        setData(data);
        console.log(data);
      });
    // const sub = firebase
    //   .firestore()
    //   .collection("ofakim")
    //   .doc("ofakim_routine")
    //   .onSnapshot((doc) => {
    //     setData(doc.data().title);
    //   });
  }, []);

  const logOut = async () => {
    const loggedOut = await firebase1.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };

  return (
    <Container>
      <Logout onPress={logOut}>
        <Text medium bold center color="#e23">
          LOG OUT
        </Text>
      </Logout>

      <Text>
        {data.map((val, index) => (
          <View key={index}>
            <Text>{val.routine_title}</Text>
          </View>
        ))}
      </Text>
      <Text>
        {data.map((val, index) => (
          <View key={index}>
            <Text>{val.hosen_title}</Text>
          </View>
        ))}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 64px;
  flex: 1;
`;

const Logout = styled.TouchableOpacity`
  margin-bottom: 32px;
`;
