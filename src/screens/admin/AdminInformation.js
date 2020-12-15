import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as firebase from "firebase";
import { Root, Popup } from "popup-ui";

const AdminInformation = ({ navigation }) => {
  const [approvedReq, setApprovedRequests] = useState();
  const [deniedReq, setDeniedRequests] = useState();
  const [waitingReq, setWaitingReq] = useState();
  const [users, setUsers] = useState([]);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const waitingRequests = () => {
      firebase
        .firestore()
        .collection("requests")
        .where("status", "==", "ממתין לאישור.")
        .onSnapshot((querySnapshot) => {
          setWaitingReq(querySnapshot.size);
        });
    };

    const approvedRequests = () => {
      firebase
        .firestore()
        .collection("requests")
        .where("status", "==", "מאושר ✅")
        .onSnapshot((querySnapshot) => {
          setApprovedRequests(querySnapshot.size);
        });
    };

    const deniedRequests = () => {
      firebase
        .firestore()
        .collection("requests")
        .where("status", "==", "לא מאושר ❌")
        .onSnapshot((querySnapshot) => {
          setDeniedRequests(querySnapshot.size);
        });
    };

    const showUsers = () => {
      firebase
        .firestore()
        .collection("users")
        .onSnapshot(
          (snapshot) => {
            setUsers(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                dataVal: doc.data(),
              }))
            );
          },
          (err) => {
            setErr(err);
          }
        );
    };

    waitingRequests();
    approvedRequests();
    deniedRequests();
    showUsers();
  }, []);

  return (
    <Root>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: "Success",
                title: "Upload complete",
                button: true,
                textBody: "Congrats! Your upload successfully done",
                buttonText: "Ok",
                callback: () => Popup.hide(),
              })
            }
          >
            <Text style={styles.text}>
              סה"כ בקשות התנדבות הממתינות לאישור: {waitingReq}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.text}>
            סה"כ בקשות התנדבות שאושרו: {approvedReq}
          </Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.text}>סה"כ בקשות התנדבות שנדחו: {deniedReq}</Text>
        </View>
      </View>
    </Root>
  );
};

export default AdminInformation;

const styles = StyleSheet.create({
  text: {
    alignContent: "center",
    height: 50,
    textAlign: "center",
    color: "#33A8FF",
    fontSize: 15,
    fontWeight: "bold",
  },
  card: {
    height: 125,
    marginVertical: 15,
    flexDirection: "column",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },

  cardInfo: {
    flex: 1,
    padding: 35,
    margin: 5,
    textAlign: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
  },
});
