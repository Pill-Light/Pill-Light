import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const MyPill = () => {
  const [data, setData] = useState([
    {name: '사리돈', key: '1', image: '../../assets/타미노펜.jpg'},
    {name: '써스펜', key: '2', image: '../../assets/써스펜.jpg'},
    {name: '아스피린', key: '3', image: '../../assets/아스피린.jpg'},
    {name: '인데놀정', key: '4', image: '../../assets/인데놀정.jpg'},
  ])
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.mainTextWrapper}>
              <Text style={styles.mainText}>복용 중인 약</Text>
            </View>
          </View>
          <View style={styles.body}>
            <ScrollView
              horizontal
              pagingEnabled
              contentContainerStyle={styles.scrollWrapper}
              showsHorizontalScrollIndicator={false}>
                {data.map(item =>{
                  return (
                    <View style={styles.slide} key={item.key}>
                      <View style={styles.pillOption}>
                        <Text>시간 설정이랑 스위치 버튼 들어가야 함</Text>
                      </View>
                      <View style={styles.pillImageWrapper}>
                        <Image style={styles.pillImage} source={require('../../assets/타미노펜.jpg')}>
                          
                        </Image>
                      </View>
                    </View>
                  )
                })}
            </ScrollView>
          </View>
          <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#57C5B6",
    alignItems: "center",
  },
  mainTextWrapper: {
  },
  mainText: {
    fontSize: "50%",
    marginTop: "15%",
    color: "white",
  },

  body: {
    flex: 4,
    backgroundColor: "blue",
  },
  scrollWrapper: {
    backgroundColor: "red",
  },
  slide: {
    backgroundColor: "white",
    width: windowWidth,
  },
  pillOption: {
    height: "20%",
    backgroundColor: "red",
  },
  pillImageWrapper: {
    width: "80%",
    height: "65%",
    margin: "10%",
    backgroundColor: "green",
  },
  pillImage: {
    width: "100%",
    height: "100%",
  },

  footer: {
    flex: 1,
    backgroundColor: "#57C5B6",
  },
});

export default MyPill