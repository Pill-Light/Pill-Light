import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { PillData } from '../store/PillData';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const MyPillDetail = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.mainText}>{PillData[0].name}</Text>
        </View>
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={styles.pillDetailContainer}>
          <ImageBackground style={styles.pillImage}
          resizeMode="stretch"
          source={PillData[0].image}>
          </ImageBackground>
          <View style={styles.pillInfoWrapper}>
            <Text style={styles.pillInfoText}>어쩔티비 ㅋzgzgzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋㅋzgzgzzzgzggzㅇㄴㅋㅎㅋㅇㅎㅋㅇㅎㅋㅋ</Text>
          </View>
        </View>

      </View>

      {/* footer */}
      <View style={styles.footer}></View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#57C5B6",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTextWrapper: {
  },
  mainText: {
    fontSize: "50%",
    color: "white",
  },

  body: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  pillDetailContainer: {
    width: "90%",
    flex: 0.8,
    padding: "3%",
  },
  pillImage: {
    flex: 0.5,
  },
  pillInfoWrapper: {
    flex: 0.5,
  },
  pillInfoText: {
    fontSize: 18,
    lineHeight: 30,
    marginTop: "2%",
  },

  footer: {
    flex: 1,
    backgroundColor: "#57C5B6",
  },
});

export default MyPillDetail