import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
//CUSTOM COMPONENTS
import SimpleInputText from "../components/SimpleTextInput";

const BorrowPage = ({ navigation }) => {
  const [momo, setMomo] = useState(true);
  const [tsAndCs, setTsAndCs] = useState(false);
  const [lang, setLang] = useState({
    language: "java",
  });

  const min = 500,
    max = 5000;
  const interest = 20;
  let data = [
    {
      value: "Banana",
    },
    {
      value: "Mango",
    },
    {
      value: "Pear",
    },
  ];

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
        <Text style={styles.headItem}>Borrow Money</Text>
        <TouchableOpacity style={[styles.headItem, { opacity: 0 }]}>
          <Ionicons name="md-person" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View>
          <SimpleInputText keyboard={"numeric"} ph={`From ${min} to ${max}`} />
          <Text
            style={{
              textAlign: "right",
              marginVertical: 5,
              fontSize: 18,
              fontStyle: "italic",
            }}
          >
            with {interest}% interest
          </Text>

          <SimpleInputText
            lines={3}
            ph="The reason you want the loan(optional)"
          />
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
          </View>
          <Text style={styles.tsAndCs}>
            Read all the terms and conditions before you can make the decision
            to agree to make the offer to people who wants to borrow moneyso
            here here I tell you. read man do the reading don't just press play,
            don't do that to yourself, you didn't pay your expensive school fees
            for nothing, make use of those skills and knowledge.
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

          <TouchableOpacity style={[styles.submitBtn, styles.postBtn]}>
            <Text style={styles.submitBtnTxt}>Borrow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.submitBtn, styles.cancelBtn]}>
            <Text style={styles.submitBtnTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default BorrowPage;
