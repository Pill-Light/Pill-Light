import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FamilyInfo(){
  return(
  <View style = {styles.container}>
    <Text style = {styles.text}>Hide</Text>
    <StatusBar style = "auto" />
  </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 28,
      color: "red",
    },



  });