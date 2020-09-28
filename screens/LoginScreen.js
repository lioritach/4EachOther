import React, { Component } from "react";
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

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      errorMessage: "",
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          // this.props.navigation.navigate("Home");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    return (
      <Dismisskeyboard>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}>Welcome</Text>
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
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />
              </View>
              {/* ------------------------ PASSWORD SECTION & INPUT --------------------------- */}
              <Text style={[styles.text_footer, { marginTop: 35 }]}>
                Password
              </Text>
              <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Password"
                  secureTextEntry={true}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </View>
              {/* ------------------------ SIGN-IN & SIGN-UP SECTION &  ------------------------ */}
              <View style={styles.button}>
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <TouchableOpacity onPress={this.userLogin}>
                    <Text style={styles.textSign}>Login</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("RegisterScreen")
                  }
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign, { color: "#009387" }]}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
      </Dismisskeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
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
    borderColor: "#009387",
    borderWidth: 1,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
