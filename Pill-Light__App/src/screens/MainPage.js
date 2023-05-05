import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SearchTabBar from "../components/Search/SearchTabBar";
import SearchResult from "../components/Search/SearchResult";

const MainPage = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.head}>
          <TextInput
            placeholder="약 검색"
            placeholderTextColor="grey"
            style={styles.inputText}
          ></TextInput>
          {/* <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={56} color="#57C5B6" />
            </TouchableOpacity> */}
        </View>
        <View style={styles.body}></View>
        <View style={styles.footer}></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  head: {
    flex: 1.5,
    borderBottomWidth: "4%",
    borderBottomColor: "grey",
  },
  searchButton: {
    alignSelf: "flex-end",
    marginBottom: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  logo: {
    flex: 0.4,
  },
  inputText: {
    fontSize: 18,
    width: "50%",
    height: "30%",
    backgroundColor: "#DCDCDC",
    alignSelf: "flex-end",
    padding: "2%",
    margin: "3%",
    borderRadius: 10,
    marginVertical: "3%",
    marginTop: "18%",
  },
  body: {
    flex: 6,
  },
  footer: {
    flex: 1,
    borderTopWidth: "4%",
    borderTopColor: "grey",
  },
});
export default MainPage;
