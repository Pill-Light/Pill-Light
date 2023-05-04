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
import { Colors } from "react-native/Libraries/NewAppScreen";
const { height } = Dimensions.get("window");

const Welcome = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.welcomeText}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            필 라이트,
          </Text>
          <Text
            style={{
              fontSize: 48,
            }}
          >
            당신의 건강 모든 것
          </Text>
        </View>
        <ImageBackground
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("./assets/image/welcome-img2.png")}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={styles.logintBtn}
          >
            <Text style={styles.login}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signBtn}>
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
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 24,
    color: "white",
  },
  sign: {
    fontSize: 24,
    color: "#57C5B6",
  },
  logintBtn: {
    marginTop: 250,
    backgroundColor: "#57C5B6",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  signBtn: {
    marginTop: 30,
    backgroundColor: "#fafafa",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
