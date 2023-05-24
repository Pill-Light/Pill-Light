import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Alert, } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import NavigationBar from "../components/UI/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import { getUserInfo, getFamilyMember, removeFamilyMember} from "../components/UserManger";
import { StatusBar } from "expo-status-bar";

const FamilyInfo = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [familyMembers, setFamilyMembers] = useState([]);
  const { name, birthYear } = userInfo;

  const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear + 1;
    return age;
  };

  const handleRemoveFamilyMember = async (index) => {
    try {
      await removeFamilyMember(index); // 가족 정보 삭제
      Alert.alert("가족회원 정보가 삭제되었습니다.")
    } catch (error) {
      console.log('Error removing family member:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = await getUserInfo();
        setUserInfo(loggedInUser);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    const fetchFamilyMembers = async () => {
      try {
        const members = await getFamilyMember();
        setFamilyMembers(members);
      } catch (error) {
        console.log('Error fetching family members:', error);
      }
    };

    fetchUserData();
    fetchFamilyMembers();
  }, []);


  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#57C5B6' }}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <Ionicons
                name="ios-chevron-back-sharp"
                size={50}
                color="#57C5B6"
                style={styles.backButton}
                onPress={() => navigation.navigate("MyPage")}
              />
            </TouchableOpacity>
            <Text style={styles.guestName}>{name} 님 {calculateAge(birthYear)}세</Text>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="#57C5B6" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          {familyMembers.map((member, index) => (
            <View key={index} style={styles.familyLine}>
              <Text style={styles.familyName}>
                {member.name} {member.age}세 ({member.relationship})
              </Text>
              <TouchableOpacity
                style={styles.minusButton}
                onPress={() => handleRemoveFamilyMember(index)}
              >
                <FontAwesome name="minus-square" size={40} color="#e6e9ed" />
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.subContainer}>
            <ImageBackground
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/메인로고.png")}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("FamilyAdd")}
              style={styles.addBtn}
            >
              <Text style={styles.add}>가족추가하기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <NavigationBar />
      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
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

