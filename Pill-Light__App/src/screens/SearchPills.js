import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import SearchResult from "../components/Search/SearchResult";
import NavigationBar from "../components/UI/NavigationBar";
import { PillData } from "../store/PillData";

const SearchPills = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputTextHandler = (text) => {
    setSearchText(text);
  };

  const searchHandler = () => {
    const filteredResults = PillData.filter(
      (item) =>
        item.info.toLowerCase().includes(searchText.toLowerCase()) ||
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="품명 또는 증상을 입력해주세요"
              placeholderTextColor="grey"
              value={searchText}
              onChangeText={inputTextHandler}
              style={styles.inputText}
            ></TextInput>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome
                name="search"
                size={56}
                color="#57C5B6"
                onPress={searchHandler}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <SearchResult results={searchResults} />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0.15, backgroundColor: "#57C5B6" }}>
        <NavigationBar />
      </SafeAreaView>
    </>
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
    marginBottom: "5%",
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
