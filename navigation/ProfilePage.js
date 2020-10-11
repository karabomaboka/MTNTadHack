import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SimpleButton from "../components/Button";
import * as firebase from "firebase";

const ProfilePage = ({ navigation }) => {
  //const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [userData, setUserData] = useState({});

  const userEmail = () => {
    return firebase.auth().currentUser.email;
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.headItem}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headItem}>Profile</Text>
        <View style={styles.headItem}>
          <Ionicons
            style={{ opacity: 0 }}
            name="md-arrow-back"
            size={24}
            color="black"
          />
        </View>
      </View>

      <View style={styles.body}>
        <Formik
          initialValues={{
            email: userEmail(),
            first_name: "",
            last_name: "",
            dob: "",
            gender: "",
            education: "",
            job: "",
            telephone: "",
            marital_status: "",
            loan_amount: "",
            lend_amount: "",
            loan_amount_term: "",
            /* time_stamp: "", */
          }}
          onSubmit={(values) => {
            console.log(values);
            setUserData(values);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                style={styles.input}
                placeholder="First Name"
                style={styles.input}
                onChangeText={props.handleChange("first_name")}
                value={props.values.first_name}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                style={styles.input}
                onChangeText={props.handleChange("last_name")}
                value={props.values.last_name}
              />
              <TextInput
                style={styles.input}
                placeholder="Date of birth"
                style={styles.input}
                onChangeText={props.handleChange("dob")}
                value={props.values.dob}
              />
              <TextInput
                style={styles.input}
                placeholder="Gender"
                style={styles.input}
                onChangeText={props.handleChange("gender")}
                value={props.values.gender}
              />
              <TextInput
                style={styles.input}
                placeholder="Marital Status"
                style={styles.input}
                onChangeText={props.handleChange("marital_status")}
                value={props.values.marital_status}
              />
              <View style={styles.break}></View>
              <TextInput
                style={styles.input}
                placeholder="Education"
                style={styles.input}
                onChangeText={props.handleChange("education")}
                value={props.values.education}
              />
              <TextInput
                style={styles.input}
                placeholder="Job"
                style={styles.input}
                onChangeText={props.handleChange("job")}
                value={props.values.job}
              />
              <TextInput
                style={styles.input}
                placeholder="Telephone"
                style={styles.input}
                onChangeText={props.handleChange("telephone")}
                value={props.values.telephone}
              />

              <TextInput
                style={styles.input}
                placeholder="Loan Amount"
                style={styles.input}
                onChangeText={props.handleChange("loan_amount")}
                value={props.values.loan_amount}
              />
              <TextInput
                style={styles.input}
                placeholder="Lend Amount"
                style={styles.input}
                onChangeText={props.handleChange("lend_amount")}
                value={props.values.lend_amount}
              />
              <TextInput
                style={styles.input}
                placeholder="Loan Amount Term"
                style={styles.input}
                onChangeText={props.handleChange("loan_amount_term")}
                value={props.values.loan_amount_term}
              />
              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: "#39C250",
                  },
                ]}
                onPress={() => {
                  navigation.navigate("Home");
                  props.handleSubmit();
                }}
              >
                <Text style={styles.submitBtnTxt}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: "#1C7CF9",
                  },
                ]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.submitBtnTxt}>Login in</Text>
              </TouchableOpacity>
              <View style={styles.break}></View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "grey",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headItem: {
    padding: 20,
    fontSize: 18,
  },
  body: { paddingHorizontal: 20, paddingVertical: 10 },
  divider: { height: 1, marginVertical: 5, backgroundColor: "grey" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  txt: {
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
    backgroundColor: "lightgrey",
    marginVertical: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  break: {
    marginVertical: 25,
    height: 2,
    backgroundColor: "whitesmoke",
  },
  submitBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: "#39C250",
    borderRadius: 6,
  },
  submitBtnTxt: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
});

export default ProfilePage;
