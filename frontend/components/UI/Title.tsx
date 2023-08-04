import { Text, View, StyleSheet, StyleProp, TextStyle } from "react-native";
import { Colors, Fonts } from "../../constants/constants";

export default ({
  children,
  textStyle,
}: {
  children: string;
  textStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 38,
    paddingBottom: 32,
  },
  text: {
    color: Colors.black_600,
    fontFamily: Fonts.regular,
    fontSize: 22,
  },
});
