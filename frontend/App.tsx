import { useCallback, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import RootNavigation from "./navigation/RootNavigation";

import { Fonts, Colors } from "./constants/constants";
import AuthContextProvider from "./store/auth/AuthContext";

SplashScreen.preventAutoHideAsync();
export default () => {
  const { light, medium, regular, bold } = Fonts;

  const [fontsLoaded] = useFonts({
    [light]: require("./assets/fonts/Poppins-Light.ttf"),
    [medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [regular]: require("./assets/fonts/Poppins-Regular.ttf"),
    [bold]: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" backgroundColor={Colors.plum_100} />
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AuthContextProvider>
            <RootNavigation />
          </AuthContextProvider>
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
