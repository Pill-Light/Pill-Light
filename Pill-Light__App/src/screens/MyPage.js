import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import NavigationBar from "../components/UI/NavigationBar";
import { getUserInfo, logoutUser } from "../components/UserManger";

const MyPage = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = await getUserInfo();
        setUserInfo(loggedInUser);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const { username, name, gender, birthYear, birthMonth, birthDay } = userInfo;

  const handleLogout = async () => {
    try {
      if (userInfo.loggedIn) {
        await logoutUser(userInfo.username);
      }
      navigation.navigate("Welcome");
    } catch (error) {
      console.log("로그아웃 실패:", error);
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#57C5B6" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons
                name="ios-chevron-back-sharp"
                size={70}
                color="#57C5B6"
                style={styles.backButton}
                onPress={() => navigation.navigate("MainPage")}
              />
            </TouchableOpacity>
            <View style={styles.row1Content}>
              <Text style={styles.guestName}>{name} 님</Text>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="user-circle" size={50} color="#57C5B6" />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.detail}>
              <Text style={styles.label}>아이디</Text>
              <Text style={styles.value}>{username}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>이름</Text>
              <Text style={styles.value}>{name}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>성별</Text>
              <Text style={styles.value}>{gender}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>생년월일</Text>
              <Text style={styles.value}>
                {birthYear}년 {birthMonth}월 {birthDay}일
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("MyPill")}
              >
                <Text style={styles.buttonText}>복용 중인 약 정보</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("FamilyInfo")}
              >
                <Text style={styles.buttonText}>내 가족 정보</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => handleLogout(userInfo.username)}
              >
                <Text style={styles.logoutButtonText}>로그아웃</Text>
              </TouchableOpacity>
            </View>
          </View>
          <NavigationBar />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#rgb(87,197,182)",
  },
  searchButton: {
    width: 70.5,
    height: 70.5,
    alignItems: "center",
    justifyContent: "center",
  },
  guestName: {
    color: "black",
    fontSize: 35,
    fontWeight: 600,
  },
  body: {
    flex: 6,
    backgroundColor: "#fafafa",
  },
  detail: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    padding: "4%",
  },
  label: {
    flex: 2,
    fontSize: 30,
    fontWeight: "bold",
  },
  value: {
    flex: 3.5,
    fontSize: 25,
    marginLeft: 45,
  },
  buttonsContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#57C5B6",
    padding: 15,
    borderRadius: 10,
    marginBottom: "3%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: "3%",
    width: "90%",
    borderWidth: 2,
    borderColor: "#57C5B6",
  },
  logoutButtonText: {
    color: "#57C5B6",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MyPage;
