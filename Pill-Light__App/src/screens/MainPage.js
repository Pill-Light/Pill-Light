import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import NavigationBar from "../components/UI/NavigationBar";
import { getPillName } from "../store/PillData";

const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
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
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text
                style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
              >
                알림
              </Text>
            </View>
            <View style={styles.modalBody}>
              <Text></Text>
              <Text></Text>
              {hours > 17 ? (
                <Text style={{ fontSize: 16 }}>
                  {hours}시 {min}분 저녁약을 복용하셨습니다.
                </Text>
              ) : hours > 11 ? (
                <Text>
                  {hours}시 {min}분 점심약을 복용하셨습니다.
                </Text>
              ) : (
                <Text>
                  {hours}시 {min}분 아침약을 복용하셨습니다.
                </Text>
              )}
              <Text></Text>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={{ color: "white", fontSize: "18", fontWeight: "bold" }}
                >
                  확인!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{ flex: 1 }}>
          <View style={styles.head}>
            <Image
              style={styles.logo}
              source={require("../../assets/메인로고.png")}
            />
            <TextInput
              placeholder="약 검색"
              placeholderTextColor="grey"
              style={styles.inputText}
            ></TextInput>
          </View>
          <View style={styles.body}>
            <View style={styles.page}>
              <View style={styles.list}>
                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 25 }}>아침</Text>
                  </View>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 18 }}>{getPillName(1)}</Text>
                    <Text style={{ fontSize: 18 }}></Text>
                  </View>
                </View>
                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 25 }}>점심</Text>
                  </View>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 18 }}>{getPillName(2)}</Text>
                    <Text style={{ fontSize: 18 }}></Text>
                  </View>
                </View>
                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 25 }}>저녁</Text>
                  </View>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 18 }}>
                      {getPillName(3)}, {getPillName(4)}
                    </Text>
                    <Text style={{ fontSize: 18 }}></Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonbox}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.buttonText}>복용완료!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.plus}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#57C5B6",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0.15, backgroundColor: "#57C5B6" }}>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  head: {
    flex: 1,
    borderBottomWidth: "4%",
    borderBottomColor: "#57C5B6",
    flexDirection: "row",
  },
  logo: {
    margin: "3%",
    padding: "3%",
    flex: 1,
    width: "30%",
    height: "80%",
  },
  inputText: {
    flex: 2.1,
    fontSize: 18,
    width: "30%",
    height: "40%",
    backgroundColor: "#DCDCDC",
    alignSelf: "flex-end",
    padding: "2%",
    margin: "5%",
    marginBottom: "5%",
    borderRadius: 10,
    marginVertical: "3%",
    marginTop: "20%",
  },
  modalView: {
    flex: 0.5,
    width: "75%",
    height: "100%",
    marginTop: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHeader: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#57C5B6",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: { flex: 4, padding: "4%", margin: "5%", justifyContent: "center" },
  modalFooter: {
    flex: 1.8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButton: {
    borderRadius: 20,
    width: "50%",
    padding: "5%",
    backgroundColor: "#57C5B6",
    margin: "1%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 6,
  },
  page: {
    flex: 4,
    width: "80%",
    height: "30%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "8%",
    marginTop: "8%",
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "3%",
    borderColor: "#57C5B6",
    borderRadius: 10,
  },
  list: {
    flex: 3,
    margin: "5%",
    width: "90%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "3%",
    borderColor: "#57C5B6",
    borderRadius: 10,
  },
  morning: {
    borderColor: "black",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "8%",
    padding: "5%",
  },
  TextList: {
    flex: 1,
    flexDirection: "row",
    margin: "3%",
    padding: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonbox: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: "3",
    backgroundColor: "#57C5B6",
    width: "60%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: "3%",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  plus: {
    flex: "1",
    backgroundColor: "white",
    width: "60%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#57C5B6",
    borderWidth: "3%",
    margin: "3%",
  },
  camera: {
    flex: 1,
    width: "50%",
  },
  mypage: {
    flex: 1,
    width: "50%",
  },
  pic: {
    alignSelf: "center",
    margin: "2%",
    padding: "5%",
    color: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default MainPage;
