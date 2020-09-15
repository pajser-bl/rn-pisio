import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../components/AppScreen";
import loginApi from "../api/login";
import globals from "../config/globals";

const LoginScreen = ({ navigation }) => {
  const state = {
    username: "",
    password: "",
    badLoginText: "",
  };

  const login = async (username, password) => {
    // const res = await .postAuth(username, password);
    const res = await loginApi.postAuth("admin", "123qwe");
    if (res.data.status === 200) {
      globals.username = username;
      globals.password = password;
      globals.access_token = res.data.access_token;
      navigation.navigate("Assets");
    } else {
      state.badLoginText = "Bad credentials!";
      navigation.navigate("LoginScreen");
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
        {styles.badLoginText !== "" && (
          <TouchableOpacity>
            <Text style={styles.badLoginText}>{state.badLoginText}</Text>
          </TouchableOpacity>
        )}
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
  badLoginText: {
    color: "red",
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
