import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
const FamilyInfo = () =>{
  return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <View style = {styles.row1}> 
            <AntDesign name="bars" size={40} marginTop= {30} color="gray" />
            <AntDesign name="search1" size={40} marginTop= {30} color="gray"  />
            <Text style = {{
               color:"white",
               fontSize: 20,
               fontWeight: 600,
               marginTop: 40, 
              }}>
                이성진님
            </Text>
          </View>
          <View style = {styles.row2}>
          <AntDesign name="team" size={50} color="white" />
          <AntDesign name="idcard" size={50} color="gray" />
          </View>
        </View>
        <View style = {styles.body}>
          <View style = {styles.familyLine}>
            <AntDesign name="pluscircleo" size={30} color="black" />
            <Text style = {styles.familyName}>이숙자 (32세) 자녀</Text></View>
          <View style = {styles.familyline2}>
            <AntDesign name="pluscircleo" size={30} color="black" />
            <Text style = {styles.addFamily}>가족 추가하기</Text>
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
      flex : 1
        },
    header:{
      flex: 2,
      backgroundColor: "#57C5B6",
    },
    row1:{
      flex: 1,
      flexDirection: "row",
      marginTop: 20,
    },
    guestName:{
      color:"white",
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
    addFamily:{
      color:"black",
      fontSize: 20,
      fontWeight: 600,
      alignItems: "center", 
    },
    footer:{
      marginTop: 10,
      flex: 1.2,
      backgroundColor: "#57C5B6",
      alignItems: "center",
    }
    
  });
  export default FamilyInfo;