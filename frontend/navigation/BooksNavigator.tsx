import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookDetailsScreen from "../screens/BookDetailsScreen";
import BooksListsNavigator from "./BooksListsNavigator";

import { BooksNavigator } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<BooksNavigator>();

export default () => {
  return (
    <Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Screen name="BooksListNavigator" component={BooksListsNavigator} />
      <Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </Navigator>
  );
};
