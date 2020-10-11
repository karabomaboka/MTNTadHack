import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import Constants from "expo-constants";
import * as firebase from "firebase";
import { createUser } from "../actions/index";
import * as yup from "yup";

let signUpSchema = yup.object().shape({
  email: yup.string().email().required("Email is not provided"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handlesSubmit = () => {
    createUser();
  };

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => navigation.navigate("Home"))
      .catch((error) => {
        console.warn("not looking niceSignup");
      });
  };

  const addUser = (user) => {
    setUser(user);
  };

  return (
    <ScrollView>
      <View style={styles.statusBar}></View>
      <View style={styles.head}>
        <Text style={styles.headItem}>Sign up by filling the form:</Text>
      </View>

      <View style={styles.body}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            //console.log(values);
            addUser(values);
            handleSignUp();
            console.log(user);
          }}
          validationSchema={signUpSchema}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                style={styles.input}
                keyboardType="visible-password"
                placeholder="Password"
                style={styles.input}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />

              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: "#39C250",
                  },
                ]}
                onPress={() => {
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,

    // elevation: 2,
  },
  headItem: {
    padding: 20,
    fontSize: 20,
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "grey",
  },
  body: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "snow" },
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

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
