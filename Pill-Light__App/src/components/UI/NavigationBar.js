import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const NavigationBar = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {/*modal*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("OnCamera");
                }}
              >
                <Text style={styles.textStyle}>이미지 검색</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("SearchPills");
                }}
              >
                <Text style={styles.textStyle}>이름으로 검색</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/*bottom-bar*/}
        <TouchableOpacity style={styles.bottomButton}>
          <Entypo
            name="home"
            size={50}
            color="#fff"
            onPress={() => navigation.navigate("MainPage")}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>메인페이지</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialCommunityIcons
            name="pill"
            size={50}
            color="#fff"
            onPress={() => setModalVisible(true)}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome
            name="user"
            size={50}
            color="#fff"
            onPress={() => navigation.navigate("MyPage")}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>내 정보</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57C5B6",
    flexDirection: "row",
  },
  bottomButton: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  modalView: {
    margin: "20%",
    marginTop: "140%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: "10%",
    marginVertical: "2%",
  },
  buttonOpen: {
    backgroundColor: "#000",
  },
  buttonClose: {
    backgroundColor: "#57C5B6",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NavigationBar;
