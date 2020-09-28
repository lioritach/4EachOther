import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";
import firebase from "../database/firebase";
import Dismisskeyboard from "../utils/DismissKeyboard";

export default class RegisterScreen extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("LoginScreen");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
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
              <Text style={styles.text_header}>
                {"Hello!\nSign Up to get started."}
              </Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
              {/* ------------------------ NAME SECTION & INPUT ----------------------------- */}
              <Text style={styles.text_footer}>Name</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Name"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) =>
                    this.updateInputVal(val, "displayName")
                  }
                  value={this.state.displayName}
                />
              </View>
              {/* ------------------------ EMAIL SECTION & INPUT ----------------------------- */}
              <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
              <View style={styles.action}>
                <FontAwesome name="at" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Email Address"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) => this.updateInputVal(val, "email")}
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
                  maxLength={15}
                  onChangeText={(val) => this.updateInputVal(val, "password")}
                  value={this.state.password}
                />
              </View>
              {/* ------------------------ SIGN-IN & SIGN-UP SECTION &  ------------------------ */}
              <View style={styles.button}>
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Button onPress={() => this.registerUser()}>
                    <Text style={styles.textSign}>Register</Text>
                  </Button>
                </LinearGradient>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign, { color: "#009387" }]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
      </Dismisskeyboard>
    );

    // return (
    //   <View style={styles.container}>
    //     <StatusBar barStyle="light-content"></StatusBar>
    //     <Image
    //       source={require("../assets/bg.jpg")}
    //       style={{ marginTop: -140, marginLeft: -50 }}
    //     ></Image>

    //     <Image
    //       source={require("../assets/bg.jpg")}
    //       style={{ position: "absolute", bottom: -325, right: -225 }}
    //     ></Image>

    //     <View
    //       style={{
    //         position: "absolute",
    //         top: 60,
    //         alignItems: "center",
    //         width: "100%",
    //       }}
    //     >
    //       <Image
    //         source={require("../assets/login.png")}
    //         style={{ marginTop: 30, alignSelf: "center" }}
    //       ></Image>
    //       <Text style={styles.greeting}>{"Hello again.\nWelcome back."}</Text>
    //     </View>

    //     <View style={styles.errorMessage}>
    //       <Text>
    //         {this.state.errorMessage && (
    //           <Text style={styles.error}>{this.state.errorMessage}</Text>
    //         )}
    //       </Text>
    //     </View>

    //     <View style={styles.form}>
    //       <View>
    //         <Text style={styles.inputTitle}>Email Address</Text>
    //         <TextInput
    //           style={styles.input}
    //           autoCapitalize="none"
    //           onChangeText={(email) => this.setState({ email })}
    //           value={this.state.email}
    //         ></TextInput>
    //       </View>

    //       <View style={{ marginTop: 32 }}>
    //         <Text style={styles.inputTitle}>Password</Text>
    //         <TextInput
    //           style={styles.input}
    //           secureTextEntry
    //           autoCapitalize="none"
    //           onChangeText={(password) => this.setState({ password })}
    //           value={this.state.password}
    //         ></TextInput>
    //       </View>
    //     </View>

    //     <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
    //       <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={{ alignSelf: "center", marginTop: 30, top: -133 }}
    //       onPress={() => this.props.navigation.navigate("Login")}
    //     >
    //       <Text style={{ color: "#414959", fontSize: 13 }}>
    //         New Here?{" "}
    //         <Text style={{ color: "#E9446A", fontWeight: "500" }}>
    //           Register
    //         </Text>
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // );
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
    color: "#FF0000",
    fontSize: 14,
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
