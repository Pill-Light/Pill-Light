import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const MyPill = ({ navigation }) => {
  const [data, setData] = useState([
    {name: '사리돈', key: '1', image: '../../assets/사리돈.jpg'},
    {name: '써스펜', key: '2', image: '../../assets/써스펜.jpg'},
    {name: '아스피린', key: '3', image: '../../assets/아스피린.jpg'},
    {name: '인데놀정', key: '4', image: '../../assets/인데놀정.jpg'},
  ])

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <View style={styles.mainTextWrapper}>
              <Text style={styles.mainText}>복용 중인 약</Text>
            </View>
          </View>



          {/* body */}
          <View style={styles.body}>

            {/* carousel */}
            <ScrollView
              horizontal
              pagingEnabled
              contentContainerStyle={styles.scrollWrapper}
              showsHorizontalScrollIndicator={false}>
                {data.map(item =>{
                  return (

                    <View style={styles.slide} key={item.key}>

                      {/* 시간이랑 스위치 들어가는 부분인 pillOption */}
                      <View style={styles.pillOption}>
                        <View style={styles.timeSet}>
                          <Text>시간 설정하는 곳</Text>
                        </View>
                        <Switch
                          style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                      
                      {/* 촬영한 알약 이미지 들어가는 부분인 pillImageWrapper */}
                      <TouchableOpacity
                        onPress={() => navigation.navigate("MyPillDetail")}
                        style={styles.pillImageWrapper}
                      >
                        <ImageBackground 
                          style={styles.pillImage}
                          resizeMode="stretch"
                          source={require('../../assets/타미노펜.jpg')}>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>

                  )
                })}
            </ScrollView>
          </View>



          {/* footer */}
          <View style={styles.footer}></View>
        </SafeAreaView>
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
    backgroundColor: "blue",
    alignContent: "center"
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
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: "10%",
    marginRight: "10%",
  },
  timeSet: {
    backgroundColor: "skyblue",
    height: 62,
  },
  pillImageWrapper: {
    alignItems: "center",
    height: "70%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  footer: {
    flex: 1,
    backgroundColor: "#57C5B6",
  },
});

export default MyPill