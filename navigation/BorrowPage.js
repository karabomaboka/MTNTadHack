import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";

//CUSTOM COMPONENTS
import SimpleInputText from "../components/SimpleTextInput";

const BorrowPage = ({ navigation }) => {
  const min = 500,
    max = 5000;
  const interest = 20;
  return (
    <View style={styles.homeContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(goBack());
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
          {/* <TextInput
            style={styles.textInput}
            numberOfLines={1}
            placeholder={`From ${min} to ${max}`}
            keyboardType="numeric"
          /> */}
          <SimpleInputText ph={`From ${min} to ${max}`} />
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
          <TextInput
            style={styles.textInput}
            numberOfLines={3}
            placeholder="The reason for the loan..."
          />
          <View>
            <Text>Setup MTN MoMo Account</Text>
            <Text>Checked</Text>
          </View>
          <View>
            <Text>
              Read all the terms and conditions before you can make the decision
              to agree to make the offer to people who wants to borrow moneyso
              here here I tell you. read man do the reading don't just press
              play, don't do that to yourself, you didn't pay your expensive
              school fees for nothing, make use of those skills and knowledge.
            </Text>
            <Button title="Accept" />
          </View>
          <View>
            <Text>Setup MTN MoMo Account</Text>
            <Text>Checked</Text>
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Post Offer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn}>
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
    backgroundColor: "lightgrey",
  },
  submitBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#39C250",
    borderRadius: 6,
  },
  submitBtnTxt: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default BorrowPage;
