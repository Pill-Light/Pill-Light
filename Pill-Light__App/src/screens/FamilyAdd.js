import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import SearchTabBar from "../components/Search/SearchTabBar";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const FamilyAdd = () =>{
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style = {styles.container}>
        <View style = {styles.header}> 
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={40} color="#159895" />
            </TouchableOpacity>
            <Text style = {styles.guestName}>이성진님           (68세)</Text>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="#57C5B6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <View style = {styles.body}>
            <View style={styles.subContainer}>
              <ImageBackground
              style={{
                height: 200,
                width: 200,
             }}
              resizeMode="contain"
              source={require("../../assets/메인로고.png")}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={styles.saveBtn}
              ><Text style={styles.saveInfo}>저장하기</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <SearchTabBar />
        </View>
      </SafeAreaView>
    );

  };

  const styles = StyleSheet.create({
    container: {
      flex : 1
        },
    header:{
      flex: 2,
      backgroundColor: "white",
      flexDirection: "row",
    },
    backButton:{
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
    guestName:{
      color:"black",
      fontSize: 23,
      fontWeight: 600,
      marginLeft: "2%",
      marginRight: "5%",
    },
    body: {
      flex: 6,
      backgroundColor: "white", 
    },
    subContainer: {
      marginTop: "15%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    saveBtn: {
      backgroundColor: "#159895",
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100,
      borderRadius: 10,
    },
    saveInfo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
  },  
    footer:{
      flex: 1.1,
      backgroundColor: "#fff",
      flexDirection: "row",
      paddingBottom: "7%",
      paddingTop: "5%",
      borderTopWidth: "4%",
      borderColor: "#57C5B6",
    },
  });
  export default FamilyAdd;