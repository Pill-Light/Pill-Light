import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { PillData } from "../../store/PillData";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({ results }) => {
  const navigation = useNavigation();

  const navigateToDetail = (key) => {
    navigation.navigate("MyPillDetail", { pillKey: key });
  };

  return (
    <ScrollView>
      {results.map((item, index) => (
        <TouchableOpacity
          style={styles.searchResult}
          key={item.key}
          onPress={() => navigateToDetail(item.key)}
        >
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
