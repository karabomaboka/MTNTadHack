import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SimpleTextInput = ({ ph = "Type Text Here...", lines = 1 }) => {
  return (
    <View>
      <TextInput
        placeholder={ph}
        numberOfLines={lines}
        style={styles.TextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
    backgroundColor: "lightgrey",
  },
});

export default SimpleTextInput;
