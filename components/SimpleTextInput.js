import React, { useEffect } from "react";
import { Keyboard, TextInput, StyleSheet, View } from "react-native";

const SimpleTextInput = ({
  ph = "Type Text Here...",
  lines = 1,
  keyboard = "default",
}) => {
  return (
    <View>
      <TextInput
        placeholder={ph}
        numberOfLines={lines}
        style={styles.TextInput}
        keyboardType={keyboard}
        onSubmitEditing={Keyboard.dismiss}
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
    marginVertical: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default SimpleTextInput;
