import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";
import { Formik } from "formik";
import SimpleButton from "../components/Button";

export default function SignUpForm() {
  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          dob: "",
          gender: "",
          education: "",
          job: "",
          telephone: "",
          marital_status: "",
          loan_amount: "",
          loan_amount_term: "",
          time_stamp: "",
        }}
        onSubmit={(values) => {
          console.log(values);
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
              value={props.values.education}
            />
            <TextInput
              style={styles.input}
              placeholder="Telephone"
              style={styles.input}
              onChangeText={props.handleChange("telephone")}
              value={props.values.education}
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
              onPress={() => navigation.navigate("Home")}
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
  );
}

const styles = StyleSheet.create({
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
