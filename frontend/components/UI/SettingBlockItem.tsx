import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "./Icon";
import { Colors, Fonts } from "../../constants/constants";

export default ({
  icon,
  text,
  isToggler = false,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  isToggler?: boolean;
}) => {
  return (
    <View style={styles.wrapper}>
      <Icon name={icon} size={14} style={styles.icon} />
      <View style={styles.borderedContent}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 24,
  },
  textWrapper: {
    flex: 1,
  },
  borderedContent: {
    borderBottomColor: Colors.black_400,
    borderBottomWidth: 1,
    paddingVertical: 9,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: Colors.black_600,
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
});
