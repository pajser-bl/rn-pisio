import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    {/* <Stack.Screen name="Assets" component={AssetScreen} /> */}
    {/* <Stack.Screen name="AssetsDetails" component={AssetDetailsScreen} /> */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
