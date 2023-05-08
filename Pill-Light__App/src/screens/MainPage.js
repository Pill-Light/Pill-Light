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
            <View style={styles.list}></View>
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
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "3%",
    borderColor: "#57C5B6",
    borderRadius: 10,
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
