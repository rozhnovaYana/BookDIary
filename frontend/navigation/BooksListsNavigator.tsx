import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AllBooksScreen from "../screens/AllBooksScreen";
import FavouriteBooksScreen from "../screens/FavouriteBooksScreen";
import UserBooksScreen from "../screens/UserBooksScreen";
import PressableIcon from "../components/UI/Icon";
import { Colors, Fonts } from "../constants/constants";
import { BooksListNavigator } from "./types";
import Header from "../components/home-screen/Header";
import SearchInput from "../components/UI/SearchInput";

const { Navigator, Screen } =
  createMaterialTopTabNavigator<BooksListNavigator>();

export default () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <SearchInput />
      <Navigator
        sceneContainerStyle={{
          flex: 1,
          backgroundColor: "transparent",
        }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: Fonts.medium,
            textTransform: "capitalize",
            alignItems: "center",
            justifyContent: "center",
            color: Colors.plum_500,
          },
          tabBarIconStyle: {
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.plum_500,
          },
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarStyle: {
            marginTop: 20,
            backgroundColor: "transparent",
          },
          tabBarActiveTintColor: Colors.plum_500,
          tabBarInactiveTintColor: Colors.plum_300,
          tabBarAndroidRipple: {
            color: Colors.plum_150,
          },
        }}
      >
        <Screen
          name="Library"
          component={AllBooksScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <PressableIcon
                color={color}
                size={14}
                name={focused ? "document-text-sharp" : "document-text-outline"}
              />
            ),
          }}
        />
        <Screen
          name="Books"
          component={UserBooksScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <PressableIcon
                color={color}
                size={10}
                name={focused ? "book" : "md-book-outline"}
              />
            ),
          }}
        />
        <Screen
          name="Favourite"
          component={FavouriteBooksScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <PressableIcon
                color={color}
                size={10}
                name={focused ? "ios-bookmarks-sharp" : "ios-bookmarks-outline"}
              />
            ),
          }}
        />
      </Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
