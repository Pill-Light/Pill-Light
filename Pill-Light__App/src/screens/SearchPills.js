import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SearchTabBar from "../components/SearchTabBar";

const SearchPills = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}></View>
        <View style={styles.searchBar}>
          <TextInput style={styles.inputText}></TextInput>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={56} color="#57C5B6" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}></View>
      <View style={styles.footer}>
        <SearchTabBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: "#fff",
  },
  header: {
    flex: 1.2,
    paddingVertical: "2%",
    borderBottomWidth: "4%",
    borderColor: "#57C5B6",
  },
  logo: {
    flex: 0.4,
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
    backgroundColor: "#fff",
    width: "50%",
    height: "70%",
    paddingHorizontal: "38%",
    marginBottom: "0%",
    borderRadius: "8%",
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
    marginLeft: "3%",
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
    flex: 1.1,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingBottom: "7%",
    paddingTop: "5%",
    borderTopWidth: "4%",
    borderColor: "#57C5B6",
  },
  homeButton: {
    alignSelf: "flex-start",
    marginLeft: "7%",
    marginTop: "2%",
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
    marginBottom: "4.5%",
    marginLeft: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
});

export default SearchPills;
