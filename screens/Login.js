// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passVisi, setPassVisi] = useState(true);
  const [wrongPass, setWrongPass] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  const togglePass = () => {
    setPassVisi(!passVisi);
  };

  // const validateEmail = (email) =>{
  //   let b = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  //   console.log(b);
  //   // return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // }

  const em = { name: "Batman", power: "rich" };

  const loggingIn = () => {
    if (password != "rdpl") {
      setWrongPass(true);
    }

    if (email == "") {
      setWrongEmail(true);
    }

    if (email != "") {
      setWrongEmail(false);
      if (password == "rdpl") {
        navigation.navigate("Home", email);
      }
    }
  };

  const loggingInWithoutPass = () => {
    navigation.navigate("Home", em);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <View>
        <Text>Hola</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email / Username"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          className="login"
        />
      </View>
      <View>
        {wrongEmail ? <Text>Please Enter Correct Username / Email</Text> : null}
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={passVisi}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View>
        {wrongPass ? <Text>Please Enter Correct Password</Text> : null}
      </View>

      <View>
        <Button title="Password Toggle" onPress={togglePass} color="#841584" />
      </View>

      <Button title="Login" onPress={loggingIn}></Button>
      <Button title="SkipLogin" onPress={loggingInWithoutPass}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    width: "100%",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: 150,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
