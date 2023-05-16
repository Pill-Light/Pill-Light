import { TouchableOpacity, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../screens/MainPage";
import SearchPills from "../screens/SearchPills";
import OnCamera from "./Search/OnCamera";
import FamilyInfo from "../screens/FamilyInfo";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="SerchPills" component={SearchPills} />
      <Tab.Screen name="OnCamera" component={OnCamera} />
      <Tab.Screen name="FamilyInfo" component={FamilyInfo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default TabNavigator;
