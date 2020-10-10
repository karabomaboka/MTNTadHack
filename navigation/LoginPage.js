import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import SimpleButton from "../components/Button";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View styles={styles.break}></View>
      <View style={styles.body}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View>
              <View style={styles.break}></View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />

              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: "#1C7CF9",
                  },
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.submitBtnTxt}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: "#39C250",
                  },
                ]}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.submitBtnTxt}>Sign up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "snow" },
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
    marginVertical: 55,
    height: 2,
    //backgroundColor: "whitesmoke",
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

export default LoginPage;
