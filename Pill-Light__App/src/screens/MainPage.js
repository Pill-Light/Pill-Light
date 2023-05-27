import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import NavigationBar from "../components/UI/NavigationBar";
import { getPillName } from "../store/PillData";
import { getUserInfo } from "../components/UserManger";

const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const [selectedTime, setSelectedTime] = useState(""); // 새로운 상태 변수 추가

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedInUser = await getUserInfo();
        setUserInfo(loggedInUser);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const { name } = userInfo;

  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();

  useEffect(() => {
    // 시간 변경에 따라 선택된 시간 업데이트
    if (hours > 17) {
      setSelectedTime("evening");
    } else if (hours > 11) {
      setSelectedTime("afternoon");
    } else {
      setSelectedTime("morning");
    }
  }, [hours]);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            <View style={{ flex: 0.5 }}></View>
            <Text style={styles.inputText}>{name}님, 반갑습니다.</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.page}>
              <View style={styles.list}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingBottom: "5%",
                    justifyContent: "flex-start",
                  }}
                >
                  복용 목록
                </Text>
                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 23 }}>아침</Text>
                  </View>
                  <View style={styles.PillList}>
                    <Text style={{ fontSize: 14 }}>{getPillName(1)}</Text>
                    <Text style={{ fontSize: 18 }}></Text>
                  </View>
                  <View style={styles.checkbox}>
                    {/* 아침 체크 박스 */}
                    {selectedTime === "morning" && ( // 선택된 시간에 따라 체크박스 표시
                      <TouchableOpacity style={styles.checkboxButton}>
                        {/* 체크 아이콘 */}
                        <Text style={styles.check}>✓</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 23 }}>점심</Text>
                  </View>
                  <View style={styles.PillList}>
                    <Text style={{ fontSize: 14 }}>{getPillName(2)}</Text>
                    <Text style={{ fontSize: 18 }}></Text>
                  </View>
                  <View style={styles.checkbox}>
                    {/* 점심 체크 박스 */}
                    {/* 점심 체크 박스 */}
                    {selectedTime === "afternoon" && ( // 선택된 시간에 따라 체크박스 표시
                      <TouchableOpacity style={styles.checkboxButton}>
                        {/* 체크 아이콘 */}
                        <Text style={styles.check}>✓</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                <View style={styles.morning}>
                  <View style={styles.TextList}>
                    <Text style={{ fontSize: 23 }}>저녁</Text>
                  </View>
                  <View style={styles.PillList}>
                    <Text style={{ fontSize: 14 }}>
                      {getPillName(3)}, {getPillName(4)}
                    </Text>
                    <Text style={{ fontSize: 18 }}></Text>
                    <View style={styles.checkbox}>
                      {/* 저녁 체크 박스 */}
                      {selectedTime === "evening" && ( // 선택된 시간에 따라 체크박스 표시
                        <TouchableOpacity style={styles.checkboxButton}>
                          {/* 체크 아이콘 */}
                          <Text style={styles.check}>✓</Text>
                        </TouchableOpacity>
                      )}
                    </View>
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
    flex: 1.3,
    width: "30%",
    height: "80%",
  },
  inputText: {
    flex: 2,
    fontSize: 18,
    fontWeight: "500",
    width: "35%",
    height: "40%",
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    padding: "3%",
    paddingTop: "4%",
    margin: "3%",
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

    backgroundColor: "#FAFAFA",
  },
  list: {
    flex: 4,
    margin: "5%",
    width: "95%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  morning: {
    flex: 1.5,
    borderColor: "black",
    flexDirection: "row",
    width: "99%",
    alignItems: "center",
    justifyContent: "center",
    margin: "3%",
    padding: "5%",
    borderWidth: "0.5%",
    borderRadius: 4,
    borderColor: "white",
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  TextList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: "2%",
    padding: "1%",
  },
  PillList: {
    flex: 1.5,
    flexDirection: "row",
    margin: "2%",
    padding: "1%",
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

  check: {
    fontSize: 24,
    color: "#57C5B6",
  },
});
export default MainPage;
