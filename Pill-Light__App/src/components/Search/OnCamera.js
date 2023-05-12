import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const OnCamera = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          촬영을 위해서는 권한이 필요합니다
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={70}
            color="#57C5B6"
            style={styles.backButton}
            onPress={() => navigation.navigate("SearchPills")}
          />
        </TouchableOpacity>
        <Text style={styles.text}>알약 이미지 검색</Text>
      </View>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.setSnap}>
            <FontAwesome name="camera" style={styles.snapButton} size={60} />
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  topBar: {
    flex: 0.1,
    flexDirection: "row",
  },
  camera: {
    flex: 0.8,
    flexDirection: "column-reverse",
  },
  backButton: {
    marginBottom: "5%",
  },
  text: {
    fontSize: 25,
    fontWeight: 800,
    color: "#57C5B6",
    marginLeft: "11%",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  snapButton: {
    color: "#57C5B6",
    padding: "5%",
    marginTop: "4%",
    marginBottom: "-4%",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#57C5B6",
  },
});

export default OnCamera;
