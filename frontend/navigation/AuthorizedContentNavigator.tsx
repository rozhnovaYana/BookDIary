import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthorizedContentTabNavigator from "./AuthorizedContentTabNavigator";
import { AuthorizedContentNavigator } from "./types";
import AddNewBook from "../screens/AddNewBook";
const { Navigator, Screen } =
  createNativeStackNavigator<AuthorizedContentNavigator>();
export default () => {
  return (
    <Navigator>
      <Screen
        component={AuthorizedContentTabNavigator}
        name="AuthorizedContentTabNavigator"
        options={{
          headerShown: false,
        }}
      />
      <Screen name="AddNewBook" component={AddNewBook} />
    </Navigator>
  );
};
