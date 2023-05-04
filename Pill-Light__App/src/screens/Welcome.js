import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const { height } = Dimensions.get("window");

const Welcome = ( {navigation} ) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.welcomeText}>
          <Text
            style={{
              fontSize: 44,
              fontWeight: "bold",
              marginBottom: "2%"
            }}
          >
            필 라이트,
          </Text>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            당신의 건강 모든 것
          </Text>
        </View>
        <ImageBackground
          style={{
            height: height / 2.8,
          }}
          resizeMode="contain"
          source={require("../../assets/icon.png")}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.logintBtn}
          >
            <Text style={styles.login}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.signBtn}
          >
            <Text style={styles.sign}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    marginTop: "13%",
    marginBottom: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  sign: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#57C5B6",
  },
  logintBtn: {
    marginTop: "60%",
    backgroundColor: "#57C5B6",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signBtn: {
    marginTop: "8%",
    backgroundColor: "#fafafa",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
