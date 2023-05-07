import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const MyPill = () => {
    return (
        <View style={sytles.container}>
          <View style={sytles.header}>
            <View style={sytles.mainTextWrapper}>
              <Text style={sytles.mainText}>복용 중인 약</Text>
            </View>
          </View>
          <View style={sytles.body}>
            <View>
              <Text>MyPill here!</Text>
            </View>
          </View>
          <View style={sytles.footer}></View>
        </View>
    );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
  mainTextWrapper: {
    flex: 1,
    paddingTop: "15%",
  },
  mainText: {
    flex: 1,
    fontSize: "50%",
  },

  body: {
    flex: 4,
    backgroundColor: "blue",
  },

  footer: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default MyPill