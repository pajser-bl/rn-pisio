import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppCard({ title, children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: "10",
    borderRadius: "20",
    backgroundColor: colors.lightGrey,
    padding: 5,
    marginBottom: 10,
  },
  childrenContainer: {
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default AppCard;
