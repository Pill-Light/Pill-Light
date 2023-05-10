import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const MainPage = () => {
  return (
    <>
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
                  <Text style={{ fontSize: 18 }}>타이레놀</Text>
                  <Text style={{ fontSize: 18 }}>게보린</Text>
                </View>
              </View>
              <View style={styles.morning}>
                <View style={styles.TextList}>
                  <Text style={{ fontSize: 25 }}>점심</Text>
                </View>
                <View style={styles.TextList}>
                  <Text style={{ fontSize: 18 }}>타이레놀</Text>
                  <Text style={{ fontSize: 18 }}>게보린</Text>
                </View>
              </View>
              <View style={styles.morning}>
                <View style={styles.TextList}>
                  <Text style={{ fontSize: 25 }}>저녁</Text>
                </View>
                <View style={styles.TextList}>
                  <Text style={{ fontSize: 18 }}>타이레놀</Text>
                  <Text style={{ fontSize: 18 }}>게보린</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonbox}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>복용완료!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.camera}>
            <FontAwesome
              style={styles.pic}
              name="camera"
              size={80}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mypage}>
            <FontAwesome
              style={styles.pic}
              name="users"
              size={75}
              color="#57C5B6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  head: {
    flex: 1.5,
    borderBottomWidth: "4%",
    borderBottomColor: "grey",
    flexDirection: "row",
  },
  logo: {
    margin: "8%",
    marginTop: "15%",
    padding: "2%",
    flex: 1,
    width: "30%",
    height: "50%",
  },
  inputText: {
    flex: 2.1,
    fontSize: 18,
    width: "30%",
    height: "30%",
    backgroundColor: "#DCDCDC",
    alignSelf: "flex-end",
    padding: "2%",
    margin: "3%",
    marginBottom: "5%",
    borderRadius: 10,
    marginVertical: "3%",
    marginTop: "18%",
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
    padding: "5%",
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
    marginRight: "15%",
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
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#57C5B6",
    width: "90%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    flex: 1,
    borderTopWidth: "4%",
    borderTopColor: "grey",
    flexDirection: "row",
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
