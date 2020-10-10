import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const SimpleButton = ({ title = "Button", bg = "#1C7CF9" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitBtn,
        {
          backgroundColor: bg,
        },
      ]}
    >
      <Text style={styles.submitBtnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default SimpleButton;
