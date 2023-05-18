import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const Recognition = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.circle}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "#57C5B6",
            }}
          >
            <Text
              style={{
                fontSize: 50,
                textAlign: "center",
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              3
            </Text>
          </View>
        </View>
        <Text style={styles.context}>개의 약이 인식되었습니다.</Text>
      </View>
      <View style={styles.middle}>
        <View style={{ width: 350, height: 500, backgroundColor: "#57C5B6" }}>
          <ScrollView>
            <View style={styles.layout}>
              <View style={styles.pill}></View>
              <View style={styles.inform}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  약 이름
                </Text>
                <Text></Text>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  효능-효과 :
                </Text>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  부작용 :
                </Text>
              </View>
            </View>
            <View style={styles.line}>
              <View
                style={{ width: 500, height: 2, backgroundColor: "#E0E0E0" }}
              ></View>
              <View style={styles.layout}>
                <View style={styles.pill}></View>
                <View style={styles.inform}>
                  <Text
                    style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                  >
                    약 이름
                  </Text>
                  <Text></Text>
                  <Text
                    style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                  >
                    효능-효과 :
                  </Text>
                  <Text
                    style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                  >
                    부작용 :
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line}>
              <View
                style={{ width: 500, height: 2, backgroundColor: "#E0E0E0" }}
              ></View>
            </View>
            <View style={styles.layout}>
              <View style={styles.pill}></View>
              <View style={styles.inform}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  약 이름
                </Text>
                <Text></Text>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  효능-효과 :
                </Text>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                >
                  부작용 :
                </Text>
              </View>
            </View>
            <View style={styles.line}>
              <View
                style={{ width: 500, height: 2, backgroundColor: "#E0E0E0" }}
              ></View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.camera}>
          <Entypo name="camera" size={75} color="black" />
        </View>
        <View style={styles.home}>
          <Ionicons name="home" size={75} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  circle: {
    marginTop: 60,
    marginLeft: 35,
  },
  context: {
    marginTop: -50,
    marginLeft: 90,
    fontSize: 28,
    fontWeight: "bold",
  },
  middle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  layout: {
    flexDirection: "row",
  },
  pill: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    width: 200,
    height: 115,
    borderRadius: 20,
    backgroundColor: "white",
  },
  inform: {
    flex: 2,
    justifyContent: "center",
    marginLeft: 30,
  },
  line: {
    marginTop: 15,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  camera: {
    marginTop: 25,
    marginLeft: 70,
  },
  home: {
    marginTop: -80,
    marginLeft: 240,
  },
});

export default Recognition;
