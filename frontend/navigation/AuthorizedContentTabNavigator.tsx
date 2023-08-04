import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthorizedContentTabNavigator } from "./types";

import PressableIcon from "../components/UI/Icon";
import { Colors } from "../constants/constants";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BooksNavigator from "./BooksNavigator";
import BooksScreen from "../screens/BooksScreen";

const { Navigator, Screen } =
  createBottomTabNavigator<AuthorizedContentTabNavigator>();

export default () => {
  return (
    <View style={styles.wrapper}>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.plum_500,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.plum_50,
            elevation: 0,
            borderTopWidth: 0,
            paddingRight: "25%",
          },
          tabBarInactiveTintColor: Colors.plum_200,
        }}
        sceneContainerStyle={{
          backgroundColor: Colors.plum_100,
          paddingHorizontal: 16,
        }}
      >
        <Screen
          name="Books"
          component={BooksScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <PressableIcon
                color={color}
                size={size}
                name={focused ? "home-sharp" : "ios-home-outline"}
              />
            ),
          }}
        />
        <Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <PressableIcon
                color={color}
                size={size}
                name={focused ? "settings" : "settings-outline"}
              />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <PressableIcon
                color={color}
                size={size}
                name={focused ? "person" : "person-outline"}
              />
            ),
          }}
        />
      </Navigator>
      <PressableIcon
        name="ios-add-circle"
        color={Colors.plum_500}
        size={54}
        style={styles.addButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  addButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
});
