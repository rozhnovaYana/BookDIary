import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigator } from "./types";
import { Colors } from "../constants/constants";

import { AuthContext } from "../store/auth/AuthContext";

import WelcomeScreen from "../screens/WelcomeScreen";

import AuthNavigator from "./AuthNavigator";

import AuthorizedContentNavigator from "./AuthorizedContentNavigator";

const { Navigator, Screen } = createNativeStackNavigator<RootNavigator>();

export default () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.plum_100,
        },
      }}
    >
      {isLogin ? (
        <Screen
          name="AuthorizedContentNavigator"
          component={AuthorizedContentNavigator}
        />
      ) : (
        <Screen name="AuthNavigator" component={AuthNavigator} />
      )}
      <Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Navigator>
  );
};
