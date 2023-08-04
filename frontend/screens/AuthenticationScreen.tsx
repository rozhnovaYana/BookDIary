import { Text, StyleSheet, ScrollView } from "react-native";
import { Colors, Fonts } from "../constants/constants";
import Logo from "../components/UI/Logo";
import { useState } from "react";

import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AuthorizedContentTabNavigator,
  RootNavigator,
} from "../navigation/types";
import AuthForm from "../components/authentication/AuthForm";

export type AuthenticationScreenParamList = CompositeScreenProps<
  NativeStackScreenProps<RootNavigator, "AuthNavigator">,
  NativeStackScreenProps<AuthorizedContentTabNavigator>
>;
export default () => {
  const [authStatus, setAuthStatus] = useState<"login" | "signup">("login");
  const isLogin = authStatus === "login";
  const title = isLogin ? "Login to your Account" : "Create Account";
  const onChangeMode = () => {
    setAuthStatus(() => {
      return isLogin ? "signup" : "login";
    });
  };
  return (
    <ScrollView style={[styles.wrapper]} contentContainerStyle={styles.contentContainer}>
      <Logo />
      <Text style={styles.title}>{title}</Text>
      <AuthForm mode={authStatus} onChangeMode={onChangeMode} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 40,
    height: "100%",
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: "black",
    marginVertical: 32,
  },
  contentContainer: {
    height: '100%'
  }
});
