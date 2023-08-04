import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthorizedContentTabNavigator from "./AuthorizedContentTabNavigator";
import { AuthorizedContentNavigator } from "./types";
const { Navigator, Screen } =
  createNativeStackNavigator<AuthorizedContentNavigator>();
export default () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        component={AuthorizedContentTabNavigator}
        name="AuthorizedContentTabNavigator"
      />
    </Navigator>
  );
};
