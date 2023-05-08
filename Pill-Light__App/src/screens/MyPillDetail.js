import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const MyPillDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>약 상세 정보 페이지</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default MyPillDetail