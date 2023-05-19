import React from "react";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const MyPage = () =>{
  

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style = {styles.container}>
        <View style = {styles.header}>
          <View style={styles.row1Content}>
            <AntDesign name="bars" size={40} color="gray" />
            <Text style = {styles.guestName}>이성민 님(남,24세)</Text>
          </View>
          <View style = {styles.row2Content}>
            <AntDesign name="team" size={40} color="white" />
            <AntDesign name="idcard" size={40} color="gray" />
          </View>
        </View>
        <View style = {styles.body}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.label}>아이디 확인:</Text>
          <Text style={styles.value}>tjdals2243</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>이메일 확인:</Text>
          <Text style={styles.value}>alalfhsk@naver.com</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>생년월일:</Text>
          <Text style={styles.value}>2000년 11월 20일</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>전화번호:</Text>
          <Text style={styles.value}>010 - 8939 - 1288</Text>
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
        <View style = {styles.footer}>
          <AntDesign name="home" size={60} color="white" />
        </View>
        <View style={{ paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
      </View>
      </View>
      </SafeAreaView>
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
    flex: 2,
    backgroundColor: "#57C5B6",
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
    fontSize: 23,
    fontWeight: "600",
    marginRight: 80,
  },
   row2Content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    alignItems: "center",
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
    flex: 1.5,
    backgroundColor: "#57C5B6",
    alignItems: "center",
  },
});

export default MyPage;