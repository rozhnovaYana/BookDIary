import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors, Fonts } from "../../constants/constants";

export default ({
  children,
  style,
  onPress,
  disabled = false,
  mode = "filled",
}: {
  children: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  mode?: "filled" | "regular";
}) => {
  const isFilled = mode === "filled";
  return (
    <Pressable
      onPress={onPress}
      style={[isFilled ? styles.wrapperFilled : styles.wrapperRegular, style]}
      disabled={disabled}
    >
      <Text style={isFilled ? styles.textFilled : styles.textRegular}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperFilled: {
    backgroundColor: Colors.plum_500,
    paddingVertical: 10,
    width: "95%",
    borderRadius: 100,
    alignSelf: "center",
  },
  wrapperRegular: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderBottomColor: Colors.plum_500,
    borderBottomWidth: 1,
  },
  textFilled: {
    color: Colors.plum_150,
    fontFamily: Fonts.medium,
    fontSize: 14,
    textAlign: "center",
  },
  textRegular: {
    color: Colors.plum_500,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
});
