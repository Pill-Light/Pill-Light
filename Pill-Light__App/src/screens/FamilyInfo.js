import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import SearchTabBar from "../components/Search/SearchTabBar";
import SearchResult from "../components/Search/SearchResult";
import { FontAwesome } from "@expo/vector-icons";

const FamilyInfo = () =>{
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style = {styles.container}>
        <View style = {styles.header}> 
          <View style={styles.searchBar}>
            <Text style = {styles.guestName}>이성진님     (68세)</Text>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="#57C5B6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <View style = {styles.body}>
          <View style = {styles.familyLine}>
            <Text style = {styles.familyName}>이숙자(32세)     자녀</Text></View>
            <View style={styles.subContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("")}
                        style={styles.addBtn}
                    >
                        <Text style={styles.add}>가족추가하기</Text>
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
    searchBar: {
      flex: 1,
      height: "70%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    inputText: {
      fontSize: 18,
      width: "70%",
      backgroundColor: "#fafafa",
      padding: "4%",
      margin: "3%",
      borderRadius: 10,
      marginVertical: "3%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
    searchButton: {
      alignSelf: "flex-end",
      marginBottom: "4%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,  
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
    },
  },
    guestName:{
      color:"black",
      fontSize: 25,
      fontWeight: 600,
      marginRight: "10%",
      alignItems: "center",
    },
    guestInFo:{
      color:"white",
      fontSize: 20,
      fontWeight: 600,
      alignItems: "center",
      marginLeft: 10,
      marginTop: 10,
    },
    body: {
      flex: 6,
      backgroundColor: "white", 
    },
    familyLine:{
      flex: 0.25,
      flexDirection: "row",
      backgroundColor: "#159895",
    },
    familyName:{
      color: "white",
      fontSize: 20,
      fontWeight: 600,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
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
      marginTop: 300,
      borderRadius: 10,
    },
    add: {
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
  export default FamilyInfo;