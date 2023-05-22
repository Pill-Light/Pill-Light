import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { PillData } from '../store/PillData';
import { Ionicons } from '@expo/vector-icons';
import NavigationBar from '../components/UI/NavigationBar';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const MyPillDetail = ({ navigation, route }) => {

  const { pillKey } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={70}
            color="#57C5B6"
            style={styles.backButton}
            onPress={() => navigation.navigate("MyPill")}
          />
        </TouchableOpacity>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.mainText}>{PillData[pillKey - 1].name}</Text>
        </View>
        <View style={{ width: 70.5, height: 70.5 }}></View>
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={styles.pillDetailContainer}>
          <ImageBackground style={styles.pillImage}
          resizeMode="stretch"
          source={PillData[pillKey - 1].image}>
          </ImageBackground>
          <View style={styles.pillInfoWrapper}>
            <Text style={styles.pillInfoText}>{PillData[pillKey - 1].info}</Text>
          </View>
        </View>

      </View>

      {/* footer */}
      <NavigationBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#57C5B6",
  },
  mainTextWrapper: {
  },
  mainText: {
    fontSize: 35,
    color: "#57C5B6",
  },

  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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