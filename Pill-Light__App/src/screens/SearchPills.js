import { SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SearchResult from "../components/Search/SearchResult";

const SearchPills = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="궁금하신 알약을 검색해주세요"
            placeholderTextColor="grey"
            style={styles.inputText}
          ></TextInput>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={56} color="#57C5B6" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <SearchResult />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    borderBottomWidth: "4%",
    borderColor: "#57C5B6",
  },
  searchBar: {
    flex: 1,
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputText: {
    fontSize: 18,
    width: "70%",
    backgroundColor: "#fafafa",
    padding: "4%",
    margin: "3%",
    borderRadius: 10,
    marginVertical: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchButton: {
    alignSelf: "flex-end",
    marginBottom: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  body: {
    flex: 6,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchPills;
