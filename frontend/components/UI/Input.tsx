import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { Colors, Fonts } from "../../constants/constants";
import PressableIcon from "./Icon";

export interface InputProps extends TextInputProps {
  isValid?: boolean;
  textInputWrapperStyles?: ViewStyle 
}
export default ({ isValid = true, textInputWrapperStyles, children, ...textInputProps }: InputProps) => {
  return (
    <View
      style={[
        styles.inputWrapper,
        textInputWrapperStyles,
        !isValid && styles.invalidInput,
      ]}
    >
      <TextInput {...textInputProps} style={[styles.input]} />
      {!isValid ? (
        <PressableIcon name="alert-circle" color={Colors.error_100} size={24} />
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: "#79747E",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  input: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: "#49454F",
    paddingVertical: 8,
    flex: 1,
  },
  invalidInput: {
    borderColor: Colors.error_100,
  },
});
