import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../components/AppScreen";

import ApiLogin from "../api/ApiLogin";
import globals from "../config/globals";

const LoginScreen = ({ navigation }) => {
  const state = {
    username: "",
    password: "",
  };

  const login = async (username, password) => {
    const res = await ApiLogin.postAuth(username, password);
    if (res !== null) {
      globals.username = res.username;
      globals.password = res.password;
      globals.access_token = res.access_token;
      alert(globals.username);
    } else {
    }
  };

  return (
    <AppScreen>
      <View style={styles.container}>
        <Text style={styles.logo}>NaT</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => {
              state.username = text;
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => {
              state.password = text;
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => login(state.username, state.password)}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </AppScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  signupText: {
    textDecorationLine: "line-through",
    color: "white",
  },
});
export default LoginScreen;
