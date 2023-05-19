import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import NavigationBar from "../components/UI/NavigationBar";
import Modal from "react-native-modal";
import { NavigationContainer } from "@react-navigation/native";

const FamilyAdd = () =>{
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return(
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
          <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={50}
            color="#57C5B6"
            style={styles.backButton}
            onPress={() => navigation.navigate("MyPage")}
          />
        </TouchableOpacity>
            <Text style={styles.guestName}>이성진님 (68세)</Text>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={50} color="#57C5B6" />
            </TouchableOpacity>
        </View>
      </View>
        <View style = {styles.body}>
            <View>
                <TextInput
                        placeholder='이름'
                        placeholderTextColor="lighterGrey"
                        style={styles.registerInput}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='나이'
                        placeholderTextColor="lighterGrey"
                        style={styles.registerInput}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='전화번호'
                        placeholderTextColor="lighterGrey"
                        style={styles.registerInput}
                    >  
                    </TextInput>                  
                    <TextInput
                      placeholder='가족관계'
                      placeholderTextColor="lighterGrey"
                      style={styles.registerInput}
                    >
                    </TextInput>                
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                  onPress={() => setIsChecked(!isChecked)} >
                  {isChecked && <FontAwesome name="check" size={20} color="white" />}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>동의합니다.</Text>           
                  <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
                    <View style={styles.modalContainer}>
                      <Text style={styles.modalText}>저장되었습니다.</Text>
                    </View>
                  </Modal>
                </View>
                <View style={styles.saveBtnContainer}>
                  <TouchableOpacity onPress={openModal} style={styles.saveBtn}>
                  <Text style={styles.saveInfo}>저장하기</Text>
                  </TouchableOpacity>
                </View>
                </View>
            </View>
          <NavigationBar />
      </SafeAreaView>
    </NavigationContainer>
    );

  };

  const styles = StyleSheet.create({
    container: {
      flex : 1
        },
    header:{
      flex: 1,
      backgroundColor: "white",
      flexDirection: "row",
    },
    backButton: {
      marginBottom: "5%",
    },
    searchBar: {
      flex: 1,
      heighft: "70%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    searchButton: {
      alignSelf: "inline-flex",
      marginTop: "2%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,  
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
    },
    guestName:{
      alignSelf: "inline-flex",
      color:"black",
      fontSize: 25,
      fontWeight: 600,
      marginTop: "5%",
      marginLeft: "12%",
      marginRight: "15%",
    },
    body: {
      flex: 6,
      backgroundColor: "white", 
    }, 
    checkboxContainer: {
      flexDirection: "row",
      marginVertical: "2%",
      marginLeft: "5%",
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#159895",
      justifyContent: "center",
      alignItems: "center",
    },
    checkboxChecked: {
      backgroundColor: "#159895",
    },
    checkboxLabel: {
      marginLeft: "2%",
      fontSize: 18,
      color: "#159895",
    },
    registerInput: {
      fontSize: 18,
      width: 400,
      backgroundColor: "#fafafa",
      padding: "4%",
      margin: "5%",
      marginVertical: "1%",
    },
    modalContainer: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveBtnContainer: {
      alignItems: 'center',
      marginTop: "40%",
    },
    saveBtn: {
      backgroundColor: "#159895",
      width: "100%",
      height: "30%",
      marginBottom: "12%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    saveInfo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
  }, 
  });
  export default FamilyAdd;