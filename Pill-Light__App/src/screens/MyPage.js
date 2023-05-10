import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const MyPage = () =>{
  return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <View style={styles.row1Content}>
            <AntDesign name="bars" size={40} color="gray" />
            <Text style = {styles.guestName}>김민호(남,68세)</Text>
          </View>
          <View style = {styles.row2Content}>
            <AntDesign name="team" size={40} color="white" />
            <AntDesign name="idcard" size={40} color="gray" />
          </View>
        </View>
        <View style = {styles.body}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.label}>입력된 질환</Text>
          <Text style={styles.value}>고혈압</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>복용중인 약</Text>
          <Text style={styles.value}>타이레놀</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>약 복용 확인</Text>
          <Text style={styles.value}>아침: 복용완료</Text>
          <Text style={styles.value}>점심: 복용전</Text>
          <Text style={styles.value}>저녁: 복용전</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.label}>이메일</Text>
          <Text style={styles.value}>내 이메일 주소</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>전화번호</Text>
          <Text style={styles.value}>내 전화번호</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>생일</Text>
          <Text style={styles.value}>내 생일</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.label}>이메일</Text>
          <Text style={styles.value}>내 이메일 주소</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>전화번호</Text>
          <Text style={styles.value}>내 전화번호</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>생일</Text>
          <Text style={styles.value}>내 생일</Text>
        </View>
      </View>
        </View>
        <View style = {styles.footer}>
          <AntDesign name="home" size={60} color="white" />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
    fontWeight: "500",
    marginRight: 90,
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
  },
  detail: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    marginTop: "15%",
    flex: 1,
    backgroundColor: "#57C5B6",
    alignItems: "center",
  },
});

export default MyPage;