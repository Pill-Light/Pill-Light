import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SearchTabBar = () => {
  return (
    <>
      <TouchableOpacity style={styles.homeButton}>
        <Ionicons name="home" size={80} color="#57C5B6" />
      </TouchableOpacity>
      <View style={styles.centerButton}>
        <TouchableOpacity>
          <FontAwesome name="camera" size={50} color="#57C5B6" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.users}>
        <FontAwesome name="users" size={80} color="#57C5B6" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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

export default SearchTabBar;
