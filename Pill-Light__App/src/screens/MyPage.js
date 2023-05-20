import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from 'react';
import NavigationBar from "../components/UI/NavigationBar";
import { AsyncStorage } from "react-native";

const MyPage = ({ navigation, route }) => {
  const { userInfo } = route.params;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // AsyncStorage에서 저장된 회원 정보 가져오기
        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        // 현재 로그인한 회원 정보 가져오기
        const currentUser = parsedUsers.find(user => user.loggedIn === true);

        if (currentUser) {
          setUserInfo(currentUser);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userInfo) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>No user information available</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { username, name, gender, birthYear, birthMonth, birthDay } = userInfo;

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.searchBar}>
              <TouchableOpacity style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={40} color="#159895" />
              </TouchableOpacity>
              <View style={styles.row1Content}>
                <Text style={styles.guestName}>{name} 님</Text>
              </View>
              <TouchableOpacity style={styles.searchButton}>
                <FontAwesome name="search" size={50} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.details}>
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
                <Text style={styles.value}>{birthYear}년 {birthMonth}월 {birthDay}일</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>알약 정보 페이지</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>가족 정보 페이지</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.logoutButton}
              >
                <Text style={styles.logoutButtonText}>로그아웃</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 1.5,
    backgroundColor: "#57C5B6",
  },
  backButton: {
    fontWeight: 500,
  },
  searchBar: {
    flex: 1,
    heighft: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  searchButton: {
    alignSelf: "flex-end",
    marginBottom: "7%",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 4.0,
  },
  row1Content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  guestName: {
    color: "white",
    fontSize: 35,
    fontWeight: 600,
    marginLeft: "5%",
    marginRight: "5%",
  },
  body: {
    flex: 6,
    padding: 20,
    backgroundColor: "white",
  },
  details: {
    borderWidth: 5,
    borderColor: '#rgb(87,197,182)',
    borderRadius: 10,
    padding: 5,
  },
  detail: {
    borderWidth: 2,
    borderColor: '#rgb(87,197,182)',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
    fontSize: 20,
    marginLeft: 5,
  },
  buttonsContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: "#57C5B6",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    marginTop: "10%",
    flex: 1,
    backgroundColor: "#57C5B6",
  },
});

export default MyPage;