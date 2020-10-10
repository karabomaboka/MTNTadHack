import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const HomePage = ({ navigation }) => {
  const [outstandingClr, setOutstandingClr] = useState({
    backgroundColor: "#39C250",
  });
  return (
    <View style={styles.homeContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateOfferPage");
          }}
          style={styles.headItem}
        >
          <Ionicons name="md-add" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.headItem}>Home</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfilePage");
          }}
          style={styles.headItem}
        >
          <Ionicons name="md-person" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={[styles.outstandingSection, outstandingClr]}>
          <View style={styles.outstandingBalance}>
            <Text style={styles.outstandingBalanceTxt}>R50,00</Text>
            <Text style={styles.outstandingBalanceLbl}>Outstanding</Text>
          </View>
          <TouchableOpacity
            accessibilityLabel="Press here to pay back the money you owe."
            style={styles.PayBackBtn}
          >
            <Text style={styles.PayBackBtnTxt}>Pay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lenders}>
          <Text style={styles.lendersTitle}>Lenders</Text>

          <View style={styles.lendersPosts}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BorrowPage");
              }}
              style={styles.lenderPost}
            >
              <Text style={styles.lenderPostTxt}>R500,00 to R5000,00</Text>
              <Text style={styles.lenderPostTxtInterest}>Interest: 16%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lenderPost}>
              <Text style={styles.lenderPostTxt}>R500,00 to R5000,00</Text>
              <Text style={styles.lenderPostTxtInterest}>Interest: 16%</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 10,
    backgroundColor: "snow",
    // elevation: 2,
  },
  headItem: {
    padding: 20,
  },
  body: {},
  outstandingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    //backgroundColor: "lightgrey",
    borderRadius: 6,
  },
  outstandingBalanceTxt: { fontSize: 35, color: "#fff" },
  outstandingBalanceLbl: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#fff",
  },
  PayBackBtn: { backgroundColor: "#fff", padding: 10, borderRadius: 6 },
  PayBackBtnTxt: {
    fontSize: 20,
    textTransform: "uppercase",
    fontSize: 26,
    color: "#000",
  },
  lenders: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lendersTitle: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  lenderPost: {
    marginVertical: 5,
    padding: 10,
    paddingVertical: 20,
    //flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "center",
    backgroundColor: "lightgrey",
  },
  lenderPostTxt: {
    fontSize: 24,
  },
  lenderPostTxtInterest: {
    fontSize: 14,
  },
});

export default HomePage;
