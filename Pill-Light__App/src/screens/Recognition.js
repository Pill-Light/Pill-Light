import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from "../components/UI/NavigationBar";

const Recognition = () => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.circle}>
                <View style={{width:70,height:70,
                    borderRadius:50,
                    backgroundColor:"#57C5B6"}}>
                        <Text style={{fontSize:50,textAlign:'center',marginTop:5,fontWeight:'bold'}}>3</Text>
                </View>
                </View>
                <Text style={styles.context}>
                개의 약이 인식되었습니다.
                </Text>
            </View>
            <View style={styles.middle}>
                <View style =
                    {{width:350,height:500,
                    backgroundColor:"#57C5B6"}}>
                        <ScrollView>
                            <View style={styles.layout}>
                            <ImageBackground
                            style={{width:100,height:100,marginTop:22,marginLeft:20}}
                            source={require('../../assets/사리돈.png')}
                            ></ImageBackground>
                            <View style={styles.inform}>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>사리돈</Text>
                                <Text>
                                </Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  효능-효과 : 진통,오한,발열시의 해열</Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  용법 : 성인 1회 1정 1일 3회 복용간격 4시간 이상, 15세 미만 복용 불가</Text>
                            </View>
                            </View>
                            <View style={styles.line}>
                            <View style={{width:500,height:2,
                                backgroundColor:"#E0E0E0"}}>
                            </View>
                            <View style={styles.layout}>
                            <ImageBackground
                            style={{width:100,height:100,marginTop:22,marginLeft:20}}
                            source={require('../../assets/써스펜.png')}
                            ></ImageBackground>
                                <View style={styles.inform}>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>써스펜</Text>
                                <Text>

                                </Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  효능-효과 : 해열, 감기 의한 통증 완화</Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  용법 : 12세 이상 소아 및 성인 매 8시간마다 2정씩 복용</Text>
                            </View>
                            </View>
                            </View>
                            <View style={styles.line}>
                            <View style={{width:500,height:2,
                                backgroundColor:"#E0E0E0"}}>
                            </View>
                            </View>
                            <View style={styles.layout}>
                            <ImageBackground
                            style={{width:100,height:100,marginTop:22,marginLeft:20}}
                            source={require('../../assets/아스피린.png')}
                            ></ImageBackground>
                                <View style={styles.inform}>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>아스피린</Text>
                                <Text>

                                </Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  효능-효과 : 혈전 생성 억제, 심혈관계 위험성 감소</Text>
                                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                                  용법 : 성인 1일 1회 1정, 의사 처방 없이 고용량 복용 불가</Text>
                            </View>
                            </View>
                            <View style={styles.line}>
                            <View style={{width:500,height:2,
                                backgroundColor:"#E0E0E0"}}>
                            </View>
                            </View>
                        </ScrollView>
                </View>
            </View>
            <View style={styles.bottom}>
              <NavigationContainer>
            <NavigationBar />
            </NavigationContainer>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
  flex:1
},
top:{
    flex:1.1,
    backgroundColor:"#E0E0E0"
},
circle:{
    marginTop:67,
    marginLeft:35
},
context:{
    marginTop:-50,
    marginLeft:90,
    fontSize:28,
    fontWeight:'bold'
},
middle:{
    flex:4,
    justifyContent:"center",
    alignItems:"center",
},
layout:{
    flexDirection:'row'
},
inform:{
    flex:2,
    justifyContent:"center",
    marginTop:15,
    marginLeft:30,
    marginRight:25
},
line:{
    marginTop:15
},
bottom:{
    flex:1,
},
homeButton: {
    alignSelf: "flex-start",
    marginLeft: "9%",
    marginTop: "5%",
    marginRight: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  centerButton: {
    alignSelf: "center",
    backgroundColor: "white",
    padding: "5%",
    marginTop: "-22%",
    marginHorizontal: "3%",
    borderRadius: "60%",
    borderColor: "#57C5B6",
    borderWidth: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  users: {
    alignSelf: "flex-end",
    marginTop: "-24%",
    marginBottom: "4.5%",
    marginRight: "7%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
});

export default Recognition