import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import Text from "../components/Text";
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

export default LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();
      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);
        setUser({
          username: userInfo.name,
          email: userInfo.email,
          uid: user.uid,
          logged: true,
        });
      } else {
        setUser((state) => ({ ...state, logged: false }));
      }
    }, 2000);
  }, []);

  return (
    <Container>
      <Text title color="#ffff">
        4EachOther App
      </Text>
      <Text medium color="#ffff">
        מיד מתחילים ...
      </Text>
      <LottieView
        source={require("../assets/loading.json")}
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

// export default class LoadingScreen extends React.Component {
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged((user) => {
//       this.navigation.navigate(user ? "MainTabScreens" : "RootStackScreen");
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> Loading ... </Text>
//         <ActivityIndicator size="large"></ActivityIndicator>
//       </View>
//     );
//   }
// }
