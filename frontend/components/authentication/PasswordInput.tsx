import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Fonts } from "../../constants/constants";

import PressableIcon from "../UI/Icon";
import Input, { InputProps } from "../UI/Input";

export default ({ isValid, children, ...textInput }: InputProps) => {
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((passwordVisible) => !passwordVisible);
  };

  return (
    <>
      <Input
        isValid={isValid}
        secureTextEntry={!passwordVisible}
        {...textInput}
      >
        <PressableIcon
          size={20}
          onPress={togglePasswordVisibility}
          name={passwordVisible ? "eye-off-outline" : "eye-outline"}
        />
      </Input>
      <View>
        <Text style={styles.forgotPasswordText}>{children}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    color: "#757575",
    fontFamily: Fonts.medium,
    fontSize: 11,
    textAlign: "right",
    marginTop: -8,
  },
});
