import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import SearchTabBar from "../components/Search/SearchTabBar";
import SearchResult from "../components/Search/SearchResult";
import { FontAwesome } from "@expo/vector-icons";

const FamilyInfo = () =>{
  return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <View style = {styles.row1}> 
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={40} marginTop={30} color="#57C5B6" />
            </TouchableOpacity>
            <Text style = {{
               color:"black",
               fontSize: 20,
               fontWeight: "bold",
               marginTop: 40, 
              }}>
                이성진님              68세(여)
            </Text>
          </View>
          <View style = {styles.row2}>
          <AntDesign name="team" size={40} color="#57C5B6" />
          <AntDesign name="idcard" size={40} color="gray" />
          </View>
        </View>
        <View style = {styles.body}>
          <View style = {styles.familyLine}>
            <Text style = {styles.familyName}>이숙자 (32세) 자녀</Text></View>
            <View style={styles.subContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={styles.addBtn}
                    >
                        <Text style={styles.add}>가족추가하기</Text>
                    </TouchableOpacity>
                </View> 
        </View>
        <View style={styles.footer}>
          <SearchTabBar />
        </View>
      </View>
    );

  };

  const styles = StyleSheet.create({
    container: {
      flex : 1
        },
    header:{
      flex: 2,
      backgroundColor: "white",
    },
    row1:{
      flex: 1,
      flexDirection: "row",
      marginTop: 20,
    },
    searchButton: {
      alignSelf: "flex-end",
      marginBottom: "4%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }},
    guestName:{
      color:"black",
      fontSize: 20,
      fontWeight: 600,
      marginTop: 40,
    },
    guestInFo:{
      color:"white",
      fontSize: 20,
      fontWeight: 600,
      alignItems: "center",
      marginLeft: 10,
      marginTop: 10,
    },
    row2:{
      flex:1,
      flexDirection: "row",
      marginTop: 20,
    },
    body: {
      flex: 6,
      backgroundColor: "white", 
    },
    familyLine:{
      flex: 0.18,
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
    familyLine2:{
      flex: 0.18,
      flexDirection: "row",
      backgroundColor: "white",
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