import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} title={title} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100",
    backgroundColor: "gray",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25",
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "18",
  },
});

export default AppButton;
