import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-community/picker";
import { TextInput } from "react-native-paper";
import { Platform } from "react-native";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Root, Popup } from "popup-ui";
import { FirebaseContext } from "../../context/FirebaseContext";

const AddNewVolunteers = ({ navigation }) => {
  const [pickerValue, setPickerValue] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();
  const firebaseContext = useContext(FirebaseContext);
  const uid = firebaseContext.getCurrentUser().uid;

  const addVol = (category, title, subTitle, description, photo) => {
    if (
      typeof category == "undefined" ||
      typeof title == "undefined" ||
      typeof subTitle == "undefined" ||
      typeof description == "undefined"
    ) {
      alert("נא למלא את כל השדות");
      return;
    }

    if (typeof photo == "undefined") {
      const defaultImage =
        "https://firebasestorage.googleapis.com/v0/b/eachother-59993.appspot.com/o/imgnotfound.png?alt=media&token=b1741111-815a-4da4-8f59-c59912b697bc";
      sendDefaultData(category, title, subTitle, description, defaultImage);
    } else {
      sendData(category, title, subTitle, description, photo);
    }
    alert("הוספת התנדבות חדשה בוצעה בהצלחה!");

    setTitle("");
    setDescription("");
    setSubTitle("");
    setPickerValue("");
    setPhoto("");
  };

  const getPermissions = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setPhoto(result.uri);
      }
    } catch (error) {
      console.log("Error in pickImage ", error);
    }
  };

  const addPhoto = async () => {
    const status = await getPermissions();

    if (status !== "granted") {
      alert("בכדי לבחור תמונה נדרשת גישה לתמונות שלך.");
      return;
    }
    pickImage();
  };

  const sendData = async (category, title, subTitle, description, photo) => {
    const remoteUri = await firebaseContext.uploadPhotoAsync(photo);
    console.log(remoteUri);

    return new Promise((res, rej) => {
      firebase
        .firestore()
        .collection(category)
        .add({
          title: title,
          description: description,
          subtitle: subTitle,
          image: remoteUri,
        })
        .then((ref) => {
          res(ref);
          alert("הוספת התנדבות חדשה בוצעה בהצלחה!");
          navigation.navigate("HomePage");
        })

        .catch((error) => {
          rej(error);
        });
    });
  };

  const sendDefaultData = async (
    category,
    title,
    subTitle,
    description,
    defaultPhoto
  ) => {
    return new Promise((res, rej) => {
      firebase
        .firestore()
        .collection(category)
        .add({
          title: title,
          description: description,
          image: defaultPhoto,
          subtitle: subTitle,
        })
        .then((ref) => {
          res(ref);
          alert("הוספת התנדבות חדשה בוצעה בהצלחה!");
          navigation.navigate("HomePage");
        })

        .catch((error) => {
          rej(error);
        });
    });
  };

  return (
    <KeyboardAwareScrollView>
      <Root>
        <View style={styles.container}>
          <Text
            style={{
              margin: 10,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#33A8FF",
            }}
          >
            {" "}
            בחרו את הקטגוריה המתאימה
          </Text>
          <View style={{ height: 200 }}>
            <Picker
              style={{ width: "100%" }}
              selectedValue={pickerValue}
              onValueChange={(itemValue, itemIndex) =>
                setPickerValue(itemValue)
              }
            >
              <Picker.Item label="התנדבויות עם קשישים" value="ofakim_olds" />
              <Picker.Item label="התנדבויות בחירום" value="ofakim_emergency" />
              <Picker.Item label="התנדבויות בקורונה" value="ofakim_covid19" />
              <Picker.Item label="התנדבויות לנוער" value="ofakim_teens" />
              <Picker.Item label="התנדבויות לפי מגדר" value="ofakim_religion" />
              <Picker.Item label="התנדבויות בשגרה" value="ofakim_routine" />
            </Picker>
          </View>

          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              {photo ? (
                <View style={styles.ProfilePhoto}>
                  <Image
                    source={{ uri: photo }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              ) : (
                <View style={styles.photo}>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                    בחרו תמונה
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.textInput}>שם ההתנדבות </Text>
            <TextInput
              placeholder="שם ההתנדבות"
              style={styles.input}
              autoCompleteType="name"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(title) => {
                setTitle(title);
              }}
              value={title}
            />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.textInput}>תת כותרת </Text>
            <TextInput
              placeholder="תת כותרת"
              style={styles.input}
              autoCompleteType="name"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(subTitle) => {
                setSubTitle(subTitle);
              }}
              value={subTitle}
            />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.textInput}>תיאור </Text>
            <TextInput
              placeholder="תיאור"
              style={styles.input}
              autoCompleteType="name"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(description) => {
                setDescription(description);
              }}
              value={description}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              addVol(pickerValue, title, subTitle, description, photo)
            }
          >
            <Text style={styles.sendButton}>אישור</Text>
          </TouchableOpacity>
        </View>
      </Root>
    </KeyboardAwareScrollView>
  );
};

export default AddNewVolunteers;

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
    color: "#33A8FF",
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: "#8e93a1",
    borderBottomWidth: 0.5,
    height: 30,
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
    justifyContent: "center",
  },
  photo: {
    backgroundColor: "#e1e2e6",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 16,
    overflow: "hidden",
  },
  defaultPhoto: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ProfilePhoto: {
    flex: 1,
  },
});
