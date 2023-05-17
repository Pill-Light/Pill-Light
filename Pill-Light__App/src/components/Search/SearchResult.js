import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image, TouchableOpacity } from "react-native";

const SearchResult = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/타이레놀.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>타이레놀</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/사리돈.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>사리돈</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/타미노펜.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>타미노펜</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/써스펜.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>써스펜</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/아스피린.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>아스피린</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchResult}>
        <Image
          style={styles.pillsImage}
          source={require("../../../assets/인데놀정.jpg")}
        ></Image>
        <View style={styles.pillName}>
          <Text style={styles.font}>인데놀정</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchResult: {
    flex: 1,
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: "2%",
    borderBottomColor: "#57C5B6",
  },
  pillsImage: {
    flex: 1,
    width: "30%",
    height: "100%",
  },
  pillName: {
    flex: 2,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 33,
    fontWeight: 700,
  },
});

export default SearchResult;
