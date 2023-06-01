import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { PillData } from "../store/PillData";
import { Ionicons } from "@expo/vector-icons";
import NavigationBar from "../components/UI/NavigationBar";

const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

const MyPillDetail = ({ navigation, route }) => {
  const { pillKey } = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="ios-chevron-back-sharp"
              size={70}
              color="#57C5B6"
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View style={styles.mainTextWrapper}>
            <Text style={styles.mainText}>{PillData[pillKey - 1].name}</Text>
          </View>
          <View style={{ width: 70.5, height: 70.5 }}></View>
        </View>
        {/* body */}
        <View style={styles.body}>
          <View style={styles.pillDetailContainer}>
            <View style={styles.pillImageWrapper}>
              <ImageBackground
                style={styles.pillImage}
                resizeMode="stretch"
                source={PillData[pillKey - 1].image}
              ></ImageBackground>
            </View>
            <View style={styles.pillInfoWrapper}>
              <Text style={styles.pillInfoText}>
                {PillData[pillKey - 1].info}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addPillButton}>
              <Text style={styles.addPillButtonText}>나의 약에 추가하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0.15, backgroundColor: "#57C5B6" }}>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#57C5B6",
  },
  mainTextWrapper: {},
  mainText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#57C5B6",
  },

  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  pillDetailContainer: {
    width: "90%",
    flex: 0.75,
    padding: "3%",
    borderWidth: 2,
    borderColor: "#97DEFF",
    borderRadius: "15%",
  },
  pillImageWrapper: {
    flex: 0.5,
    borderRadius: "15%",
    overflow: "hidden",
    marginBottom: "5%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
  },
  pillInfoWrapper: {
    flex: 0.5,
    padding: "3%",
    borderRadius: "15%",
    backgroundColor: "#C9EEFF",
  },
  pillInfoText: {
    fontSize: 18,
    lineHeight: 30,
    marginTop: "2%",
  },

  buttonContainer: {
    flex: 0.15,
    width: "90%",
  },
  addPillButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "#57C5B6",
    borderRadius: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  addPillButtonText: {
    fontSize: "30%",
    color: "white",
  },

  footer: {
    flex: 1,
    backgroundColor: "#57C5B6",
  },
});

export default MyPillDetail;
