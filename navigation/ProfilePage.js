import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomePage");
          }}
          style={styles.headItem}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headItem}>Home</Text>
        <View></View>
      </View>

      <View style={styles.body}>
        <Text>John Doe's Profile</Text>
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
  },
});

export default ProfilePage;
