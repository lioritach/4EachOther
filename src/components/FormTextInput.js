import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import DismissKeyboard from "./DismissKeyboard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserContext } from "../context/UserContext";
import * as firebase from "firebase";

const FormTextInput = ({ route }) => {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [user] = useContext(UserContext);

  const { title } = route.params;

  const sendData = () => {
    const uid = user.uid;

    firebase
      .firestore()
      .collection("requests")
      .doc(uid)
      .set({
        title: title,
        fullName: fullName,
        phoneNumber: phone,
        status: "ממתין לאישור.",
      })
      .then(() => {
        console.log("Data sent.");
      });

    alert("איזה כיף! תודה שבחרת להתנדב ב" + title);

    setFullName("");
    setPhone("");
  };

  const onSubmit = () => {
    if (!phone.trim() && !fullName.length) {
      alert("אין אפשרות להשאיר שדות ריקים!");
    } else if (phone.length < 10) {
      alert("מספר טלפון באורך לא חוקי");
    } else {
      sendData();
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={require("../../assets/happy.png")}
          style={{ width: "100%", height: "28%" }}
        />
        <View>
          <Text style={styles.titleText}>איזה כיף שבחרת להתנדב!</Text>
          <Text style={styles.subTitleText}>
            כל מה שנותר זה רק להזין פרטים:
          </Text>
        </View>

        <View style={styles.textInputView}>
          <Text style={styles.textInput}>שם מלא: </Text>
          <TextInput
            style={styles.input}
            autoCompleteType="name"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="default"
            onChangeText={(fullName) => {
              setFullName(fullName);
            }}
            value={fullName}
          />
        </View>

        <View style={styles.textInputView}>
          <Text style={styles.textInput}>טלפון: </Text>
          <TextInput
            style={styles.input}
            autoCompleteType="tel"
            autoCorrect={false}
            autoFocus={true}
            maxLength={10}
            keyboardType="phone-pad"
            onChangeText={(phone) => {
              setPhone(phone);
            }}
            value={phone}
          />
        </View>

        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.sendButton}>שלח</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    margin: 5,
    fontSize: 29,
    fontWeight: "bold",
    color: "#33A8FF",
  },
  subTitleText: {
    textAlign: "center",
    margin: 0,
    fontSize: 16,
    fontWeight: "bold",
    color: "#33A8FF",
  },
  textInputView: {
    margin: 20,
  },
  textInput: {
    textAlign: "right",
    margin: 3,
  },
  input: {
    borderBottomColor: "#8e93a1",
    borderBottomWidth: 0.5,
    height: 28,
    backgroundColor: "#fff",
    margin: 0,
  },
  sendButton: {
    textAlign: "center",
    margin: 9,
    paddingTop: 22,
    fontSize: 29,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#33A8FF",
    borderBottomWidth: 15,
    justifyContent: "center",
  },
});
