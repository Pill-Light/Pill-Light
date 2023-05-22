import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import NavigationBar from "../components/UI/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const FamilyInfo = () => {
  const route = useRoute();
  const { name, age, phoneNum, familyRelation } = route.params;
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={40} color="#159895" />
            </TouchableOpacity>
            <Text style={styles.guestName}>이성진님 (68세)</Text>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="#57C5B6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.familyLine}>
          <Text style={styles.familyName}>이숙자(32세) 자녀</Text>
          <TouchableOpacity style={styles.minusButton}>
            <FontAwesome name="minus-square" size={40} color="#e6e9ed" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text>이름 : {name}</Text>
          <Text>나이 : {age}</Text>
          <Text>전화번호 : {phoneNum}</Text>
          <Text>가족관계 : {familyRelation}</Text>
        </View>
        <View style={styles.subContainer}>
        <ImageBackground
                  style={styles.image}
                  resizeMode="contain"
                  source={require("../../assets/메인로고.png")}
                />
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={styles.addBtn}
          >
            <Text style={styles.add}>가족추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    <NavigationBar />
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: "white",
    flexDirection: "row",
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
    marginBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  guestName: {
    color: "black",
    fontSize: 23,
    fontWeight: 600,
    marginLeft: "15%",
    marginRight: "12%",
  },
  body: {
    flex: 6,
    backgroundColor: "white",
  },
  familyLine: {
    flex: 0.25,
    flexDirection: "row",
    backgroundColor: "#57C5B6",
  },
  familyName: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
    marginLeft: "5%",
  },
  minusButton: {
    alignSelf: "flex-end",
    marginBottom: "5%",
    marginLeft: "28%",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  infoContainer: {
      flex: 0.25,
      flexDirection: "row",
      backgroundColor: "#57C5B6",
  },
    image: {
    height: 200,
    width: 200,
    },
  subContainer: {
    marginTop: "15%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "#159895",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    borderRadius: 10,
  },
  add: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default FamilyInfo;
