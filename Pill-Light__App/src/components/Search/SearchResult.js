import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image, TouchableOpacity } from "react-native";

const SearchResult = () => {
  const pillsList = [
    {
      key: 1,
      image: require("../../../assets/타이레놀.png"),
      name: "타이레놀",
    },
    {
      key: 2,
      image: require("../../../assets/사리돈.png"),
      name: "사리돈",
    },
    {
      key: 3,
      image: require("../../../assets/타미노펜.png"),
      name: "타미노펜",
    },
    {
      key: 4,
      image: require("../../../assets/써스펜.png"),
      name: "써스펜",
    },
    {
      key: 5,
      image: require("../../../assets/아스피린.png"),
      name: "아스피린",
    },
    {
      key: 6,
      image: require("../../../assets/인데놀정.png"),
      name: "인데놀정",
    },
  ];
  return (
    <ScrollView>
      {pillsList.map((item, index) => (
        <TouchableOpacity style={styles.searchResult} key={index}>
          <Image style={styles.pillsImage} source={item.image} />
          <View style={styles.pillName}>
            <Text style={styles.font}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
