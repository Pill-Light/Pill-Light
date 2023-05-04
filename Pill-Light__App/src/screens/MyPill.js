import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const MyPill = () => {
    return (
        <View style={sytles.container}>
          <View style={sytles.header}></View>
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