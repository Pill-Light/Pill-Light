import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import NavigationBar from "../components/UI/NavigationBar";

const MyPage = () =>{
  

  return(
    <>
    <SafeAreaView style={styles.safeArea}>
      <View style = {styles.container}>
        <View style = {styles.header}>
        <View style={styles.searchBar}>
            <TouchableOpacity style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={40} color="#159895" />
            </TouchableOpacity>
          <View style={styles.row1Content}>
            <Text style = {styles.guestName}>이성민 님(24세)</Text>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.body}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.label}>아이디 확인:</Text>
          <Text style={styles.value}>tjdals2243</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>이름:</Text>
          <Text style={styles.value}>이성민</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>성별:</Text>
          <Text style={styles.value}>남자</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>생년월일:</Text>
          <Text style={styles.value}>2000년 11월 20일</Text>
        </View>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>알약 정보 페이지</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>가족 정보 페이지</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton}>
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