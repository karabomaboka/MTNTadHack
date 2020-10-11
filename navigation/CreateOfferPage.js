import React, { useState, createRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as firebase from "firebase";
import { Formik } from "formik";

import SimpleInputText from "../components/SimpleTextInput";

// Get a reference to the database service
var database = firebase.database();

const CreateOfferPage = ({ navigation }) => {
  //const [momo, setMomo] = useState(true);
  const [tsAndCs, setTsAndCs] = useState(false);
  const [offer, setOffer] = useState({});
  let ref = database.ref("offers");

  return (
    <View style={styles.homeContainer}>
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
        <Text style={styles.headItem}>Create Offer</Text>
        <TouchableOpacity style={styles.headItem}>
          <Ionicons
            style={{ opacity: 0 }}
            name="md-person"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
        <View>
          <Formik
            initialValues={{
              min_amount: "",
              max_amount: "",
              interest: "",
            }}
            onSubmit={(values, actions) => {
              setOffer(values);
              console.log(offer);

              firebase
                .database()
                .ref("offers/" + firebase.auth().currentUser.uid)
                .set({
                  uid: firebase.auth().currentUser.uid,
                  min_amount: offer.min_amount,
                  max_amount: offer.max_amount,
                  interest: offer.interest,
                });
              actions.resetForm();
            }}
          >
            {(props) => (
              <View>
                <View style={styles.break}></View>
                <TextInput
                  style={styles.input}
                  placeholder="Min Amount"
                  style={styles.input}
                  onChangeText={props.handleChange("min_amount")}
                  value={props.values.min_amount}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Max Amount"
                  style={styles.input}
                  onChangeText={props.handleChange("max_amount")}
                  value={props.values.max_amount}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Interest"
                  style={styles.input}
                  onChangeText={props.handleChange("interest")}
                  value={props.values.interest}
                  keyboardType="numeric"
                />

                <Text style={styles.tsAndCs}>
                  Read all the terms and conditions before you can make the
                  decision to agree to make the offer to people who wants to
                  borrow moneyso here here I tell you. read man do the reading
                  don't just press play, don't do that to yourself, you didn't
                  pay your expensive school fees for nothing, make use of those
                  skills and knowledge.
                </Text>
                <View style={styles.tsAndCsBtn}>
                  {tsAndCs ? (
                    <Text
                      style={styles.tsAndCsBtn}
                      onPress={() => setTsAndCs((prev) => !prev)}
                    >
                      Accepted Terms and Conditions
                    </Text>
                  ) : (
                    <Text
                      style={styles.tsAndCsBtn}
                      onPress={() => setTsAndCs((prev) => !prev)}
                    >
                      Accept Terms and Conditions
                    </Text>
                  )}
                  {/* <Text>Accept Terms and Conditions</Text>
            <Button title="Accept" /> */}
                </View>

                <TouchableOpacity
                  disabled={!tsAndCs}
                  style={[styles.submitBtn, styles.postBtn]}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.submitBtnTxt}>Post Offer</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          {/* 
          <View style={styles.momoSetup}>
            {momo ? (
              <Text style={styles.momoSetupTxt}>
                MTN MoMo Account successfully Setup
              </Text>
            ) : (
              <TouchableOpacity>
                <Text style={styles.momoSetupTxt}>Setup MoMo Account</Text>
              </TouchableOpacity>
            )}
          </View> */}

          {/*  <TouchableOpacity style={[styles.submitBtn, styles.cancelBtn]}>
            <Text style={styles.submitBtnTxt}>Cancel</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
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
  body: {
    paddingHorizontal: 20,
  },
  textInput: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
    height: 80,
    backgroundColor: "lightgrey",
  },
  momoSetup: {
    paddingVertical: 10,
  },
  momoSetupTxt: {
    fontSize: 18,
  },
  tsAndCs: { fontSize: 16 },
  tsAndCsBtn: {
    paddingVertical: 5,
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#1C7CF9",
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
  postBtn: {
    backgroundColor: "#1C7CF9",
  },
  cancelBtn: {
    backgroundColor: "#F91C23",
  },
});

{
  /* <SimpleInputText keyboard={"numeric"} ph="Atleast" />
          <SimpleInputText keyboard={"numeric"} ph="At most" />
          <SimpleInputText keyboard={"numeric"} ph="Interest" /> */
}
export default CreateOfferPage;
