import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Fragment, useState } from "react";
import { PillData } from "../store/PillData";
//timePicker
import TimePickerExample from "../components/TimePickerExample";
//하단바
import { Ionicons } from "@expo/vector-icons";
import NavigationBar from "../components/UI/NavigationBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyPill = ({ navigation }) => {
  const MyPillData = [...PillData];
  const [MypillData, setMyPillData] = useState(PillData);
  const toggleSwitch = (index) => {
    const updatedPillData = [...myPillData];
    updatedPillData[index].notice = !updatedPillData[index].notice;
    setMyPillData(updatedPillData);
  };

  const [currentPage, setCurrentPage] = useState(0);

  const handleSlidePress = (key) => {
    navigation.navigate("MyPillDetail", { pillKey: key });
  };

  return (
    <Fragment style={styles.container}>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <StatusBar />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={70}
            color="#57C5B6"
            style={styles.backButton}
            onPress={() => navigation.navigate("MyPage")}
          />
        </TouchableOpacity>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.mainText}>복용 중인 약</Text>
        </View>
        <View style={{ width: 70.5, height: 70.5 }}></View>
      </View>

      {/* body */}
      <View style={styles.body}>
        {/* carousel */}
        <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={styles.scrollWrapper}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const pageIndex = Math.round(offsetX / windowWidth);
            setCurrentPage(pageIndex);
          }}
          scrollEventThrottle={200}
        >
          {MyPillData.map((item, index) => {
            return (
              <View style={styles.slide} key={item.key}>
                {/* 시간이랑 스위치 들어가는 부분인 pillOption */}
                <View style={styles.pillOption}>
                  <View>
                    <TimePickerExample
                      style={{ transform: [{ scaleX: 4 }, { scaleY: 4 }] }}
                    />
                  </View>
                  <Switch
                    style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                    onValueChange={() => toggleSwitch(index)}
                    value={item.notice}
                  />
                </View>

                {/* 촬영한 알약 이미지 들어가는 부분인 pillImageWrapper */}
                <TouchableOpacity
                  onPress={() => handleSlidePress(item.key)}
                  style={styles.pillImageWrapper}
                >
                  <View style={styles.pillImageView}>
                    <ImageBackground
                      style={styles.pillImage}
                      resizeMode="stretch"
                      source={item.image}
                    />
                  </View>
                  <Text style={styles.pillName}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        {/* dots */}
        <View style={styles.dotsContainer}>
          {MyPillData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                index === currentPage ? styles.activeDot : styles.inactiveDot,
              ]}
              onPress={() => setCurrentPage(index)}
            />
          ))}
        </View>
      </View>

      {/* 하단바 */}
      <NavigationBar />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#57C5B6",
  },
  backButton: {},
  mainTextWrapper: {},
  mainText: {
    fontSize: 35,
    color: "#57C5B6",
  },

  body: {
    flex: 6,
    backgroundColor: "white",
    alignContent: "center",
  },
  scrollWrapper: {},
  slide: {
    backgroundColor: "white",
    width: windowWidth,
  },
  pillOption: {
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: "10%",
    marginRight: "10%",
  },
  pillImageWrapper: {
    alignItems: "center",
    height: "65%",
    marginTop: "5%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  pillImageView: {
    borderRadius: "15%",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#97DEFF",
    padding: "3%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
  },
  pillName: {
    marginTop: "4%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#0",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "skyblue", // 현재 페이지 dot의 색상을 설정합니다.
  },
  inactiveDot: {
    backgroundColor: "#e9e9e9", // 비활성화된 dot의 색상을 설정합니다.
  },
});

export default MyPill;
