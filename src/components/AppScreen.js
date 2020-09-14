import React from "react";
import { View, StyleSheet } from "react-native";

function AppScreen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppScreen;
