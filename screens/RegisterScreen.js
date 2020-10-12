import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as firebase from "firebase";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Dismisskeyboard from "../utils/DismissKeyboard";
import Feather from "react-native-vector-icons/Feather";

const RegisterScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const TextInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = (val) => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const userRegister = (email, password) => {
    if (data.email === "" && data.password === "") {
      Alert.alert("אנא הכנס פרטים");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => setData({ errorMessage: error.message }));
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <Dismisskeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <StatusBar backgroundColor="#33A8FF" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>ברוכים הבאים!</Text>
            <Text style={styles.text_underHeader}>הירשמו כעת</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            {/* ------------------------ EMAIL SECTION & INPUT ----------------------------- */}
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="at" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email Address"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(email) => TextInputChange(email)}
              />
              {data.check_textInputChange ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : null}
            </View>
            {/* ------------------------ PASSWORD SECTION & INPUT --------------------------- */}
            <Text style={[styles.text_footer, { marginTop: 35 }]}>
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(password) => handlePasswordChange(password)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="gray" size={20} />
                ) : (
                  <Feather name="eye" color="gray" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {/* ------------------------ CONFIRM PASSWORD SECTION & INPUT --------------------------- */}
            <Text style={[styles.text_footer, { marginTop: 35 }]}>
              Confirm Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(password) =>
                  handleConfirmPasswordChange(password)
                }
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="gray" size={20} />
                ) : (
                  <Feather name="eye" color="gray" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {/* ------------------------ SIGN-IN & SIGN-UP SECTION &  ------------------------ */}
            <View style={styles.button}>
              <LinearGradient
                colors={["#33A8FF", "#33A8FF"]}
                style={styles.signIn}
              >
                <TouchableOpacity
                  onPress={() => {
                    userRegister(data.email, data.password);
                  }}
                >
                  <Text style={styles.textSign}>הירשם</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "#33A8FF" }]}>
                  התחבר
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    </Dismisskeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33A8FF",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_underHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#33A8FF",
    borderWidth: 1,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default RegisterScreen;
