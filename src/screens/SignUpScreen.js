import React, { useContext, useState } from "react";
import styled from "styled-components";
import Text from "../components/Text";
import DismissKeyboard from "../components/DismissKeyboard";
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";

export default SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [val, setUser] = useContext(UserContext);

  const signUp = async () => {
    setLoading(true);

    const user = { username, email, password, phoneNumber };

    try {
      const createdUser = firebase.createUser(user);

      setUser({ ...createdUser, isLoggedIn: true });
    } catch (error) {
      console.log("error @signUp", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <Main>
          <Text large semi center>
            שלום לכם! הירשמו כדי להתחיל.
          </Text>
        </Main>

        <Auth>
          <AuthContainer>
            <AuthTitle>Username</AuthTitle>
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              onChangeText={(username) => setUsername(username.trim())}
              value={username}
            />
          </AuthContainer>

          <AuthContainer>
            <AuthTitle>Email Address</AuthTitle>
            <AuthField
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email.trim())}
              value={email}
            />
          </AuthContainer>

          <AuthContainer>
            <AuthTitle>Phone Number</AuthTitle>
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber.trim())}
              value={phoneNumber}
            />
          </AuthContainer>

          <AuthContainer>
            <AuthTitle>Password</AuthTitle>
            <AuthField
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password.trim())}
              value={password}
            />
          </AuthContainer>
        </Auth>

        <SignUpContainer onPress={signUp} disabled={loading}>
          {loading ? (
            <Loading />
          ) : (
            <Text bold center color="#ffffff">
              הירשם
            </Text>
          )}
        </SignUpContainer>

        <SignUp onPress={() => navigation.navigate("SignIn")}>
          <Text small center>
            יש לכם משתמש?{" "}
            <Text bold color="#33a8ff">
              התחברו עכשיו!
            </Text>
          </Text>
        </SignUp>

        <HeaderGraphic>
          <RightCircle />
          <LeftCircle />
        </HeaderGraphic>
        <StatusBar barStyle="light-content" />
      </Container>
    </DismissKeyboard>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 160px;
`;

const Auth = styled.View`
  margin: 16px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: -32px 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #33a8ff;
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
  margin-top: 39px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -200px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -50px;
`;

const StatusBar = styled.StatusBar``;
