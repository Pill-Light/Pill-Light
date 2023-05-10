import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
const FamilyInfo = () =>{
  return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <View style = {styles.row1}> 
            <AntDesign name="bars" size={40} color="gray" />
            <AntDesign name="serach1" size={40} color="gray" />
            <Text style = {styles.guestName}>이성진님</Text>
          </View>
          <View style = {styles.row2}>
          <AntDesign name="team" size={50} color="white" />
            <AntDesign name="idcard" size={50} color="gray" />
          </View>
        </View>
        <View style = {styles.body}>
        </View>
        <View style = {styles.footer}>
          <AntDesign name="home" size={60} color="white" />
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
      backgroundColor: "#57C5B6",
    },
    row1:{
      flex: 1,
      flexDirection: "row",
    },
    guestName:{
      color:"white",
      fontSize: 40,
      fontWeight: 600,
      alignItems: "center",
    },
    row2:{
      flex:1,
      flexDirection: "row",
    },
    body: {
      flex: 6,
      backgroundColor: "white", 
    },
    footer:{
      marginTop: "15%",
      flex: 1.2,
      backgroundColor: "#57C5B6",
      alignItems: "center",
    }
    
  });
  export default FamilyInfo;