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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SimpleButton from "../components/Button";

const ProfilePage = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState({
    day: 10,
    month: 10,
    year: 2020,
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const d = new Date(date);
    setDob({
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear(),
    });
    console.warn(dob);
    hideDatePicker();
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
        <View>
          <Text style={{ fontSize: 30 }}>John Doe</Text>
          <View style={styles.divider}></View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Name</Text>
            <TextInput style={styles.txt} value={"John Doe"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Date of Birth</Text>
            <Text style={styles.txt} onPress={showDatePicker}>
              {`${dob.day}/${dob.month}/${dob.year}`}
            </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Gender</Text>
            <TextInput style={styles.txt} value={"Male"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Telephone</Text>
            <TextInput style={styles.txt} value={"0839933343"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Dependants</Text>
            <TextInput style={styles.txt} value={"2"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Housing</Text>
            <TextInput style={styles.txt} value={"Rent"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Housing</Text>
            <TextInput style={styles.txt} value={"Rent"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Credit History</Text>
            <TextInput style={styles.txt} value={"No Credit"} />
          </View>

          <View style={styles.item}>
            <Text style={styles.namelbl}>Credit History</Text>
            <TextInput style={styles.txt} value={"No"} />
          </View>
        </View>
        <SimpleButton title={"Save"} bg={"#39C250"} />
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
});

export default ProfilePage;
