import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateOfferPage = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(goBack());
          }}
          style={styles.headItem}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headItem}>Home</Text>
        <TouchableOpacity style={styles.headItem}>
          <Ionicons name="md-person" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text>Create Offer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
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

export default CreateOfferPage;
