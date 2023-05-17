import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import MainPage from "../../screens/MainPage";
import SearchPills from "../../screens/SearchPills";
import MyPage from "../../screens/MyPage";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Entypo
          name="home"
          size={50}
          color="#fff"
          onPress={() => navigation.navigate("MainPage")}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.text}>메인페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="camera-sharp"
          size={50}
          color="#fff"
          onPress={() => navigation.navigate("SearchPills")}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.text}>검색</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome
          name="user"
          size={50}
          color="#fff"
          onPress={() => navigation.navigate("MyPage")}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.text}>내 정보</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57C5B6",
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default NavigationBar;
