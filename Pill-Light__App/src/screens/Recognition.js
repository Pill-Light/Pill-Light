import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../components/UI/NavigationBar";

import { PillData } from "../store/PillData";

const Recognition = () => {
  const navigation = useNavigation();
  const navigateToDetail = (key) => {
    navigation.navigate("MyPillDetail", { pillKey: key });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={styles.countPill}>{PillData.length}</Text>
        </View>
        <Text style={styles.context}>개의 약이 인식되었습니다.</Text>
      </View>
      <View style={styles.body}>
        <View style={{ width: 350, height: 500, backgroundColor: "#57C5B6" }}>
          <ScrollView>
            {PillData.map((item, index) => (
              <>
                <TouchableOpacity
                  style={styles.layout}
                  key={item.key}
                  onPress={() => navigateToDetail(item.key)}
                >
                  <ImageBackground
                    style={styles.pillsImage}
                    source={item.image}
                  />
                  <View style={styles.pillName}>
                    <Text style={styles.font}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.line}></View>
              </>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#57C5B6" }}>
          <NavigationBar />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1.1,
    backgroundColor: "#E0E0E0",
  },
  circle: {
    marginTop: 67,
    marginLeft: 35,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#57C5B6",
  },
  countPill: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  context: {
    marginTop: -50,
    marginLeft: 90,
    fontSize: 28,
    fontWeight: "bold",
  },
  body: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  layout: {
    flexDirection: "row",
  },
  searchResult: {
    flex: 1,
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: "2%",
    borderBottomColor: "#57C5B6",
  },
  pillsImage: {
    width: 100,
    height: 100,
    marginTop: 22,
    marginLeft: 20,
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
    color: "#fff",
    marginTop: "4%",
  },
  line: {
    marginTop: 15,
    width: 500,
    height: 2,
    backgroundColor: "#E0E0E0",
  },
  footer: {
    flex: 1,
  },
});

export default Recognition;
